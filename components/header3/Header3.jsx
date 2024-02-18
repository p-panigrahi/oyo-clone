"use client";

const Header3 = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-700 to-red-500 h-60">
        <div className=" p-7">
          <h2 className="text-4xl text-white text-center font-bold">
            Over 157,000 hotels and homes across 35 countries
          </h2>
          <div className="grid grid-cols-5 my-7 mx-20">
            <input
              type="text"
              placeholder="Search....."
              className="h-13 outline-none text-lg border-r-2 border-gray-200 col-span-2"
            />
            <input
              type="text"
              placeholder="Search....."
              className="h-13 outline-none text-lg border-r-2 border-gray-200 col-span-1"
            />
            <input
              type="text"
              placeholder="Search....."
              className="h-13 outline-none text-lg col-span-1"
            />
            <button className="h-12 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white font-bold">
              Search
            </button>
          </div>
          <div className="flex mx-20  my-9 font-bold">
            <button
              type="submit"
              className="h-13 px-3 py-2 hover:cursor-pointer text-white text-sm mr-5"
            >
              Continue your search
            </button>
            <button
              type="submit"
              className="h-13 px-3 py-2 hover:cursor-pointer text-white text-sm mr-5 border-2 hover:bg-slate-500 rounded-xl"
            >
              Homestay in India hotels
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header3;
