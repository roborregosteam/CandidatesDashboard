import SignInButton from "./SignInButton";
import { getServerAuthSession } from "rbrgs/server/auth";
import NavDropdown from "./navDropdown";
import Link from "next/link";
import Image from "next/image";
import robologo from "r/../public/images/white-logo.png";

export default async function Navbar() {
  const session = await getServerAuthSession();

  return (
    <nav className="fixed top-0 z-50 grid h-[4rem] w-screen grid-cols-2 items-center bg-black px-[3rem] font-archivo lg:grid-cols-3">
      <Link href="/">
        <Image
          src={robologo}
          alt="Logo"
          className="h-[2rem] w-fit cursor-pointer object-contain"
        />
      </Link>
      <div className="hidden w-full items-center justify-evenly text-white lg:flex">
        <Link href="scoreboard">Scoreboard</Link>
        <Link href="dashboard">Dashboard</Link>
        <Link href="documents">Documents</Link>
        <Link href="team">Team</Link>
      </div>
      <div className="hidden lg:block">
        <SignInButton session={session} />
      </div>
      <NavDropdown session={session} />
    </nav>
  );
}
