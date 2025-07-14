import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import bg from '../assets/Images/bg3.png'

export default function OfferSwiper({ listings }) {
  if (!listings || listings.length === 0) {
    return (
      <div className="w-full bg-[#CACFCC] py-20 px-4 flex items-center justify-center min-h-[500px]">
        <h2 className="text-4xl text-white font-bold text-center">No Featured Listings</h2>
      </div>
    );
  }

  const validListings = listings.filter((listing) => listing.imageUrls && listing.imageUrls[0]);
  const slides = validListings.length < 3 ? [...validListings, ...validListings] : validListings;

  return (
    <div className="w-full bg-[#CACFCC] py-20 px-2">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl text-white font-semibold mb-16 text-center">Featured Listings</h2>
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true} // Changed from true to false for fewer slides
          loopedSlides={listings.length}
          slidesPerView={3}
          spaceBetween={-200}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            waitForTransition: true,
          }}
          speed={900}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 3,
            slideShadows: true,
            scale: 1,
          }}
          className="w-full"
          style={{ paddingBottom: "60px", minHeight: "600px" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: -60,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: -200,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: -320,
            },
          }}
        >
          {slides.map((listing, idx) => (
            <SwiperSlide
              key={listing._id + "-" + idx}
              className="w-[500px] md:w-[600px] lg:w-[700px] transition-transform"
              style={{
                borderRadius: "36px",
                overflow: "hidden",
                boxShadow: "0 16px 48px 0 rgba(0,0,0,0.35)",
                minHeight: "500px",
                background: "#181818",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="relative group w-full h-full">
                <img
                  src={listing.imageUrls && listing.imageUrls[0] ? listing.imageUrls[0] : "/default-image.jpg"}
                  alt={listing.name}
                  className="w-full h-[500px] object-cover"
                  style={{
                    transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-100 transition-opacity">
                  <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">{listing.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}



