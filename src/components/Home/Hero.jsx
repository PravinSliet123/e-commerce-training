const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#f2f0f1]">
      <div className="mx-auto grid min-h-[685px] max-w-[1280px] grid-cols-1 items-center lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="z-10 px-6 py-16 lg:px-0 lg:py-20">
          <h1 className="max-w-[620px] text-[52px] font-black uppercase leading-[0.94] tracking-[-2px] sm:text-[64px] lg:text-[68px]">
            Find Clothes
            <br />
            That Matches
            <br />
            Your Style
          </h1>

          <p className="mt-7 max-w-[570px] text-[16px] leading-6 text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="mt-7 rounded-full bg-black px-16 py-4 text-[16px] font-medium text-white transition hover:bg-gray-800">
            Shop Now
          </button>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap items-start gap-y-6">
            <div className="pr-7">
              <div className="text-[40px] font-medium leading-none">
                200+
              </div>
              <p className="mt-2 text-[15px] text-gray-500">
                International Brands
              </p>
            </div>

            <div className="border-l border-gray-300 px-7">
              <div className="text-[40px] font-medium leading-none">
                2,000+
              </div>
              <p className="mt-2 text-[15px] text-gray-500">
                High-Quality Products
              </p>
            </div>

            <div className="border-l border-gray-300 px-7">
              <div className="text-[40px] font-medium leading-none">
                30,000+
              </div>
              <p className="mt-2 text-[15px] text-gray-500">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex h-full min-h-[500px] items-end justify-center lg:min-h-[685px]">
          
          {/* Decorative star */}
          <div className="absolute right-[8%] top-[15%] text-[100px] leading-none">
            ✦
          </div>

          <div className="absolute left-[8%] top-[45%] text-[55px] leading-none">
            ✦
          </div>

          {/* Replace this with your actual hero image */}
          <img
            src="/hero-models.png"
            alt="Fashion models"
            className="relative z-10 h-full max-h-[650px] w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;