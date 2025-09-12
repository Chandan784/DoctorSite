import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {
  const heroImages = [
    {
      src: "https://wallpaperaccess.com/full/136920.jpg",
      caption: "Expert Doctors At Your Service",
    },
    {
      src: "https://wallpaperaccess.com/full/960588.jpg",
      caption: "Compassionate Care For Every Patient",
    },
    {
      src: "https://wallpaperaccess.com/full/3275630.jpg",
      caption: "Modern Facilities For Better Healthcare",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-10">
        <Slider {...sliderSettings}>
          {heroImages.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-[450px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                  {item.caption}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default HeroSlider;
