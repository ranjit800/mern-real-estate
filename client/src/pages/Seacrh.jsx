import React from 'react';

const Search = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 md:px-0 py-8">
      <div className="flex flex-col md:flex-row gap-6 container mx-auto ">
        {/* Search Filters */}
        <div className="w-full md:w-1/3 bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-md">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="searchTerm" className="font-medium text-slate-300">Search Term:</label>
              <input
                type="text"
                id="searchTerm"
                placeholder="Search by title..."
                className="px-4 py-2 rounded-lg bg-slate-700 text-white placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-slate-300">Type:</label>
              <div className="flex flex-wrap gap-4">
                {['Rent & Sale', 'Rent', 'Sale', 'Offer'].map((label, i) => {
                  const id = label.toLowerCase().replace(/ & /g, '-');
                  return (
                    <label key={id} className="flex items-center gap-2 text-sm capitalize">
                      <input type="checkbox" id={id} className="w-4 h-4 accent-[#d1b989]" />
                      {label}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-slate-300">Amenities:</label>
              <div className="flex flex-wrap gap-4">
                {['Parking', 'Furnished'].map((label) => {
                  const id = label.toLowerCase();
                  return (
                    <label key={id} className="flex items-center gap-2 text-sm capitalize">
                      <input type="checkbox" id={id} className="w-4 h-4 accent-[#d1b989]" />
                      {label}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="sort_order" className="font-medium text-slate-300">Sort By:</label>
              <select
                id="sort_order"
                className="px-4 py-2 rounded-lg bg-slate-700 text-white"
              >
                <option>Price high to low</option>
                <option>Price low to high</option>
                <option>Latest</option>
                <option>Oldest</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#d1b989] text-black font-semibold py-2 rounded-lg uppercase hover:bg-[#bfa76c] transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Search Results */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold text-[#d1b989] mb-4 border-b border-slate-600 pb-3">
            Listing Results
          </h2>
          {/* Results will be rendered here */}
        </div>
      </div>
    </main>
  );
};

export default Search;
