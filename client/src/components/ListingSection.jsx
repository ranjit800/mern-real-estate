import { Link } from "react-router-dom";
import ListingItem from "./ListingItem";

export default function ListingSection({ title, link, linkText, listings }) {
  if (!listings || listings.length === 0) return null;
  return (
    <div className="w-full flex flex-col justify-center items-center py-6  ">
      <div className="my-6 text-center ">
        <h2 className="text-5xl font-semibold text-slate-400">{title}</h2>
        <Link className="text-sm text-center text-[#f3f0eb] hover:underline" to={link}>
          {linkText}
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {listings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  );
}
