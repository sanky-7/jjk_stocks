import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import Dashboard from "./dashboard";


const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4">
      {!user && (
        <SignInButton>
          <Button
            variant="ghost"
            className="bg-blue-200 hover:bg-primary hover:text-white"
          >
            Sign in
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex gap-x-4 items-center mr-4">
          <Link href="/portfolio">
            <Button
              variant="ghost"
              className="bg-blue-200 hover:bg-primary hover:text-white"
            >
              Portfolio
            </Button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default Actions;
