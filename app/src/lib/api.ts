import fetch from 'isomorphic-unfetch'
import { NextApiRequest, NextApiResponse } from 'next'

import { asBase64Token, getApiUsers } from '@/auth'
import config from '@/config'
import { User } from '@/types'
import { makeUrl } from '@/utils'

import { queryBuilder } from '../lib/planetscale'

export default class MyApi {
    async getUsers(q: string): Promise<User[]> {
        const username = 'userX'
        // const users = await getApiUsers(config.auth.users)
        // const token = asBase64Token(username, users[username])
        //
        // const headers = { headers: { Authorization: `Basic ${token}` } }
        const path = '/users/'
        const queryParams = undefined
        try {
            const apiUrl = makeUrl(config.urls.api, path, queryParams)
            // const response = await fetch(apiUrl, headers)
            // const results = await response.json()
            // return results.users
            return [
                { id: 1, name: 'A', username: 'a.A', email: 'a@A.com' },
                { id: 2, name: 'B', username: 'b.B', email: 'b@b.com' },
                { id: 3, name: 'C', username: 'c.C', email: 'c@C.com' },
                { id: 4, name: 'D', username: 'd.D', email: 'd@D.com' },
                { id: 4, name: 'E', username: 'e.E', email: 'e@E.com' },
            ]
        } catch (error) {
            console.log(error)
            throw new Error('Something went wrong')
        }
    }

    async getFromDb(search: string): Promise<User[]> {
        const users = await queryBuilder
            .selectFrom('users')
            .select(['id', 'name', 'username', 'email'])
            .where('name', 'like', `%${search}%`)
            .execute()
        return users
    }
}

// // Handler for the API route
// export async function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
//     const myApi = new MyApi()
//     try {
//         const data = await myApi.getUsers()
//         res.status(200).json(data)
//     } catch (error) {
//         console.log(error)
//         // res.status(500).json({ message: 'Something went wrong' })
//     }
// }
