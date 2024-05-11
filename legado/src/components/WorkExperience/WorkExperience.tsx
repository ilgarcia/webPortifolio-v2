import Accordion from "./Accordion";

type Props = {
  experience: WorkExperience[];
};

function WorkExperience({ experience }: Props) {
  return (
    <section
      id="experience"
      className="relative flex justify-center items-center lg:h-screen overflow-hidden lg:snap-start"
    >
      <h2 className="absolute -left-6 top-0 lg:top-auto lg:bottom-6 font-fira font-medium text-6xl md:text-8xl tracking-tighter text-slate-800/90 -z-10">
        Work Experience.
      </h2>
      <Accordion experience={experience} />
    </section>
  );
}

export default WorkExperience;
