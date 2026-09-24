"use client";

import Link from "next/link";

interface SavedBadgeProps {
  count?: number;
}

export default function SavedBadge({ count = 0 }: SavedBadgeProps) {
  return (
    <Link
      href="/my-plan"
      className="flex items-center gap-2 text-[12px] font-medium text-gray-300 hover:opacity-90 transition-opacity"
    >
      <span>Saved</span>
      <span className="border border-gray-600 text-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold">
        {count}
      </span>
    </Link>
  );
}
