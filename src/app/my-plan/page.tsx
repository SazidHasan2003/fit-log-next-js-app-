"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiX, FiStar, FiClock, FiZap } from "react-icons/fi";
import { useWorkoutContext } from "@/context/WorkoutContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const {
    planItems,
    savedItems,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    isLoading,
  } = useWorkoutContext();

  const currentList = activeTab === "plan" ? planItems : savedItems;

  // Calculate live metrics summary based on current active tab items
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, item) => acc + (item.duration || 0),
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, item) => acc + (item.caloriesBurned || 0),
    0,
  );

  return (
    <main className="w-full min-h-screen bg-[#0e0f12] text-white py-10 px-4 sm:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Header Subtitle */}
        <div className="mb-8">
          <p className="text-[#a1a1aa] text-base font-normal tracking-wide">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics Summary Row */}
        <div className="bg-[#121318] border border-[#1f2128] rounded-2xl p-6 sm:p-8 mb-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1f2128] gap-6 sm:gap-0">
          <div className="flex flex-col gap-1 sm:pr-8">
            <span className="text-[#9ca3af] text-sm font-medium">
              Exercises
            </span>
            <span className="text-[#ccff00] text-5xl font-black leading-none mt-1">
              {totalExercises}
            </span>
          </div>

          <div className="flex flex-col gap-1 pt-4 sm:pt-0 sm:px-8">
            <span className="text-[#9ca3af] text-sm font-medium">Minutes</span>
            <span className="text-white text-5xl font-black leading-none mt-1">
              {totalMinutes}
            </span>
          </div>

          <div className="flex flex-col gap-1 pt-4 sm:pt-0 sm:pl-8">
            <span className="text-[#9ca3af] text-sm font-medium">Calories</span>
            <span className="text-white text-5xl font-black leading-none mt-1">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* Navigation Tabs & Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="bg-[#121318] p-1.5 rounded-xl border border-[#1f2128] inline-flex gap-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "plan"
                  ? "bg-[#1c1e24] text-white shadow"
                  : "text-[#9ca3af] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "saved"
                  ? "bg-[#1c1e24] text-white shadow"
                  : "text-[#9ca3af] hover:text-white"
              }`}
            >
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

        {/* Content Section */}
        {isLoading ? (
          <div className="w-full min-h-[300px] flex items-center justify-center">
            <p className="text-gray-400 font-medium">Loading workouts…</p>
          </div>
        ) : currentList.length === 0 ? (
          /* Empty State */
          <div className="w-full min-h-[420px] bg-[#121318] rounded-3xl flex flex-col items-center justify-center text-center p-8 border border-[#1f2128]">
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
        ) : (
          /* Cards List */
          <div className="flex flex-col gap-4">
            {currentList.map((workout) => (
              <div
                key={workout.id}
                className="bg-[#121318] border border-[#1f2128] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-gray-800"
              >
                <div className="flex items-center gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Workout Info */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white text-base sm:text-lg font-black uppercase tracking-wide">
                      {workout.name}
                    </h3>
                    <p className="text-[#9ca3af] text-xs sm:text-sm font-medium">
                      {workout.equipment}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-4 text-[#9ca3af] text-xs sm:text-sm mt-1">
                      <span className="flex items-center gap-1.5">
                        <FiClock className="text-[#ccff00]" />
                        {workout.duration} min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiZap className="text-[#ccff00]" />
                        {workout.caloriesBurned} kcal
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiStar className="text-[#ccff00]" />
                        {workout.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-[#1f2128] pt-3 sm:pt-0">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="border border-[#2a2d37] hover:bg-[#1c1e24] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() => markAsDone(workout.id)}
                      className="bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all"
                    >
                      Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(workout.id)
                        : removeFromSaved(workout.id)
                    }
                    className="p-2.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    title="Remove"
                  >
                    <FiX className="text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
