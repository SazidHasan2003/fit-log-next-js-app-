export default function LibrarySkeleton() {
  return (
    <section className="w-full my-[64px] animate-pulse">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <div className="mb-8">
          <div className="h-8 w-48 bg-gray-800 rounded-md mb-2"></div>
          <div className="h-4 w-72 bg-gray-800/60 rounded-md"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#121316] border border-gray-800/60 rounded-2xl overflow-hidden flex flex-col justify-between h-[420px]"
            >
              <div>
                <div className="w-full h-[210px] bg-gray-800"></div>
                <div className="p-5 pb-0">
                  <div className="flex gap-2 mb-3">
                    <div className="h-5 w-16 bg-gray-800 rounded-full"></div>
                    <div className="h-5 w-20 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="h-6 w-3/4 bg-gray-800 rounded-md mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-800/60 rounded-md mb-5"></div>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="flex items-center gap-6 border-t border-gray-800/80 pt-4">
                  <div className="h-4 w-16 bg-gray-800/60 rounded-md"></div>
                  <div className="h-4 w-16 bg-gray-800/60 rounded-md"></div>
                  <div className="h-4 w-12 bg-gray-800/60 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
