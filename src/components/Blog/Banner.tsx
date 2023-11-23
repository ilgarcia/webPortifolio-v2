import BoxesContainer from "@/components/Blog/BoxesContainer";

function Banner() {
  return (
    <section className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <BoxesContainer />
    </section>
  );
}

export default Banner;
