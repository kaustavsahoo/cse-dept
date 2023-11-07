"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

import HomePage from "./homepage";

export default function Home() {
  const { data: session } = useSession();
  const { push } = useRouter();


  return (
      <HomePage />
  )
}
