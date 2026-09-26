import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { IDataType } from "@/types/type";
import WorkoutActions from "./WorkoutActions";

async function getSingleWorkout(id: string): Promise<IDataType | null> {
  try {
    const response = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
      { cache: "no-store" },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single workout:", error);
    return null;
  }
}

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getSingleWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="w-full my-[40px] lg:my-[64px]">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-[14px] font-medium transition-colors"
        >
          <FiArrowLeft className="text-base" />
          <span>Back to Workouts</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800/80">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-white text-[32px] sm:text-[40px] font-black uppercase tracking-tight leading-tight">
                {workout.name}
              </h1>
              <p className="text-gray-400 text-[14px] sm:text-[15px] mt-2 font-normal leading-relaxed">
                {workout.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#ccff00] text-black text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="bg-[#121316] border border-gray-800/80 rounded-xl p-4 sm:p-5 divide-y divide-gray-800/60 text-[13px] sm:text-[14px]">
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 font-semibold uppercase tracking-wider text-[11px]">
                  EQUIPMENT
                </span>
                <span className="text-white font-medium">
                  {workout.equipment}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 font-semibold uppercase tracking-wider text-[11px]">
                  DIFFICULTY
                </span>
                <span className="text-white font-medium">
                  {workout.difficulty}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 font-semibold uppercase tracking-wider text-[11px]">
                  SETS
                </span>
                <span className="text-white font-medium">{workout.sets}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 font-semibold uppercase tracking-wider text-[11px]">
                  REPS
                </span>
                <span className="text-white font-medium">{workout.reps}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 font-semibold uppercase tracking-wider text-[11px]">
                  DURATION
                </span>
                <span className="text-white font-medium">
                  {workout.duration} min
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 font-semibold uppercase tracking-wider text-[11px]">
                  CALORIES
                </span>
                <span className="text-white font-medium">
                  {workout.caloriesBurned} kcal
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-gray-400 font-semibold uppercase tracking-wider text-[11px]">
                  RATING
                </span>
                <span className="text-white font-medium">{workout.rating}</span>
              </div>
            </div>

            <div>
              <h3 className="text-white text-[16px] font-extrabold uppercase tracking-wider mb-3">
                INSTRUCTIONS
              </h3>
              <ol className="flex flex-col gap-2.5">
                {workout.instructions?.map((step, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 text-[13px] sm:text-[14px] leading-relaxed flex gap-2"
                  >
                    <span className="text-gray-300 font-semibold">
                      {idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
}
