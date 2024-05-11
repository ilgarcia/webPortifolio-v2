import Image from "next/image";
import { HeroCanvas } from "./HeroCanvas";

function BgLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_0%,_#268CF530_10%,_#268CF500_100%)] -z-30" />
      <Image
        src={"./bg-hero.svg"}
        alt={"background introduction"}
        className="object-cover -z-40 filter blur-xl"
        fill
        sizes="100%"
      />
      <HeroCanvas className="absolute top-0 left-0  w-full h-full -z-20 animate-surge" />
    </>
  );
}

export default BgLayout;
