// Packages

// Components
import Carousel from "../components/Carousel";

export default function Project() {
  return (
    <section
      className="flex min-h-screen flex-col justify-center font-alt"
      id="project"
    >
      <div>
        <h2 className="block font-main text-xl uppercase text-light">
          <span className="block uppercase text-primary"> Portfolio </span>
          <span> of my projects </span>
        </h2>
      </div>

      <Carousel />
    </section>
  );
}
