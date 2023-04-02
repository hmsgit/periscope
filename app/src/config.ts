import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

import * as yaml from 'js-yaml'

import { AnyDict } from './types'

export interface Endpoints {
    api: string
    graph: string
}

export interface AuthInfo {
    users: string
}

export class Config {
    urls: Endpoints
    auth: AuthInfo
    private isInitialized = false

    constructor(values?: { urls?: Endpoints; auth?: AuthInfo }) {
        // Use supplied values (like from unit tests) or read from the config files
        const config = !!values && Object.keys(values).length ? values : Config.readConfigFile()
        try {
            this.urls = config.urls
            this.auth = config.auth
        } catch (e) {
            console.info('Invalid config! Could not populate fields!')
            throw e
        }

        console.info('Config loaded')
        this.isInitialized = true
    }

    private static readConfigFile(): AnyDict {
        let config: AnyDict = {}
        const localConfigPath = resolve('public/config.local.yml')
        const configPath = resolve('public/config.yml')
        try {
            if (existsSync(configPath)) {
                config = yaml.load(readFileSync(configPath).toString()) as AnyDict
                console.info('Configuration loaded from config')
            } else if (existsSync(localConfigPath)) {
                config = yaml.load(readFileSync(localConfigPath).toString()) as AnyDict
                console.info('Configuration loaded from LOCAL config')
            } else {
                console.error('No config file exists! Exiting application')
                process.exit(1)
            }
        } catch (e) {
            console.error('Read of configuration failed!')
            throw e
        }

        console.info('Read config file from disk:', config)
        return config
    }
}

const config = new Config()
export default config
