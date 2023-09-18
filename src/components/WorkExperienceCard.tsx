function WorkExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600]xl:w-[900px] py-6 snap-center bg-slate-900 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
      <div className="px-0 md:px-10">
        <h3 className="text-4xl font-light">Cargo</h3>
        <p className="font-bold text-2xl mt-1">Empresa</p>
        <p className="uppercase py-5 ">Started work... - Ended...</p>
        <ol>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ol>
      </div>
    </article>
  );
}

export default WorkExperienceCard;
