import Navbar from './navbar';
import { getServerSession } from 'next-auth/next';

export default async function Nav() {
  const session = await getServerSession();
  // return <Navbar user={session?.user} />;
  return <Navbar user={{
    email: 'x@y.com',
    name: 'x y'
  }} />;
}