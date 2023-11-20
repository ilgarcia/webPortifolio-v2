import BoxesContainer from "@/components/blogBanner/BoxesContainer";

function BlogBanner() {
  return (
    <section className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <BoxesContainer />
    </section>
  );
}

export default BlogBanner;
