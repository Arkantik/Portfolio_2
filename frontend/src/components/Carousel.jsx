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
    .map(({ id, src, name, techno, tool, description, github, site }) => ({
      id,
      src,
      name,
      techno,
      tool,
      description,
      github,
      site,
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
        {slideImages.map(
          ({ id, src, name, techno, tool, description, github, site }) => (
            <SwiperSlide key={id}>
              <img
                src={src}
                alt={name}
                className="h-3/5 w-full rounded-t-2xl object-cover"
              />
              <article className="flex flex-col gap-2">
                <div className="flex justify-center px-4">
                  {Object.values(techno).map((tech) => (
                    <img
                      key={tech}
                      src={tech}
                      alt={tech}
                      className="inline-flex p-2"
                    />
                  ))}
                  <img src={tool} alt={tool} className="inline-flex p-2" />
                </div>
                <div className="flex justify-center gap-4 px-4">
                  <a
                    href={github}
                    className="rounded border border-primary bg-transparent px-4 py-1 text-light hover:bg-primary"
                  >
                    Github
                  </a>
                  <a
                    href={site}
                    className="rounded border border-primary bg-transparent px-4 py-1 text-light hover:bg-primary"
                  >
                    Website
                  </a>
                </div>
                <p className="p-2 text-center text-sm text-light">
                  {description}
                </p>
              </article>
            </SwiperSlide>
          )
        )}
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
