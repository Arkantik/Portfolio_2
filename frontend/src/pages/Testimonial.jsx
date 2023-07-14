// Package
import { BsLinkedin } from "react-icons/bs";

// Style
import style from "../styles/review.module.css";

export default function Testimonials() {
  return (
    <section
      className="flex flex-col justify-center gap-16 font-alt md:h-screen"
      id="testimonial"
    >
      <div>
        <h2 className="font-main text-xl uppercase text-light">
          <span className="block uppercase text-primary">People</span>
          <span> I worked with &amp; for </span>
        </h2>
        <p className="py-2 text-sm text-light">
          Few words from them about me and my work
        </p>
      </div>

      <div className="flex flex-col gap-16 text-center md:grid md:grid-cols-2 md:gap-32">
        <div className="flex flex-col gap-8">
          <img
            src="../assets/icons/review/quote.svg"
            alt="quote icon"
            className={`${style.icon_quotes}`}
          />
          <p className="text-sm text-light">
            Jeremy has a solid understanding of the fundamental principles of
            web development and is capable of creatively solving complex
            problems. His ability to work in a team and collaborate with other
            developers is a valuable quality.
          </p>
          <div className={`${style.review_img} flex justify-center`}>
            <img src="../assets/img/review/anthony.webp" alt="Anthony Gorski" />
          </div>
          <div className={`${style.review_title}`}>
            <h4 className="font-main text-lg text-primary">Anthony Gorski</h4>
            <a href="https://www.linkedin.com/in/anthony-gorski/">
              <BsLinkedin className="rounded bg-transparent p-1.5 text-xl text-light hover:bg-primary" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <img
            src="../assets/icons/review/quote.svg"
            alt="quote icon"
            className={`${style.icon_quotes}`}
          />
          <p className="text-sm text-light">
            Jeremy is a reliable person, always present and professional. He's
            also a good trainer, explaining softwares in details. One thing is
            certain, he always dives fully into new projects to push himself to
            the limit.
          </p>
          <div className={`${style.review_img} flex justify-center`}>
            <img src="../assets/img/review/ingrid.jpg" alt="Ingrid Freire" />
          </div>
          <div className={`${style.review_title}`}>
            <h4 className="font-main text-lg text-primary">Ingrid Freire</h4>
            <a href="https://www.linkedin.com/in/ingrid-freire-2a00b31b7/">
              <BsLinkedin className="rounded bg-transparent p-1.5 text-xl text-light hover:bg-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
