import { Button } from '@/components/ui/button';
import { getUserByUsername } from '@/lib/user-services';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const user = await currentUser();

    if (!user?.username) {
        return (
            <div className="fixed top-[50%] left-40">
                <h1 className="font-extrabold text-5xl">Access Denied</h1>
                <p className="font-bold text-2xl">You do not have permission to access this page.</p>
            </div>
        );
    }

    const adminCheck = await getUserByUsername(user.username);

    if (!adminCheck?.isAdmin) {
        return (
            <div className="fixed top-[50%] left-40">
                <h1 className="font-extrabold text-5xl">Access Denied</h1>
                <p className="font-bold text-2xl mb-5">You do not have permission to access this page.</p>
                <Link href="/">
                    <Button>
                        Back to Home
                    </Button>
                </Link>
            </div>
        );
    }

  return <div>{children}</div>;
}
