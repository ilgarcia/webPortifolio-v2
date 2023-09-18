import Image from "next/image";

function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center max-w-6xl mx-auto h-screen snap-center px-4 xl:px-0"
    >
      <h2 className="title-home title-numbered">About Me</h2>
      <div className="relative corners bg-theme-dark rounded-lg p-8 max-w-3xl mx-auto">
        <div className="flex flex-col leading-6 gap-4 ">
          <p>
            Hello! My name is Igor, my interest in web development started back
            in 2018 when I decided to start my own company. I&apos;ve always
            been someone who has both a creative and a logical side and i
            realized it would be the perfect fit if i could use my creative side
            to design and my logical side to code.
          </p>
          <p>
            Well-organized person, problem solver, independent employee with
            high attention to detail. I want to keep learning, continue
            challenging myself, and do interesting things that matter.
          </p>
          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
        </div>
        <ol className="grid grid-cols-2 mt-5 gap-x-3">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>WordPress</li>
        </ol>
      </div>
    </section>
  );
}

export default AboutMe;
