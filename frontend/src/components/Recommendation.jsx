import style from "../../css/recommendation.module.css";

export default function Recommendation() {
  return (
    <section
      className="flex h-screen flex-col justify-center gap-8 font-alt"
      id="review"
    >
      <div>
        <h2 className="block font-main text-xl uppercase text-light">
          <span className="block uppercase text-primary">People</span>
          <span> I worked with &amp; for </span>
        </h2>
        <p className="py-2 text-base text-light">
          Few words from them about me and my work
        </p>
      </div>

      <div className="grid grid-cols-2 gap-32 text-center">
        <div className="flex flex-col gap-8">
          <img
            src="../assets/icons/review/quote.svg"
            alt="quote icon"
            className={`${style.icon_quotes}`}
          />
          <p className="text-base text-light">
            Jeremy has a solid understanding of the fundamental principles of
            web development and is capable of creatively solving complex
            problems. His ability to work in a team and collaborate with other
            developers is a valuable quality.
          </p>
          <div className={`${style.review_img} flex justify-center`}>
            <img
              src="../assets/img/review/anthony.webp"
              alt="Anthony Gorski picture"
            />
          </div>
          <div className={`${style.review_title}`}>
            <h4 className="font-main text-lg text-primary">Anthony Gorski</h4>
            <a href="https://www.linkedin.com/in/anthony-gorski/">
              <img src="../assets/icons/linkedin.svg" alt="linkedin icon" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <img
            src="../assets/icons/review/quote.svg"
            alt="quote icon"
            className={`${style.icon_quotes}`}
          />
          <p className="text-base text-light">
            Jeremy is a reliable person, always present and professional. He's
            also a good trainer, explaining softwares in details. One thing is
            certain, he always dives fully into new projects to push himself to
            the limit.
          </p>
          <div className={`${style.review_img} flex justify-center`}>
            <img
              src="../assets/img/review/ingrid.jpg"
              alt="Ingrid Freire picture"
            />
          </div>
          <div className={`${style.review_title}`}>
            <h4 className="font-main text-lg text-primary">Ingrid Freire</h4>
            <a href="https://www.linkedin.com/in/ingrid-freire-2a00b31b7/">
              <img src="../assets/icons/linkedin.svg" alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}