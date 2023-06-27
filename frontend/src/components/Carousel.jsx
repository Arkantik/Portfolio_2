// Package
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";

// Style
import "swiper/swiper-bundle.min.css";
import style from "../../css/project.module.css";

// Data
import projectData from "../services/project.json";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

export default function Carousel() {
  const slideImages = projectData
    .slice(0, 7)
    .map(({ id, src, name, techno, tool, description }) => ({
      id,
      src,
      name,
      techno,
      tool,
      description,
    }));

  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        initialSlide={1}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 125,
          modifier: 2.5,
        }}
        pagination={{ el: ".pagination", clickable: true }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
          clickable: true,
        }}
        className={`${style.swiper_container}`}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slideImages.map(({ id, src, name, techno, tool, description }) => (
          <SwiperSlide key={id}>
            <img src={src} alt={name} />
            <div className="flex justify-center">
              {Object.values(techno).map((tech) => (
                <img
                  key={tech}
                  src={tech}
                  alt={tech}
                  className="inline-flex p-2"
                />
              ))}
              {Object.values(tool).map((soft) => (
                <img
                  key={soft}
                  src={soft}
                  alt={soft}
                  className="inline-flex p-2"
                />
              ))}
            </div>
            <figcaption className="absolute bottom-0 w-full rounded-b-2xl p-2 text-center text-sm text-light">
              {description}
            </figcaption>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-controller flex items-center justify-center">
        <div className="flex items-center gap-4">
          <button type="button" className="button-prev">
            <img
              src="../assets/icons/portfolio/arrow-left-circle.svg"
              alt="Previous Slide"
              className="h-10 w-10"
            />
          </button>
          <div className="pagination flex items-center justify-around gap-1" />
          <button type="button" className="button-next">
            <img
              src="../assets/icons/portfolio/arrow-right-circle.svg"
              alt="Next Slide"
              className="h-10 w-10"
            />
          </button>
        </div>
      </div>
    </>
  );
}
