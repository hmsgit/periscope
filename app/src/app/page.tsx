import { Card, Text, Title } from '@tremor/react'
import * as React from 'react'

import Search from './search'
import UsersTable from './table'

export const dynamic = 'force-dynamic'

export default async function IndexPage({ searchParams }: { searchParams: { q: string } }) {
    const search = searchParams.q ?? ''
    // const users = await queryBuilder
    //   .selectFrom('users')
    //   .select(['id', 'name', 'username', 'email'])
    //   .where('name', 'like', `%${search}%`)
    //   .execute();
    let users = [
        { id: 'a', name: 'A', username: 'a.A', email: 'a@A.com' },
        { id: 'b', name: 'A', username: 'a.A', email: 'a@A.com' },
        { id: 'v', name: 'A', username: 'a.A', email: 'a@A.com' },
        { id: 'd', name: 'A', username: 'a.A', email: 'a@A.com' },
        { id: 'e', name: 'A', username: 'a.A', email: 'a@A.com' },
    ]
    if (search) users = users.splice(0, 3)

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
