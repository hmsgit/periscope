export type AnyDict = { [key: string]: any }

export type Mapping<KT extends string | symbol | number, VT> = {
    [key in KT]: VT
}

export type Uuid = string

export enum Locale {
    en_US = 'en-US',
    de_DE = 'de-DE',
}

export enum ServiceUser {
    admin = 'admin',
    service = 'service',
}

export interface User {
    id: number
    name: string
    username: string
    email: string
}
