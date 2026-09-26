"use client";

import { FiPlusSquare, FiBookmark, FiCheck } from "react-icons/fi";
import { IDataType } from "@/types/type";
import { useWorkoutContext } from "@/context/WorkoutContext";

export default function WorkoutActions({ workout }: { workout: IDataType }) {
  const { planList, addToPlan, addToSaved, isItemInPlan, isItemInSaved } =
    useWorkoutContext();

  const inPlan = isItemInPlan(workout.id);
  const inSaved = isItemInSaved(workout.id);

  // Check if 5 items limit reached in planList
  const isCapReached = planList.length >= 5;
  const isPlanDisabled = inPlan || isCapReached;

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <button
        onClick={() => addToPlan(workout)}
        disabled={isPlanDisabled}
        className={`font-semibold text-[13px] sm:text-[14px] px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all ${
          inPlan
            ? "bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700"
            : isCapReached
              ? "bg-gray-800/60 text-gray-500 border border-gray-800 cursor-not-allowed opacity-75"
              : "bg-[#ccff00] hover:bg-[#b8e600] text-black"
        }`}
      >
        {inPlan ? (
          <FiCheck className="text-base" />
        ) : (
          <FiPlusSquare className="text-base" />
        )}
        <span>
          {inPlan
            ? "In Today's Plan"
            : isCapReached
              ? "Plan Cap Reached (5/5)"
              : "Add to today's plan"}
        </span>
      </button>

      <button
        onClick={() => addToSaved(workout)}
        disabled={inSaved}
        className={`border font-semibold text-[13px] sm:text-[14px] px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all ${
          inSaved
            ? "bg-gray-800 text-gray-400 border-gray-700 cursor-not-allowed"
            : "bg-[#121316] border-gray-800 hover:border-gray-700 text-white"
        }`}
      >
        {inSaved ? (
          <FiCheck className="text-base" />
        ) : (
          <FiBookmark className="text-base" />
        )}
        <span>{inSaved ? "Saved" : "Save for later"}</span>
      </button>
    </div>
  );
}
