import Image from "next/image";
import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";
import heroImg from "@/assets/banner.png"; // assets folder-er hero image import path

function Hero() {
  return (
    <section className="w-full mt-[40px]">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        {/* Banner Container with Dark Background & Rounded Corners */}
        <div className="bg-[#121316] rounded-2xl p-8 lg:p-12 border border-gray-800 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[420px]">
          {/* Left Side Content */}
          <div className="flex-1 max-w-[620px] flex flex-col items-start gap-4">
            {/* Eyebrow text */}
            <span className="text-[#ccff00] text-[12px] lg:text-[14px] font-bold tracking-widest uppercase">
              WORKOUT LIBRARY
            </span>

            {/* Main heading */}
            <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[56px] font-black uppercase tracking-tight leading-[1.1] font-sans">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-[14px] sm:text-[16px] font-normal leading-relaxed max-w-[500px]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Primary CTA button with smooth scroll to #library */}
            <Link
              href="#library"
              className="mt-4 inline-flex items-center gap-2 bg-[#ccff00] text-black font-bold text-[13px] px-6 py-3.5 rounded-lg hover:bg-[#b8e600] transition-colors duration-200 uppercase tracking-wide"
            >
              <span>BROWSE WORKOUTS</span>
              <FiArrowDown className="text-base" />
            </Link>
          </div>

          {/* Right Side Banner Image */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[450px]">
            <Image
              src={heroImg}
              alt="Gym Athlete Training Banner"
              priority
              className="w-full h-auto object-contain max-h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
