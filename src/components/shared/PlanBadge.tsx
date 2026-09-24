"use client";

import Link from "next/link";

interface PlanBadgeProps {
  count?: number;
}

export default function PlanBadge({ count = 0 }: PlanBadgeProps) {
  return (
    <Link
      href="/my-plan"
      className="flex items-center gap-2 text-[12px] font-medium text-gray-300 hover:opacity-90 transition-opacity"
    >
      <span>Plan</span>
      <span className="bg-[#ccff00] text-black w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold">
        {count}
      </span>
    </Link>
  );
}
