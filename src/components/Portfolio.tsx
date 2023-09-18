import Cards from "./Cards";

type Props = {
  portfolio: Portfolio[];
};

function Portfolio({ portfolio }: Props) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 xl:px-0 h-screen snap-center">
      <section>
        <h2 className="title-home title-numbered">
          Some Things I&apos;ve Built
        </h2>
        {/* Headlines */}
      </section>
      <section>
        {/* fiz after creating headlines section */}
        {/* <h3>sub section</h3> */}
        {/* Cards */}
        <Cards portfolio={portfolio}/>
      </section>
    </section>
  );
}

export default Portfolio;
