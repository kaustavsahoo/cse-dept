"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const { data: session } = useSession();
    const { push } = useRouter();

    return (
        <main>
            <h1>Dashboard</h1>
            <p>Signed in as {session?.user.email}</p>
            <p>Your name is {session?.user.name}</p>
            <img src={session?.user.image} />
            <button onClick={() => signOut()}>Sign out</button>
            <button onClick={() => {
                push("/");
            }}>go to the landing page</button>
        </main>
    )
}