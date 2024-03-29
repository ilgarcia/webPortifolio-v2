import { FiGithub, FiExternalLink, FiLink } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";

import HoverEffect from "./HoverEffect";

type Props = {
  project: Portfolio;
  id: number;
};

function PortfolioCard({ project, id }: Props) {
  return (
    <HoverEffect id={id}>
      <div className="flex justify-between items-center mb-3">
        <div className="text-5xl text-orange-400">
          <CiFolderOn />
        </div>
        <div className="flex items-center space-x-5 text-xl">
          {project.githubLink && (
            <a href={project.githubLink} className="hover:text-orange-400">
              <FiGithub />
            </a>
          )}
          {project.externalLink && (
            <a href={project.externalLink} className="hover:text-orange-400">
              <FiExternalLink />
            </a>
          )}
          {project.post?.slug && (
            <a href={""} className="hover:text-orange-400">
              <FiLink />
            </a>
          )}
        </div>
      </div>
      <h4 className="text-orange-400 text-xl font-bold tracking-wide ">
        {project.title}
      </h4>
      <p className="mt-2 tracking-wide text-sm">{project.description}</p>
      <div className="absolute bottom-6 left-6 flex flex-wrap space-x-4 font-fira tracking-wide leading-relaxed text-xs">
        {project.skill?.map((data) => (
          <div key={data._id}>{data.title}</div>
        ))}
      </div>
    </HoverEffect>
  );
}

export default PortfolioCard;
