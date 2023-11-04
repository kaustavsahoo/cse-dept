"use client";

import { redirect } from 'next/navigation'
import { useSession } from "next-auth/react";

export default function AuthenticatedLayout({ children }) {
    const { data: session } = useSession();

    if (!session || !session.user) {
        return redirect('/api/auth/signin');
    }

    return children;
}
