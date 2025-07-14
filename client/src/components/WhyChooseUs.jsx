import LeftImg from '../assets/Images/whychose-bg.png'
const WhyChooseUs = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="h-[400px] md:h-auto">
          <img
            src={LeftImg}// Replace with your actual image path or import
            alt="Building with car"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right Content */}
        <div className="bg-[#1f1f1f] text-white px-6 md:px-12 py-10 md:py-20 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            WHY CHOOSE US?
          </h2>
          <div className="w-10 h-[2px] bg-white mb-8"></div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed font-light">
            <p>We have a strong track record of successful projects.</p>
            <p>We have a dedicated team with the expertise and skills.</p>
            <p>We negotiate the best deals for our clients.</p>
            <p>We have a solid network of resources in the industry.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  