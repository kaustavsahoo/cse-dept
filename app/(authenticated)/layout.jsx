"use client";

import { redirect } from 'next/navigation'
import { useSession } from "next-auth/react";
import ResponsiveDrawer from './ResponsiveDrawer';

export default function AuthenticatedLayout({ children }) {
    const { data: session } = useSession();

    if (!session || !session.user) {
        return redirect('/');
    }

    return <ResponsiveDrawer>{children}</ResponsiveDrawer>;
}
