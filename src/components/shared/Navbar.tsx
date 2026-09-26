import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import PlanBadge from "./PlanBadge";
import SavedBadge from "./SavedBadge";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="w-full bg-[#121316] text-white border-b border-gray-800 relative">
      <div className="max-w-[1280px] mx-auto px-[24px] h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={28}
            height={28}
            className="object-contain"
          />
          <span className="font-extrabold text-[18px] tracking-wider uppercase font-sans">
            FITLOG
          </span>
        </Link>

        <NavLinks />

        <div className="hidden lg:flex items-center gap-4">
          <PlanBadge />
          <SavedBadge />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
