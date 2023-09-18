import WorkExperienceCard from "@/components/WorkExperienceCard";

function WorkExperience() {
  return (
    <section className="max-w-6xl mx-auto px-4 xl:px-0 h-screen snap-center">
      <h2 className="title-home title-numbered">Work Experience</h2>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <WorkExperienceCard />
        <WorkExperienceCard />
        <WorkExperienceCard />
      </div>
    </section>
  );
}

export default WorkExperience;
