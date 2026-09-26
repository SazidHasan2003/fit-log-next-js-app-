import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full min-h-[80vh] flex items-center justify-center bg-[#0e0f12] text-white px-4">
      <div className="max-w-[500px] w-full text-center bg-[#121318] border border-[#1f2128] p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col items-center">
        <span className="text-[#ccff00] text-7xl sm:text-8xl font-black tracking-tight leading-none mb-4">
          404
        </span>

        <h1 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-wider mb-3">
          PAGE NOT FOUND
        </h1>

        <p className="text-[#a1a1aa] text-sm sm:text-base font-normal leading-relaxed mb-8">
          The page or workout route you are looking for doesn&apos;t exist, was
          removed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition-all uppercase tracking-wider transform active:scale-95 shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
