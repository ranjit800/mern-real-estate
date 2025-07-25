import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import HeroImg from "../assets/Images/HeroImg.png";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import OfferSwiper from "../components/OfferSwiper";
import ListingSection from "../components/ListingSection";
import WhyWorkWithUs from "../components/WhyWorkWithUs";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      {/* <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Jana Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div> */}

      <Hero />
      <WhoWeAre />
      {/* swiper section */}
      {/* <div className=" bg-black p-3 flex flex-col gap-8 my-10 "> */}
      {/* <div className="container  mx-auto"> */}

      <OfferSwiper listings={offerListings} />
      {/* </div> */}
      {/* </div> */}

      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}

      {/* listing results for offer, sale and rent */}
      <div className="max-w-8xl bg-[#44443F] mx-auto p-3 flex flex-col gap-14 pb-16 ">
        <ListingSection title="Recent offers" link="/search?offer=true" linkText="Show more offers" listings={offerListings} />
        <ListingSection title="Recent places for rent" link="/search?type=rent" linkText="Show more places for rent" listings={rentListings} />
        <ListingSection title="Recent places for sale" link="/search?type=sale" linkText="Show more places for sale" listings={saleListings} />
      </div>
      <WhyWorkWithUs />
    </div>
  );
}
