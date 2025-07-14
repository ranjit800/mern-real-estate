import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn, MdBed, MdBathtub } from "react-icons/md";

const ListingItem = ({ listing }) => {
  return (
    <div className="relative bg-[#1f1f1f]/20 backdrop-blur-2xl  shadow-xl hover:shadow-2xl transition-shadow overflow-hidden rounded-2xl w-full sm:w-[330px]">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-white/40 blur-xl  z-10 pointer-events-none rounded-2xl" />
      <Link to={`/listing/${listing._id}`} className="relative z-20 block">
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-transform duration-300 rounded-t-2xl"
        />
        <div className="p-4 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-[#f3f0eb] drop-shadow-sm">{listing.name}</p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-yellow-500 drop-shadow-sm" />
            <p className="text-sm text-[#f3f0eb] truncate w-full">{listing.address}</p>
          </div>
          <p className="text-sm text-[#f3f0eb] line-clamp-2">{listing.description}</p>
          <p className="text-[#f3f0eb] mt-2 font-semibold drop-shadow-sm">
            ${listing.offer ? listing.discountPrice.toLocaleString("en-US") : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-[#f3f0eb] flex gap-4">
            <div className="flex items-center gap-1 font-bold text-xs">
              <MdBed className="h-4 w-4 mr-1" />
              {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}
            </div>
            <div className="flex items-center gap-1 font-bold text-xs">
              <MdBathtub className="h-4 w-4 mr-1" />
              {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
