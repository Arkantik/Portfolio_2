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
        <a href="#about">
          <span className={`${style.animated_circle_one} relative`} />
        </a>
      </div>
      <div className={`${style.circle_two}`}>
        <a href="#timeline">
          <span className={`${style.animated_circle_two} relative`} />
        </a>
      </div>
      <div className={`${style.circle_three}`}>
        <a href="#project">
          <span className={`${style.animated_circle_three} relative`} />
        </a>
      </div>
      <div className={`${style.circle_four}`}>
        <a href="#review">
          <span className={`${style.animated_circle_four} relative`} />
        </a>
      </div>
      <div className={`${style.circle_five}`}>
        <a href="#contact">
          <span className={`${style.animated_circle_five} relative`} />
        </a>
      </div>
    </div>
  );
}
