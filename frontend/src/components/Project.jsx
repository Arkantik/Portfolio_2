import Carousel from "./Carousel";

export default function Project() {
  return (
    <section
      className="flex flex-col justify-center gap-8 font-alt"
      id="project"
    >
      <div>
        <h2 className="block font-main text-xl uppercase text-light">
          <span className="block uppercase text-primary"> Portfolio </span>
          <span> of my projects </span>
        </h2>
      </div>

      <Carousel />
      {/* <div className="row">
        <div className="col-sm-12">
          <div className="team-classic owl-team owl-carousel text-center">
            <div className="item">
              <div className="team-data-img">
                <a
                  href="https://arkantik.github.io/WildBook/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="single-work">
                    <img
                      src="../assets/img/project/wildbook.png"
                      alt="Wildbook project"
                      className="img-responsive"
                      data-no-retina
                    />
                    <div className="overlay-text center-block">
                      <div className="cases-image-inner">
                        <span className="cases-line top" />
                        <span className="cases-line top-right" />
                        <span className="cases-line bottom" />
                        <span className="cases-line bottom-left" />
                        <h6 className="text-uppercase alt-font text-light">
                          WildBook
                        </h6>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="portfolio-content">
                  <h5 className="text-blue main-font text-uppercase mb-2">
                    WildBook - My First Website
                  </h5>
                  <p>
                    Responsive and mobile-first single-page site using HTML,
                    CSS, and vanilla JS. <br />
                    This project was made in 2 weeks with only 2 weeks of
                    experience in web dev
                  </p>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="team-data-img">
                <a
                  href="https://arkantik.github.io/hogwarts-magic-cards/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="single-work">
                    <img
                      src="./public/assets/img/project/hogwarts.png"
                      alt="Hogwarts magic cards project"
                      className="img-responsive"
                      data-no-retina
                    />
                    <div className="overlay-text center-block">
                      <div className="cases-image-inner">
                        <span className="cases-line top" />
                        <span className="cases-line top-right" />
                        <span className="cases-line bottom" />
                        <span className="cases-line bottom-left" />
                        <h6 className="text-uppercase alt-font text-light">
                          Hogwarts Magic Cards
                        </h6>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="portfolio-content">
                  <h5 className="text-blue main-font text-uppercase mb-2">
                    Hogwarts Magic Cards
                  </h5>
                  <p>
                    Flash-game type website using ReactJS, a CSS
                    framework(Tailwind), and integrating an API.
                    <br />
                    This website is a strategy turn by turn card game set in the
                    world of Harry Potter.
                  </p>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="team-data-img">
                <a
                  href="https://arkantik.github.io/holifun/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="single-work">
                    <img
                      src="./public/assets/img/project/holifun.png"
                      alt="Holifun project"
                      className="img-responsive"
                      data-no-retina
                    />
                    <div className="overlay-text center-block">
                      <div className="cases-image-inner">
                        <span className="cases-line top" />
                        <span className="cases-line top-right" />
                        <span className="cases-line bottom" />
                        <span className="cases-line bottom-left" />
                        <h6 className="text-uppercase alt-font text-light">
                          HoliFun
                        </h6>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="portfolio-content">
                  <h5 className="text-blue main-font text-uppercase mb-2">
                    HoliFun
                  </h5>
                  <p>
                    No idea where to go for your next vacation? HoliFun is made
                    for you!
                    <br />
                    This project has been created during a 36h Hackathon, with
                    the objective to build something about vacation and using an
                    API.
                  </p>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="team-data-img">
                <a
                  href="./public/assets/img/project/origins.png"
                  target="_blank"
                >
                  <div className="single-work">
                    <img
                      src="./public/assets/img/project/origins.png"
                      alt="team"
                      className="img-responsive"
                      data-no-retina
                    />
                    <div className="overlay-text center-block">
                      <div className="cases-image-inner">
                        <span className="cases-line top" />
                        <span className="cases-line top-right" />
                        <span className="cases-line bottom" />
                        <span className="cases-line bottom-left" />
                        <h6 className="text-uppercase alt-font text-light">
                          Origins E-sport
                        </h6>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="portfolio-content">
                  <h5 className="text-blue main-font text-uppercase mb-2">
                    Origins E-sport
                  </h5>
                  <p className="text-capitalize">Currently in development</p>
                </div>
              </div>
            </div>
          </div> 
        </div> */}
    </section>
  );
}
