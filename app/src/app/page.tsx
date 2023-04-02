import { Card, Text, Title } from '@tremor/react'
import * as React from 'react'

import { User } from '@/types'

import Search from './search'
import UsersTable from './table'
import MyApi from '../lib/api'

export const dynamic = 'force-dynamic'

export default async function IndexPage({ searchParams }: { searchParams: { q: string } }) {
    const search = searchParams.q ?? ''

    let users: User[] = await new MyApi().getUsers(search)
    if (search) users = users.splice(0, Math.max(0, parseInt(searchParams.q)) || users.length)

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Users</Title>
            <Text>A list of users retrieved from a MySQL database (PlanetScale).</Text>
            <Search />
            <Card className="mt-6">
                <Text>A list of users retrieved from a MySQL database (PlanetScale).</Text>
                {/* @ts-expect-error Server Component */}
                <UsersTable users={users} />
            </Card>
        </main>
    )
}
