import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function MyPlanPage() {
  return (
    <main className="w-full min-h-screen bg-[#0e0f12] text-white py-10 px-4 sm:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-8">
          <p className="text-[#a1a1aa] text-base font-normal tracking-wide">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="bg-[#121318] border border-[#1f2128] rounded-2xl p-6 sm:p-8 mb-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1f2128] gap-6 sm:gap-0">
          {/* Exercises */}
          <div className="flex flex-col gap-1 sm:pr-8">
            <span className="text-[#9ca3af] text-sm font-medium">
              Exercises
            </span>
            <span className="text-[#ccff00] text-5xl font-black leading-none mt-1">
              0
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col gap-1 pt-4 sm:pt-0 sm:px-8">
            <span className="text-[#9ca3af] text-sm font-medium">Minutes</span>
            <span className="text-white text-5xl font-black leading-none mt-1">
              0
            </span>
          </div>

          {/* Calories */}
          <div className="flex flex-col gap-1 pt-4 sm:pt-0 sm:pl-8">
            <span className="text-[#9ca3af] text-sm font-medium">Calories</span>
            <span className="text-white text-5xl font-black leading-none mt-1">
              0
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          {/* Tabs */}
          <div className="bg-[#121318] p-1.5 rounded-xl border border-[#1f2128] inline-flex gap-1">
            <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-[#9ca3af] hover:text-white transition-all cursor-pointer">
              Today&apos;s Plan
            </button>
            <button className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-[#1c1e24] text-white shadow transition-all cursor-pointer">
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#9ca3af] text-sm font-medium hidden sm:inline">
              Sort By
            </span>
            <button className="bg-[#121318] border border-[#1f2128] hover:border-[#2a2d37] text-white font-medium text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer">
              <span>Duration</span>
              <FiChevronDown className="text-gray-400" />
            </button>
          </div>
        </div>

        <div className="w-full min-h-[420px] bg-[#22252c] rounded-3xl flex flex-col items-center justify-center text-center p-8 border border-white/5">
          <h2 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-wider mb-2">
            NOTHING HERE YET
          </h2>
          <p className="text-[#a1a1aa] text-sm sm:text-base max-w-[460px] mb-8 font-normal leading-relaxed">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition-all uppercase tracking-wide transform active:scale-95 shadow-lg"
          >
            Go to workouts
          </Link>
        </div>
      </div>
    </main>
  );
}
