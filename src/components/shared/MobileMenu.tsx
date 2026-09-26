"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import PlanBadge from "./PlanBadge";
import SavedBadge from "./SavedBadge";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/workouts");
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-300 hover:text-white focus:outline-none text-2xl"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#121316] border-b border-gray-800 p-6 flex flex-col gap-6 shadow-xl z-50">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 rounded-full text-[14px] font-semibold text-center transition-all duration-200 ${
                isWorkoutsActive
                  ? "bg-[#1f270d] text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 rounded-full text-[14px] font-semibold text-center transition-all duration-200 ${
                isMyPlanActive
                  ? "bg-[#1f270d] text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </nav>

          <div className="flex items-center justify-around border-t border-gray-800 pt-4">
            <PlanBadge />
            <SavedBadge />
          </div>
        </div>
      )}
    </div>
  );
}
