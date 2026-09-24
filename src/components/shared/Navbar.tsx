import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import PlanBadge from "./PlanBadge";
import SavedBadge from "./SavedBadge";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  planCount?: number;
  savedCount?: number;
  currentPath?: string;
}

export default function Navbar({
  planCount = 0,
  savedCount = 0,
  currentPath = "/",
}: NavbarProps) {
  const isWorkoutsActive =
    currentPath === "/" || currentPath.startsWith("/workouts");
  const isMyPlanActive = currentPath === "/my-plan";

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

        <nav className="hidden lg:flex items-center gap-2">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-200 ${
              isWorkoutsActive
                ? "bg-[#1f270d] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-200 ${
              isMyPlanActive
                ? "bg-[#1f270d] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <PlanBadge count={planCount} />
          <SavedBadge count={savedCount} />
        </div>

        {/*  Mobile Menu */}
        <MobileMenu
          planCount={planCount}
          savedCount={savedCount}
          isWorkoutsActive={isWorkoutsActive}
          isMyPlanActive={isMyPlanActive}
        />
      </div>
    </header>
  );
}
