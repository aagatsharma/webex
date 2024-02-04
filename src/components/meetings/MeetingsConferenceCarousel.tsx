import image1 from "@/assets/meetings/Real-time-Translations-and-Gesture-Recognition-in-Webex.jpg";
import image2 from "@/assets/meetings/Noise-Removal-with-Webex.jpg";
import image3 from "@/assets/meetings/Stop-Writing-Notes-with-Webex-Assistant.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/scrollbar";

import { Pagination } from "swiper/modules";

const contactcarousel = [
  {
    id: 1,
    title: "Real-time Translations and Gesture Recognition in Webex",
    description:
      "Not fluent in English? No worries — you can translate to 100+ languages in Webex. Don’t want to bother with the keyboard? No problem. Send in-meeting reactions with just your fingers.",
    image: image1,
  },
  {
    id: 2,
    title: "Noise Removal with Webex",
    description:
      "Take the difficulty out of connecting no matter where you work, with built-in noise removal technology that lets you meet with confidence.",
    image: image2,
  },
  {
    id: 3,
    title: "Stop Writing Notes with Webex Assistant",
    description:
      "Meet the first digital in-meeting assistant for the enterprise. Use voice commands, get real-time and recorded transcripts, closed captioning, automatic highlights, and notes.",
    image: image3,
  },
];

const MeetingsConferenceCarousel = () => {
  return (
    <div className="py-40">
      <div className="flex flex-col lg:px-40 max-md:p-10 my-7">
        <h1 className="md:text-7xl text-4xl font-bold">
          AI-powered features evolve
        </h1>
        <h1 className="md:text-7xl text-4xl font-bold">
          your video conferencing.
        </h1>
      </div>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, centeredSlides: true, spaceBetween: 20 },
          800: { slidesPerView: 1.2, centeredSlides: false, spaceBetween: 20 },
          1000: { slidesPerView: 1.6, centeredSlides: false, spaceBetween: 20 },
          1200: { slidesPerView: 2.4, centeredSlides: false, spaceBetween: 20 },
          1500: { slidesPerView: 3.1, centeredSlides: true, spaceBetween: 20 },
        }}
        pagination
        grabCursor
        modules={[Pagination]}
        className="pb-10 px-6 my-20"
      >
        {contactcarousel.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <div className="flex flex-col gap-8 group">
              <img
                src={carousel.image}
                alt={carousel.title}
                className="rounded-3xl"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{carousel.title}</h1>
                <h3 className="text-black opacity-60 group-hover:opacity-100 text-lg">
                  {carousel.description}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetingsConferenceCarousel;
