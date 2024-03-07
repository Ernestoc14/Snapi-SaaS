import Link from "next/link";
import Image from "next/image";
import { SignedIn } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex flex-col size-full gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {/* 40 min */}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
