"use server";

import { getUserId } from "../usersapi";
import { redirect } from 'next/navigation'

export default async function Page() {
    const userId = await getUserId();

    redirect(`/profile/${userId}`);    
}