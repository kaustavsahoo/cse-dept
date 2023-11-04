import './globals.css'

import { getServerSession } from 'next-auth';
import SessionProvider from '../components/SessionProvider';

export const metadata = {
  title: 'CSE DEPT',
  description: 'Department social media for CSE students in MNIT',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
