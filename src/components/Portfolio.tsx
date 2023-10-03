import Cards from "./Cards";

type Props = {
  portfolio: Portfolio[];
};

function Portfolio({ portfolio }: Props) {
  const title = "Portfolio & Previous Projects";

  return (
    <section
      id="projects"
      className="px-4 xl:px-0 h-screen snap-center flex items-center relative"
    >
      <h2 className="absolute -rotate-90 bottom-1/2 translate-y-1/2 -translate-x-1/2 left-14 font-fira text-9xl tracking-tighter text-slate-800/90 font-medium">
        Portfolio.
      </h2>
      <div className="w-screen overflow-hidden py-4">
        <div className="w-[300vw] flex ">
          {/* -translate-x-1/3 */}
          <div className="w-screen">
            <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
              <h2 className="text-6xl max-w-xl font-bold leading-10 flex flex-wrap justify-center">
                {title.split(" ").map((word, idW) => (
                  <div key={idW} className="cursor-pointer flex mr-5 mb-4">
                    {word.split("").map((character, idC) => (
                      <span
                        key={idC}
                        className="hover:text-orange-400 hover:animate-rubberBand hover:duration-1000"
                      >
                        {character}
                      </span>
                    ))}
                  </div>
                ))}
              </h2>
              <p className="max-w-lg text-center">
                I have built various different projects to fit different aspects
                of the client&apos;s business. If you want to see more examples
                of my work than the ones showcased in this site, please contact
                me!
              </p>
              <a href="#">Link Para portfolios</a>
            </div>
          </div>
          <div className="w-screen">
            <div className="max-w-7xl mx-auto">teste2</div>
          </div>
          <div className="w-screen">
            <div className="max-w-7xl mx-auto">teste3</div>
          </div>
        </div>
      </div>
      <div className="absolute z-30 flex items-center space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button className="w-2 h-2 rounded-full bg-slate-700 scale-[1.75]" />
        <button className="w-2 h-2 rounded-full bg-slate-700 hover:scale-125" />
        <button className="w-2 h-2 rounded-full bg-slate-700 hover:scale-125" />
      </div>

      {/* <section> */}
      {/* Passar para pagina de Blog */}
      {/* <h3>sub section</h3> */}
      {/* Cards */}
      {/* <Cards portfolio={portfolio}/> */}
      {/* </section> */}
    </section>
  );
}

export default Portfolio;
