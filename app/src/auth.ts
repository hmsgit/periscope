import { getSecrets } from '@/utils'

export function asBase64Token(username: string, password: string): string {
    return Buffer.from(`${username}:${password}`).toString('base64')
}

export async function getBasicAuthToken(username: string, passwordKey: string | undefined): Promise<string> {
    try {
        if (passwordKey == undefined) {
            throw new Error(`Password key undefined`)
        }
        const password = await getSecrets(passwordKey, 'password')
        if (password == undefined || password == '') {
            throw new Error(`Password undefined`)
        }
        return asBase64Token(username, password)
    } catch (e) {
        throw Error(`Failed to get password with key=${passwordKey}`)
    }
}

export async function getApiUsers(apiUsersKey: string | undefined): Promise<{ [key: string]: string }> {
    try {
        if (apiUsersKey == undefined) {
            throw new Error(`Api users key undefined`)
        }
        const apiUsers = await getSecrets(apiUsersKey, undefined)
        if (apiUsers == undefined) {
            throw new Error(`Api users undefined`)
        }
        return apiUsers as unknown as { [key: string]: string }
    } catch (e) {
        throw Error(`Failed to get api users with key=${apiUsersKey} due to ${e}`)
    }
}
