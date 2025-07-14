// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ListingItem from '../components/ListingItem';

// export default function Search() {
//   const navigate = useNavigate();
//   const [sidebardata, setSidebardata] = useState({
//     searchTerm: '',
//     type: 'all',
//     parking: false,
//     furnished: false,
//     offer: false,
//     sort: 'created_at',
//     order: 'desc',
//   });

// console.log(sidebardata)

//   const [loading, setLoading] = useState(false);
//   const [listings, setListings] = useState([]);
// console.log(listings)

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     const typeFromUrl = urlParams.get('type');
//     const parkingFromUrl = urlParams.get('parking');
//     const furnishedFromUrl = urlParams.get('furnished');
//     const offerFromUrl = urlParams.get('offer');
//     const sortFromUrl = urlParams.get('sort');
//     const orderFromUrl = urlParams.get('order');

//     if (
//       searchTermFromUrl ||
//       typeFromUrl ||
//       parkingFromUrl ||
//       furnishedFromUrl ||
//       offerFromUrl ||
//       sortFromUrl ||
//       orderFromUrl
//     ) {
//       setSidebardata({
//         searchTerm: searchTermFromUrl || '',
//         type: typeFromUrl || 'all',
//         parking: parkingFromUrl === 'true' ? true : false,
//         furnished: furnishedFromUrl === 'true' ? true : false,
//         offer: offerFromUrl === 'true' ? true : false,
//         sort: sortFromUrl || 'created_at',
//         order: orderFromUrl || 'desc',
//       });
//     }

//    const fetchListings = async () => {
//       setLoading(true);
//       const searchQuery = urlParams.toString();
//       const res = await fetch(`/api/listing/get?${searchQuery}`);
//       const data = await res.json();
//       setListings(data);
//       setLoading(false);
//     };

//     fetchListings();
//   }, [location.search]);

//   const handleChange = (e) => {
//     if (
//       e.target.id === 'all' ||
//       e.target.id === 'rent' ||
//       e.target.id === 'sale'
//     ) {
//       setSidebardata({ ...sidebardata, type: e.target.id });
//     }

//     if (e.target.id === 'searchTerm') {
//       setSidebardata({ ...sidebardata, searchTerm: e.target.value });
//     }

//     if (
//       e.target.id === 'parking' ||
//       e.target.id === 'furnished' ||
//       e.target.id === 'offer'
//     ) {
//       setSidebardata({
//         ...sidebardata,
//         [e.target.id]:
//           e.target.checked || e.target.checked === 'true' ? true : false,
//       });
//     }

//     if (e.target.id === 'sort_order') {
//       const sort = e.target.value.split('_')[0] || 'created_at';

//       const order = e.target.value.split('_')[1] || 'desc';

//       setSidebardata({ ...sidebardata, sort, order });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams();
//     urlParams.set('searchTerm', sidebardata.searchTerm);
//     urlParams.set('type', sidebardata.type);
//     urlParams.set('parking', sidebardata.parking);
//     urlParams.set('furnished', sidebardata.furnished);
//     urlParams.set('offer', sidebardata.offer);
//     urlParams.set('sort', sidebardata.sort);
//     urlParams.set('order', sidebardata.order);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   return (
//     <div className='flex flex-col md:flex-row'>
//       <div className='p-7  border-b-2 md:border-r-2 md:min-h-screen'>
//         <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
//           <div className='flex items-center gap-2'>
//             <label className='whitespace-nowrap font-semibold'>
//               Search Term:
//             </label>
//             <input
//               type='text'
//               id='searchTerm'
//               placeholder='Search...'
//               className='border rounded-lg p-3 w-full'
//               value={sidebardata.searchTerm}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='flex gap-2 flex-wrap items-center'>
//             <label className='font-semibold'>Type:</label>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='all'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.type === 'all'}
//               />
//               <span>Rent & Sale</span>
//             </div>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='rent'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.type === 'rent'}
//               />
//               <span>Rent</span>
//             </div>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='sale'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.type === 'sale'}
//               />
//               <span>Sale</span>
//             </div>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='offer'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.offer}
//               />
//               <span>Offer</span>
//             </div>
//           </div>
//           <div className='flex gap-2 flex-wrap items-center'>
//             <label className='font-semibold'>Amenities:</label>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='parking'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.parking}
//               />
//               <span>Parking</span>
//             </div>
//             <div className='flex gap-2'>
//               <input
//                 type='checkbox'
//                 id='furnished'
//                 className='w-5'
//                 onChange={handleChange}
//                 checked={sidebardata.furnished}
//               />
//               <span>Furnished</span>
//             </div>
//           </div>
//           <div className='flex items-center gap-2'>
//             <label className='font-semibold'>Sort:</label>
//             <select
//               onChange={handleChange}
//               defaultValue={'created_at_desc'}
//               id='sort_order'
//               className='border rounded-lg p-3'
//             >
//               <option value='regularPrice_desc'>Price high to low</option>
//               <option value='regularPrice_asc'>Price low to hight</option>
//               <option value='createdAt_desc'>Latest</option>
//               <option value='createdAt_asc'>Oldest</option>
//             </select>
//           </div>
//           <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
//             Search
//           </button>
//         </form>
//       </div>
//       <div className='flex-1'>
//         <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>
//           Listing results:
//         </h1>
//          <div className='p-7 flex flex-wrap gap-4'>
//           {!loading && listings.length === 0 && (
//             <p className='text-xl text-slate-700'>No listing found!</p>
//           )}
//           {loading && (
//             <p className='text-xl text-slate-700 text-center w-full'>
//               Loading...
//             </p>
//           )}

//           {!loading &&
//             listings &&
//             listings.map((listing) => (
//               <ListingItem key={listing._id} listing={listing} />
//             ))}
//         </div>

//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "../components/ListingItem";

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "createdAt",
    order: "desc",
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const furnishedFromUrl = urlParams.get("furnished");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (searchTermFromUrl || typeFromUrl || parkingFromUrl || furnishedFromUrl || offerFromUrl || sortFromUrl || orderFromUrl) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true",
        furnished: furnishedFromUrl === "true",
        offer: offerFromUrl === "true",
        sort: sortFromUrl || "createdAt",
        order: orderFromUrl || "desc",
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);

      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, value, checked } = e.target;

    if (["all", "rent", "sale"].includes(id)) {
      setSidebardata({ ...sidebardata, type: id });
    } else if (id === "searchTerm") {
      setSidebardata({ ...sidebardata, searchTerm: value });
    } else if (["parking", "furnished", "offer"].includes(id)) {
      setSidebardata({ ...sidebardata, [id]: checked });
    } else if (id === "sort_order") {
      const [sort, order] = value.split("_");
      setSidebardata({ ...sidebardata, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(sidebardata);
    navigate(`/search?${urlParams.toString()}`);
  };
  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const startIndex = numberOfListings;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/listing/get?${searchQuery}`);
    const data = await res.json();
    if (data.length < 9) {
      setShowMore(false);
    }
    setListings([...listings, ...data]);
  };

  return (
    <div className="flex flex-col md:flex-row text-white min-h-screen ">
      {/* Sidebar */}
      <div className="p-7 md:pt-28 pt-0 border-b-2 md:border-r-2 md:min-h-screen w-full md:w-96 bg-[#CACFCC] border-slate-200 md:sticky md:top-0 md:h-screen shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#23272f] text-base tracking-wide mb-1">Search Term</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search properties, locations..."
              className="bg-white text-[#23272f] p-3 rounded-xl border border-[#e0e0e0] focus:border-[#d1b989] focus:ring-2 focus:ring-[#d1b989]/30 placeholder:text-[#b0b0b0] transition"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#23272f] text-base tracking-wide mb-1">Type</label>
            <div className="flex flex-wrap gap-4">
              {["all", "rent", "sale"].map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg cursor-pointer border transition
                    ${
                      sidebardata.type === type
                        ? "bg-[#d1b989]/20 border-[#d1b989] text-[#8f6841] font-bold"
                        : "bg-white border-[#e0e0e0] text-[#23272f] hover:border-[#d1b989]/60"
                    }`}
                >
                  <input
                    type="checkbox"
                    id={type}
                    checked={sidebardata.type === type}
                    onChange={handleChange}
                    className="accent-[#d1b989] w-4 h-4"
                  />
                  {type === "all" ? "Rent & Sale" : type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#23272f] text-base tracking-wide mb-1">Amenities</label>
            <div className="flex flex-wrap gap-4">
              {["parking", "furnished", "offer"].map((amenity) => (
                <label
                  key={amenity}
                  className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg cursor-pointer border transition
                    ${
                      sidebardata[amenity]
                        ? "bg-[#d1b989]/20 border-[#d1b989] text-[#8f6841] font-bold"
                        : "bg-white border-[#e0e0e0] text-[#23272f] hover:border-[#d1b989]/60"
                    }`}
                >
                  <input
                    type="checkbox"
                    id={amenity}
                    checked={sidebardata[amenity]}
                    onChange={handleChange}
                    className="accent-[#d1b989] w-4 h-4"
                  />
                  {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#23272f] text-base tracking-wide mb-1">Sort By</label>
            <div className="relative">
              <select
                id="sort_order"
                onChange={handleChange}
                defaultValue="createdAt_desc"
                className="appearance-none bg-white text-[#23272f] border border-[#e0e0e0] p-3 rounded-xl focus:border-[#d1b989] focus:ring-2 focus:ring-[#d1b989]/30 transition w-full pr-10 font-medium shadow-sm hover:border-[#d1b989]/80 cursor-pointer"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='16' height='16' fill='none' stroke='%238f6841' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1.25em 1.25em",
                }}
              >
                <option
                  value="regularPrice_desc"
                  className="bg-[#f8f6f2] text-[#8f6841] font-semibold hover:bg-[#d1b989]/30 hover:text-[#23272f] py-2"
                >
                  Price high to low
                </option>
                <option
                  value="regularPrice_asc"
                  className="bg-[#f8f6f2] text-[#8f6841] font-semibold hover:bg-[#d1b989]/30 hover:text-[#23272f] py-2"
                >
                  Price low to high
                </option>
                <option
                  value="createdAt_desc"
                  className="bg-[#f8f6f2] text-[#8f6841] font-semibold hover:bg-[#d1b989]/30 hover:text-[#23272f] py-2"
                >
                  Latest
                </option>
                <option
                  value="createdAt_asc"
                  className="bg-[#f8f6f2] text-[#8f6841] font-semibold hover:bg-[#d1b989]/30 hover:text-[#23272f] py-2"
                >
                  Oldest
                </option>
              </select>
              {/* Custom dropdown arrow for better appearance */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg width="20" height="20" fill="none" stroke="#8f6841" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#d1b989] text-[#23272f] p-3 rounded-xl uppercase font-semibold shadow-md hover:bg-[#bfa76a] hover:text-white transition tracking-wide"
          >
            Search
          </button>
        </form>
      </div>

      {/* Listings Section */}
      <div className="flex-1 p-6 min-h-screen py-20">
        <h1 className="text-3xl font-bold mb-6 text-[#8f6841]">Listing Results:</h1>

        <div className="flex flex-wrap gap-6">
          {loading ? (
            <p className="text-lg text-slate-300">Loading...</p>
          ) : listings.length === 0 ? (
            <p className="text-lg text-slate-300">No listings found.</p>
          ) : (
            listings.map((listing) => <ListingItem key={listing._id} listing={listing} />)
          )}

          {showMore && (
            <div className="w-full flex justify-center">
              <button
                onClick={onShowMoreClick}
                className='text-green-700 hover:underline p-7 text-center w-full max-w-xs'
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
