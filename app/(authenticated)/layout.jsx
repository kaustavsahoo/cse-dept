import { redirect } from 'next/navigation'
import ResponsiveDrawer from './ResponsiveDrawer';
import { getServerSession } from 'next-auth';

export default async function AuthenticatedLayout({ children }) {
    const session = await getServerSession();

    if (!session || !session.user) {
        return redirect('/');
    }

    return <ResponsiveDrawer>{children}</ResponsiveDrawer>;
}
