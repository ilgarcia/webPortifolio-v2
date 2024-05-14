import Link from "next/link";

const LogoNeon = () => {
  return (
    <div className="text-2xl lg:text-3xl font-neon drop-shadow-neon">
      <Link rel="preload" href="/#hero">
        <span>L</span>
        <span className="ml-0.5 text-orange-400 animate-neonBrokenLights">
          .
        </span>
        <span>Garc</span>
        <span className="animate-neonBrokenLights">ia</span>
      </Link>
    </div>
  );
};

export { LogoNeon };
