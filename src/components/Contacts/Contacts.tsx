"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion as m } from "framer-motion";

import { DynamicIconFi } from "../Ui/DynamicIcon";
import Footer from "../Footer/Footer";
import { socials } from "../../data/constants";
import { SolidIndigoButton } from "../Ui/UIControls";
import { left, right } from "./MotionVariants";

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
    <section id="contact" className="relative lg:h-screen lg:snap-start">
      <Image
        src={"/bg-contacts.svg"}
        alt={"background contacts"}
        className="object-contain object-bottom opacity-10 -z-40"
        fill
        sizes="100%"
      />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_100%,_#268CF530_0%,_#268CF500_40%)] -z-40" />

      <div className="flex flex-col items-center justify-center relative lg:h-screen max-w-6xl w-full mx-auto mt-16 lg:mt-0 px-4 pb-10">
        <h2 className="font-fira text-6xl md:text-8xl tracking-tighter text-slate-800/90 font-medium">
          Contact Me.
        </h2>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="mt-4 lg:mt-10 grid lg:grid-cols-3 lg:items-center lg:justify-items-end gap-10 lg:gap-4"
        >
          <m.div variants={left} className="text-center">
            <p className="max-w-md mx-auto leading-6 ">
              I&apos;m currently looking for a new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>

            <ul className="flex justify-center text-orange-400 mt-8">
              {socials
                .filter((social) => social.showIcon)
                .map((social) => (
                  <li
                    key={social.type}
                    className="mx-3 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125"
                  >
                    <a
                      href={social.link}
                      aria-label={social.title}
                      title={social.title}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {DynamicIconFi(social.icon)}
                    </a>
                  </li>
                ))}
            </ul>
            {socials
              .filter((social) => !social.showIcon)
              .map((social) => (
                <p key={social.type} className="mx-4 mt-4">
                  {social.link}
                </p>
              ))}
          </m.div>
          <m.form
            variants={right}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-1.5 md:space-y-2 w-fit mx-outo lg:col-span-2"
          >
            <div className="md:flex md:space-x-2 space-y-1.5 md:space-y-0">
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="contactInput w-full"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="contactInput w-full"
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
              className="contactInput h-24 md:h-32"
            />
            <SolidIndigoButton title={"Submit"} />
          </m.form>
        </m.div>
      </div>
      <Footer />
    </section>
  );
}

export default Contacts;
