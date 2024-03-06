import { Button } from "@/components/ui/button";
import { getUserByUsername } from "@/lib/user-services";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

const Dashboard = async () => {
  const user = await currentUser();

  if (user?.username) {
    const userCheck = await getUserByUsername(user.username);

    if (userCheck?.isAdmin) {
        return (
            <Link href="/dashboard">
                <Button
                variant="ghost"
                className="bg-blue-200 hover:bg-primary hover:text-white"
                >
                Dashboard
                </Button>
            </Link>
        )
    }
  }
}

export default Dashboard