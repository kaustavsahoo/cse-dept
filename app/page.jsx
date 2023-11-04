"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession();
  const { push } = useRouter();


  return (
    <main>
      <h1>Home</h1>
      {session && session.user ? (
        <button onClick={() => {
          push("/dashboard");
        }}>Enter</button>
      ) : (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </main>
  )
}
