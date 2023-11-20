"use client";

import { motion as m, useCycle } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import HoverEffect from "./HoverEffect";

type Props = {
  portfolio: Portfolio[];
};

function PortfolioGrid({ portfolio }: Props) {
  const [showMore, toggleShowMore] = useCycle(false, true);

  return (
    <section id="moreProjects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {portfolio.slice(0, showMore ? 11 : 6).map((project, id) => (
          <PortfolioCard key={id} project={project} id={id} />
        ))}
        {(portfolio.length  > 11 && showMore) && <HoverEffect id={12}>Teste</HoverEffect>}
      </div>

      {portfolio.length > 6 && (
        <div>
          <button onClick={() => toggleShowMore()}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
}

export default PortfolioGrid;
