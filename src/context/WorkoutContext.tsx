"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { IDataType } from "@/types/type";
import { toast } from "react-toastify";

interface WorkoutContextType {
  planList: IDataType[];
  savedList: IDataType[];
  addToPlan: (workout: IDataType) => void;
  removeFromPlan: (id: string | number) => void;
  addToSaved: (workout: IDataType) => void;
  removeFromSaved: (id: string | number) => void;
  isItemInPlan: (id: string | number) => boolean;
  isItemInSaved: (id: string | number) => boolean;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [planList, setPlanList] = useState<IDataType[]>([]);
  const [savedList, setSavedList] = useState<IDataType[]>([]);

  // Add to Today's Plan
  const addToPlan = (workout: IDataType) => {
    const exists = planList.some(
      (item: IDataType) => String(item.id) === String(workout.id),
    );
    if (exists) {
      toast.warn(`${workout.name} is already in today's plan!`);
      return;
    }
    setPlanList((prev: IDataType[]) => [...prev, workout]);
    toast.success("Added to today's plan!");
  };

  // Remove from Today's Plan
  const removeFromPlan = (id: string | number) => {
    setPlanList((prev: IDataType[]) =>
      prev.filter((item: IDataType) => String(item.id) !== String(id)),
    );
    toast.info("Removed from today's plan");
  };

  // Add to Save for Later
  const addToSaved = (workout: IDataType) => {
    const exists = savedList.some(
      (item: IDataType) => String(item.id) === String(workout.id),
    );
    if (exists) {
      toast.warn(`${workout.name} is already saved!`);
      return;
    }
    setSavedList((prev: IDataType[]) => [...prev, workout]);
    toast.success("Saved for later!");
  };

  // Remove from Save for Later
  const removeFromSaved = (id: string | number) => {
    setSavedList((prev: IDataType[]) =>
      prev.filter((item: IDataType) => String(item.id) !== String(id)),
    );
    toast.info("Removed from saved list");
  };

  // Helper Checkers
  const isItemInPlan = (id: string | number) =>
    planList.some((item: IDataType) => String(item.id) === String(id));

  const isItemInSaved = (id: string | number) =>
    savedList.some((item: IDataType) => String(item.id) === String(id));

  return (
    <WorkoutContext.Provider
      value={{
        planList,
        savedList,
        addToPlan,
        removeFromPlan,
        addToSaved,
        removeFromSaved,
        isItemInPlan,
        isItemInSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkoutContext must be used within a WorkoutProvider");
  }
  return context;
};
