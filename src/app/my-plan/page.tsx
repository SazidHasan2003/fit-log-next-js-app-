"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiChevronDown,
  FiX,
  FiStar,
  FiClock,
  FiZap,
  FiCheck,
  FiSearch,
} from "react-icons/fi";
import { useWorkoutContext } from "@/context/WorkoutContext";
import { toast } from "react-toastify";
import { IDataType } from "@/types/type";

type SortOption = "duration" | "calories" | "rating";

interface ExtendedWorkoutItem extends IDataType {
  tags?: string[];
}

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    planItems,
    savedItems,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    isLoading,
  } = useWorkoutContext();

  const currentList: ExtendedWorkoutItem[] =
    activeTab === "plan" ? planItems : savedItems;

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, item) => acc + (item.duration || 0),
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, item) => acc + (item.caloriesBurned || 0),
    0,
  );

  const filteredAndSortedList = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    const filtered = currentList.filter((workout) => {
      if (!q) return true;

      const nameMatch = workout.name?.toLowerCase().includes(q);
      const equipmentMatch = workout.equipment?.toLowerCase().includes(q);
      const muscleMatch = workout.muscleGroups?.some((group: string) =>
        group.toLowerCase().includes(q),
      );

      const tagsMatch = workout.tags?.some((tag: string) =>
        tag.toLowerCase().includes(q),
      );

      return nameMatch || equipmentMatch || muscleMatch || tagsMatch;
    });

    return filtered.sort((a, b) => {
      if (sortBy === "duration") return (b.duration || 0) - (a.duration || 0);
      if (sortBy === "calories")
        return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });
  }, [currentList, searchQuery, sortBy]);

  const sortLabels: Record<SortOption, string> = {
    duration: "Duration",
    calories: "Calories",
    rating: "Rating",
  };

  const handleMarkAsDone = (
    workoutId: string | number,
    workoutName: string,
  ) => {
    markAsDone(String(workoutId));
    toast.success(`"${workoutName}" marked as done!`, {
      style: {
        backgroundColor: "#121318",
        color: "#ccff00",
        border: "1px solid #1f2128",
      },
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#0e0f12] text-white py-10 px-4 sm:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-8">
          <p className="text-[#a1a1aa] text-base font-normal tracking-wide">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

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

        {/* Search, Tabs & Sort Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="bg-[#121318] p-1.5 rounded-xl border border-[#1f2128] inline-flex gap-1 self-start md:self-auto">
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

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Search Input Box */}
            <div className="relative w-full sm:w-64">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type="text"
                placeholder="Search name, tag, muscle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121318] border border-[#1f2128] focus:border-[#ccff00] text-white text-sm pl-10 pr-9 py-2.5 rounded-xl outline-none transition-colors placeholder:text-gray-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FiX className="text-sm" />
                </button>
              )}
            </div>

            <div className="relative flex items-center gap-3 w-full sm:w-auto justify-end">
              <span className="text-[#9ca3af] text-sm font-medium hidden sm:inline">
                Sort By
              </span>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="w-full sm:w-auto bg-[#121318] border border-[#1f2128] hover:border-[#2a2d37] text-white font-medium text-sm px-5 py-2.5 rounded-xl flex items-center justify-between sm:justify-start gap-2 transition-all cursor-pointer"
              >
                <span>{sortLabels[sortBy]}</span>
                <FiChevronDown
                  className={`text-gray-400 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 top-12 mt-1 w-40 bg-[#121318] border border-[#1f2128] rounded-xl shadow-xl overflow-hidden z-20">
                  {(["duration", "calories", "rating"] as SortOption[]).map(
                    (option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                          sortBy === option
                            ? "bg-[#1c1e24] text-[#ccff00]"
                            : "text-gray-300 hover:bg-[#1a1c23] hover:text-white"
                        }`}
                      >
                        {sortLabels[option]}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Workout List */}
        {isLoading ? (
          <div className="w-full min-h-[300px] flex items-center justify-center">
            <p className="text-gray-400 font-medium">Loading workouts…</p>
          </div>
        ) : filteredAndSortedList.length === 0 ? (
          /* Empty State */
          <div className="w-full min-h-[420px] bg-[#121318] rounded-3xl flex flex-col items-center justify-center text-center p-8 border border-[#1f2128]">
            <h2 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-wider mb-2">
              {searchQuery ? "NO MATCHING WORKOUTS" : "NOTHING HERE YET"}
            </h2>
            <p className="text-[#a1a1aa] text-sm sm:text-base max-w-[460px] mb-8 font-normal leading-relaxed">
              {searchQuery
                ? `No results matching "${searchQuery}". Try searching with another term.`
                : "Browse the library and add a lift to get today moving."}
            </p>
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition-all uppercase tracking-wide transform active:scale-95 shadow-lg cursor-pointer"
              >
                Clear Search
              </button>
            ) : (
              <Link
                href="/"
                className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition-all uppercase tracking-wide transform active:scale-95 shadow-lg"
              >
                Go to workouts
              </Link>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredAndSortedList.map((workout) => (
              <div
                key={workout.id}
                className="bg-[#121318] border border-[#1f2128] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-white text-base sm:text-lg font-black uppercase tracking-wide">
                      {workout.name}
                    </h3>
                    <p className="text-[#9ca3af] text-xs sm:text-sm font-medium">
                      {workout.equipment}
                    </p>

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

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-[#1f2128] pt-3 sm:pt-0">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="border border-[#2a2d37] hover:bg-[#1c1e24] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() => handleMarkAsDone(workout.id, workout.name)}
                      className="bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <FiCheck className="text-base font-black" />
                      <span>Mark as Done</span>
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(String(workout.id))
                        : removeFromSaved(String(workout.id))
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
