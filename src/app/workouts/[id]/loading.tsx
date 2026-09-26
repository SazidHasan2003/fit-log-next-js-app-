export default function Loading() {
  return (
    <main className="w-full my-[32px] lg:my-[48px] animate-pulse">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <div className="h-5 w-36 bg-gray-800 rounded-md mb-6"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-[#0d0d0f] p-4 sm:p-6 lg:p-8 rounded-3xl border border-gray-800/60">
          <div className="w-full h-[380px] sm:h-[480px] lg:h-[580px] rounded-2xl bg-gray-800 border border-gray-800/80"></div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="h-10 w-3/4 bg-gray-800 rounded-lg mb-3"></div>
              <div className="h-4 w-full bg-gray-800/60 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-800/60 rounded"></div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="h-6 w-20 bg-gray-800 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-800 rounded-full"></div>
            </div>

            <div className="bg-[#121316] border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex flex-col gap-3">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-1 border-b border-gray-800/40 last:border-none"
                >
                  <div className="h-3 w-24 bg-gray-800/70 rounded"></div>
                  <div className="h-4 w-28 bg-gray-800 rounded"></div>
                </div>
              ))}
            </div>

            <div>
              <div className="h-4 w-32 bg-gray-800 rounded mb-3"></div>
              <div className="flex flex-col gap-2.5">
                <div className="h-4 w-full bg-gray-800/60 rounded"></div>
                <div className="h-4 w-11/12 bg-gray-800/60 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-800/60 rounded"></div>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <div className="h-12 flex-1 bg-gray-800 rounded-xl"></div>
              <div className="h-12 flex-1 bg-gray-800 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
