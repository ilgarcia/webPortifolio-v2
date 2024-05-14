import Image from "next/image";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { HiArrowCircleLeft } from "react-icons/hi";

import { client } from "../../../../../sanity/lib/client";
import { RichTextBlog } from "../../../../components/Journal/RichTextBlog";
import { SocialIcons } from "../../../../components/Ui/SocialLinks";
import Contacts from "../../../../components/Contacts/Contacts";

import Link from "next/link";
import { urlForImage } from "../../../../../sanity/lib/image";
import { RubberTitle } from "../../../../components/Ui/RubberTitles";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='portfolio' && slug.current == $slug][0]
  {
    ...,
    appType->,
    skill[]->,
  }
  `;

  const portfolio: Portfolio = await client.fetch(query, { slug });

  if (!portfolio) {
    return null;
  }

  return (
    <section className="px-4">
      <article className="max-w-5xl pt-20 mx-auto">
        <section className="relative rounded-2xl ml-14 mb-2 px-5 py-2 bg-slate-900/75 hover:bg-slate-900 before:absolute before:block before:bottom-0 before:-left-8 before:w-6 before:h-8 before:border-l-4 before:border-t-4 before:border-slate-900 ">
          <div className="text-3xl font-semibold">
            Titulo
            {/* {post.title} */}
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 rounded-2xl overflow-hidden">
            {/* <Image
              className="object-cover object-center mx-auto"
              src={urlForImage({ ...post.mainImage }).url()}
              alt={"teste"}
              fill
            /> */}
          </div>
          <div className="flex flex-wrap max-w-4xl space-x-2 mt-2">
            skills
            {/* {post.skill?.map((data) => (
              <span
                className="relative z-10 border border-indigo-500 hover:shadow hover:shadow-indigo-500 text-xs font-fira font-semibold rounded py-0.5 px-2"
                key={data._id}
              >
                {data.title}
              </span>
            ))} */}
          </div>
          <div className="absolute bottom-2 right-5 flex justify-end text-xs font-fira text-slate-400/70 uppercase">
            <div>
              App type
              {/* {post.category.title}&nbsp;-&nbsp; */}
            </div>
            <div>
              Data
              {/* {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })} */}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5 max-w-5xl mx-auto font-light transition-all duration-300 bg-slate-900/75 hover:bg-slate-900 p-8 rounded-2xl">
          <div className="flex justify-end w-full mx-auto">
            <Link
              href="/journal"
              className="flex items-center gap-1 hover:underline hover:decoration-orange-400 hover:decoration-2"
            >
              <HiArrowCircleLeft className="text-2xl text-orange-400" />
              See more posts
            </Link>
          </div>
          Textos
          {/* <PortableText value={post.body} components={RichTextBlog} /> */}
        </section>
      </article>
      {/* {post.post && (
        <section className="max-w-5xl pt-20 mx-auto">
          <RubberTitle elementType={"h2"} title={"Related posts"} />
          <p className="mt-2 mb-6 text-slate-400 text-lg pl-3 border-l-4 border-solid border-indigo-500">
            You can also like to read one of the posts bellow.
          </p>
          <section className="grid grid-cols-3 gap-4 ">
            {post.post.map((relatedPost) => (
              <RelatedPostCard
                key={relatedPost._id}
                relatedPost={relatedPost}
              />
            ))}
          </section>
        </section>
      )} */}
      <Contacts />
      <SocialIcons />
    </section>
  );
}

export async function generateStaticParams() {
  const query = groq`
  *[_type=='portfolio']
  {
    slug
  }
  `;

  const slugs: Portfolio[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

// export const revalidate = 60 * 60 * 24; // revalidate this page every 1 day
export const revalidate = 60; // revalidate this page every 60 seconds
