import { useRef, useEffect } from "react";
import Typed from "typed.js";

import style from "../../css/home.module.css";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["A Frontend Developer", "An UI/UX Lover"],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 1000,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="grid h-screen grid-cols-2 items-center gap-8" id="home">
      <div className="object-scale-down">
        {/* <img src="../assets/img/slider-img.jpg" alt="Slider" /> */}
      </div>
      <div>
        <h1 className="block font-main text-2xl uppercase text-light">
          <span>Hello, I'm Jeremy</span>
          <br />
          <span className="text-primary" ref={el} />
        </h1>
        <p className="pr-[220px] pt-3 font-alt text-base text-light">
          I'm a passionate web developer skilled in creating engaging and
          user-friendly websites. Specializing in front-end development with
          modern technologies like JavaScript, React and Tailwind. Dedicated to
          delivering high-quality, custom solutions that exceed client
          expectations.
        </p>
      </div>
      <div className={`${style.circle_one}`}>
        <span data-tootik="About me" data-tootik-conf="left dark square shadow">
          <a href="#about">
            <span className={`${style.animated_circle_one} relative`} />
          </a>
        </span>
      </div>
      <div className={`${style.circle_two}`}>
        <span data-tootik="Timeline" data-tootik-conf="dark square shadow">
          <a href="#timeline">
            <span className={`${style.animated_circle_two} relative`} />
          </a>
        </span>
      </div>
      <div className={`${style.circle_three}`}>
        <span
          data-tootik="Projects"
          data-tootik-conf="right dark square shadow"
        >
          <a href="#project">
            <span className={`${style.animated_circle_three} relative`} />
          </a>
        </span>
      </div>
      <div className={`${style.circle_four}`}>
        <span
          data-tootik="Reviews"
          data-tootik-conf="bottomR dark square shadow"
        >
          <a href="#review">
            <span className={`${style.animated_circle_four} relative`} />
          </a>
        </span>
      </div>
      <div className={`${style.circle_five}`}>
        <span
          data-tootik="Contact"
          data-tootik-conf="bottomL dark square shadow"
        >
          <a href="#contact">
            <span className={`${style.animated_circle_five} relative`} />
          </a>
        </span>
      </div>
    </div>
  );
}
