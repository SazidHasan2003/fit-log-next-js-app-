"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/workouts");
  const isMyPlanActive = pathname === "/my-plan";

  return (
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
  );
}
