import { deepCopy } from '@ethersproject/properties'
import { fetchJson } from '@ethersproject/web'
import { JsonRpcBatchProvider, JsonRpcProvider } from '@ethersproject/providers'

import { RPC_URL } from '../../app'

const provider = new JsonRpcBatchProvider(RPC_URL)

export default provider

export class CustomBatchProvider extends JsonRpcProvider {
    private batch: Array<{
        request: {
            method: string
            params: Array<any>
            id: number
            jsonrpc: '2.0'
        }
        resolve: (result: any) => void
        reject: (error: Error) => void
    }> = []

    constructor(private requestsCount: number) {
        super(RPC_URL)

        if (!requestsCount) {
            throw new Error('`requestsCount` must be larger than 0')
        }
    }

    send(method: string, params: Array<any>): Promise<any> {
        if (method === 'eth_chainId') {
            return super.send(method, params)
        }

        if (this.batch.length === this.requestsCount) {
            throw new Error(
                'Calling `send` after `requestsCount` was reached. Create a new `CustomBatchProvider` instead.',
            )
        }

        const request = {
            method,
            params,
            id: this._nextId++,
            jsonrpc: '2.0',
        }

        const inflightRequest: any = { request, resolve: null, reject: null }

        const promise = new Promise((resolve, reject) => {
            inflightRequest.resolve = resolve
            inflightRequest.reject = reject
        })

        this.emit('debug', {
            action: 'request',
            request: deepCopy(request),
            provider: this,
        })

        this.batch.push(inflightRequest)

        if (this.batch.length === this.requestsCount) {
            const { batch } = this

            const request = batch.map((inflight) => inflight.request)

            this.emit('debug', {
                action: 'requestBatch',
                request: deepCopy(request),
                provider: this,
            })

            fetchJson(this.connection, JSON.stringify(request))
                .then((result) => {
                    this.emit('debug', {
                        action: 'response',
                        request,
                        response: result,
                        provider: this,
                    })

                    batch.forEach((inflightRequest, index) => {
                        const payload = result[index]
                        if (payload.error) {
                            const error = new Error(payload.error.message)
                            ;(<any>error).code = payload.error.code
                            ;(<any>error).data = payload.error.data
                            inflightRequest.reject(error)
                        } else {
                            inflightRequest.resolve(payload.result)
                        }
                    })
                })
                .catch((error) => {
                    this.emit('debug', {
                        action: 'response',
                        error,
                        request,
                        provider: this,
                    })

                    batch.forEach((inflightRequest) => {
                        inflightRequest.reject(error)
                    })
                })
        }

        return promise
    }

    async getCurrentBlockTimestamp(): Promise<number> {
        return (await provider.getBlock(this.send('eth_blockNumber', [])))
            .timestamp
    }
}
