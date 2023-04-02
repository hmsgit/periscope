import { stringify } from 'querystring'

import { SecretsManager } from '@aws-sdk/client-secrets-manager'
import { v4 as uuidv4 } from 'uuid'

import { Uuid } from './types'

export function sleep(seconds: number): void {
    ;(async () => await new Promise((f) => setTimeout(f, seconds * 1000)))()
}

export function generateUuid(): Uuid {
    return uuidv4()
}

export async function getSecrets(name: string, key: string | undefined): Promise<string> {
    const client = new SecretsManager({ region: 'eu-central-1' })
    let response
    try {
        response = await client.getSecretValue({ SecretId: name })
    } catch (err) {
        throw new Error(`Secrets retrieval failed due to ${err}`)
    }

    const secretValue = response.SecretString
    if (!secretValue) {
        throw new Error(`No secret value found for ${name}`)
    }

    try {
        const jsonized = JSON.parse(secretValue.trim())
        if (key != null) {
            if (!(key in jsonized)) {
                throw new Error(`Key=${key} does not exist in secret ${name}`)
            }
            return jsonized[key]
        }
        return jsonized
    } catch (err) {
        if (!key) {
            return secretValue.trim()
        }
        throw new Error(`Couldn't fetch key=${key} from secret ${name}`)
    }
}

export function parseDefaultInt(value: string | undefined, defaultValue: number, maxValue?: number): number {
    if (!value) return defaultValue
    let parsedValue = parseInt(value)
    parsedValue = isNaN(parsedValue) ? defaultValue : parsedValue
    return maxValue ? (parsedValue < maxValue ? parsedValue : maxValue) : parsedValue
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function makeUrl(endpoint: string, path: string, queryParams?: any | undefined): URL {
    const url = new URL(endpoint)
    url.pathname = url.pathname ? `${url.pathname}${path}` : path
    if (queryParams) {
        Object.keys(queryParams).forEach(
            (key) => (queryParams[key] === 'undefined' || queryParams[key] === 'null') && delete queryParams[key]
        )
        url.search = stringify(queryParams)
    }
    return url
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function required(value: any | undefined, msg = 'Missing required value'): any {
    if (value === undefined) {
        throw new Error(msg)
    }
    return value
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export function noop(...args: any[]): void {
    // Do absolutely nothing
}

export enum Method {
    get = 'GET',
    put = 'PUT',
    post = 'POST',
    delete = 'DELETE',
}

export function removeDuplicates<T = Record<string, unknown>>(
    arr: T[],
    comparator: (self: T, other: T) => boolean = (self: T, other) => self === other
) {
    return arr.filter((value, index, self) => index === self.findIndex((t) => comparator(t, value)))
}
