import { RubberTitle } from "../Ui/RubberTitles";
import BoxesContainer from "./BoxesContainer";

function Banner() {
  return (
    <section className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="relative flex flex-col items-center z-10">
        <RubberTitle title={"My Code Journal"} />
        <p className="font-fira text-base sm:text-lg lg:text-xl text-slate-400">
          A sample of my ideas and creations
        </p>
      </div>
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <BoxesContainer />
    </section>
  );
}

export default Banner;
