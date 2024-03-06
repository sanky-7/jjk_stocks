import Link from "next/link";
import Actions from "./actions";
import Dashboard from "./dashboard";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-[50px] z-[49] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <div className="flex gap-x-3">
        <Link className="hover:bg-gray-400/10" href="/">
          <Image src="/NavLogo.png" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className="flex flex-row">
        <Dashboard />
        <Actions />
      </div>
    </nav>
  );
};

export default Navbar;
