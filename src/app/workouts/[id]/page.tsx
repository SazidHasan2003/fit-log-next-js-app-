import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IDataType } from "@/types/type";
import WorkoutActions from "./WorkoutActions";

async function getSingleWorkout(id: string): Promise<IDataType | null> {
  try {
    const response = await fetch(
      ` https://api.api-store.workers.dev/api/fitlog/${id}`,
      { cache: "no-store" },
    );
    if (!response.ok) return null;
    return await response.json();
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

  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <main className="w-full my-[32px] lg:my-[48px]">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-[14px] font-medium transition-colors"
        >
          <span className="text-lg">←</span>
          <span>Back to Workouts</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-[#0d0d0f] p-4 sm:p-6 lg:p-8 rounded-3xl border border-gray-800/60">
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800/80">
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
              <h1 className="text-white text-[32px] sm:text-[38px] font-black uppercase tracking-tight leading-tight">
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
                  className="bg-[#ccff00] text-black text-[12px] font-bold px-3 py-1 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="bg-[#121316] border border-gray-800/80 rounded-2xl p-4 sm:p-5 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-gray-800/60 text-[13px] sm:text-[14px]">
                  {specs.map((spec, index) => (
                    <tr key={index} className="first:pt-0 last:pb-0">
                      <td className="py-2.5 text-gray-400 font-semibold uppercase tracking-wider text-[11px] align-middle">
                        {spec.label}
                      </td>
                      <td className="py-2.5 text-white font-medium text-right align-middle">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-white text-[15px] font-extrabold uppercase tracking-wider mb-3">
                INSTRUCTIONS
              </h3>
              <ol className="flex flex-col gap-2.5 list-none">
                {workout.instructions?.map((step, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 text-[13px] sm:text-[14px] leading-relaxed flex gap-2.5"
                  >
                    <span className="text-gray-400 font-semibold select-none">
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
