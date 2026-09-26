import { IDataType } from "@/types/type";
import WorkoutCard from "./WorkoutCard";

const getWorkouts = async (): Promise<IDataType[]> => {
  try {
    const response = await fetch(
      "https://api.api-store.workers.dev/api/fitlog",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default async function LibrarySection() {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="w-full my-[64px]">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-white text-[24px] lg:text-[28px] font-black uppercase tracking-wider">
            THE LIBRARY
          </h2>
          <p className="text-gray-400 text-[13px] sm:text-[14px] mt-1 font-normal">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid Layout */}
        {workouts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        ) : (
          <div className="bg-[#121316] border border-gray-800 rounded-xl p-12 text-center text-gray-400">
            Data not found.
          </div>
        )}
      </div>
    </section>
  );
}
