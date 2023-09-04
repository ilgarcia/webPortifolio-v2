"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

const socials = {
  email: "limagarcia.igor@gmail.com",
  github: "https://github.com/ilgarcia",
  linkedin: "https://www.linkedin.com/in/ilgarcia/",
  resume: "/resume.pdf",
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contacts() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:limagarcia.igor@gmail.com?subject=${formData.subject}&body=hi, my name is ${formData.name} ${formData.message} (${formData.email})`;
  };

  return (
    <section className="flex flex-col items-center justify-center relative h-screen max-w-6xl w-full mx-auto px-12 xl:px-0">
      <div className="relative top-6 font-semibold text-6xl opacity-10 z-10">
        CONTACT ME
      </div>
      <h2 className="font-semibold text-3xl mt-0">CONTACT ME</h2>
      <div className="mt-20 grid lg:grid-cols-3 lg:items-center lg:justify-items-end gap-10 lg:gap-4">
        <div className="text-center">
          <p className="max-w-md mx-auto leading-6 ">
            I&apos;m currently looking for a new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>

          <ul className="flex justify-center text-orange-400 mt-8 text-2xl">
            <li className="mx-4 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
              <a
                href={socials.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <FiGithub />
              </a>
            </li>
            <li className="mx-4 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
              <a
                href={socials.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </li>
            <li className="mx-4 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125">
              <a
                href={socials.resume}
                aria-label="Resume"
                target="_blank"
                rel="noopener noreferrer"
                title="Curriculum"
              >
                <FiFileText />
              </a>
            </li>
          </ul>
          <p className="mx-4 mt-4">{socials.email}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-outo lg:col-span-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-orange-400 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
