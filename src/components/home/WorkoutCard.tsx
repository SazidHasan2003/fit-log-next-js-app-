import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { IDataType } from "@/types/type";

interface WorkoutCardProps {
  workout: IDataType;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="bg-[#121316] border border-gray-800/60 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-gray-700 transition-all duration-200 group block"
    >
      <div>
        {/*  Image */}
        <div className="relative w-full h-[210px] overflow-hidden bg-gray-900">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-5 pb-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {workout.muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-white text-[20px] font-black uppercase tracking-tight group-hover:text-[#ccff00] transition-colors leading-tight">
            {workout.name}
          </h3>

          {/* Equipment  */}
          <p className="text-gray-400 text-[13px] font-medium mt-1 mb-5">
            {workout.equipment}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-center gap-6 text-gray-400 text-[13px] font-medium border-t border-gray-800/80 pt-4">
          <span className="flex items-center gap-1.5">
            <FiClock className="text-gray-400 text-[15px]" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <FaFire className="text-gray-400 text-[14px]" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <FiStar className="text-gray-400 text-[15px]" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
