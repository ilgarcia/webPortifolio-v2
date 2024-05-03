"use client";

import PortfolioCard from "./PortfolioCard";

type Props = {
  portfolio: Portfolio[];
};

function PortfolioGrid({ portfolio }: Props) {
  console.log(portfolio);

  return (
    <section id="moreProjects" className="pt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {portfolio.map((project, id) => (
          <div key={id}>
            <PortfolioCard key={id} project={project} id={id} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioGrid;
