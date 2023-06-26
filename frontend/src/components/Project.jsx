import Carousel from "./Carousel";

export default function Project() {
  return (
    <section
      className="flex h-screen flex-col justify-center gap-8 font-alt"
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
