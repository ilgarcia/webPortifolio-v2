import Image from "next/image";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { HiArrowCircleLeft } from "react-icons/hi";

import { client } from "../../../../../../sanity/lib/client";
import { RichTextBlog } from "../../../../../components/Posts/RichTextBlog";
import Socials from "../../../../../components/Socials/Socials";
import Contacts from "../../../../../components/Contacts/Contacts";

import Link from "next/link";
import { urlForImage } from "../../../../../../sanity/lib/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    category->,
    skill[]->,
    post[]->{
      ...,
      category->
    },
  }
  `;

  const post: Post = await client.fetch(query, { slug });

  if (!post) {
    return null;
  }

  return (
    <>
      <article className="max-w-6xl pt-20 mx-auto">
        <section className="w-full mt-10 px-4 py-6 bg-slate-900 rounded-lg relative overflow-x-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <Image
              className="object-cover object-center mx-auto"
              src={urlForImage({ ...post.mainImage }).url()}
              alt={"teste"}
              fill
            />
          </div>
          <div className="text-3xl font-semibold">{post.title}</div>
          <div className="flex flex-wrap max-w-4xl space-x-2 mt-2">
            {post.skills?.map((skill) => (
              <span
                className="bg-indigo-500 text-xs font-fira  rounded-full py-0.5 px-2"
                key={skill._id}
              >
                {skill.title}
              </span>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 flex justify-end text-xs font-fira text-slate-400/70 uppercase">
            <div>{post.category.title}&nbsp;-&nbsp;</div>
            <div>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>
        </section>
        <section className="flex justify-end max-w-6xl mt-4 mb-6 mx-auto px-4">
          <Link
            href="/blog?tab=posts"
            className="flex items-center gap-1 hover:underline hover:decoration-orange-400 hover:decoration-2"
          >
            <HiArrowCircleLeft className="text-2xl text-orange-400" />
            See more posts
          </Link>
        </section>
        <section className="flex flex-col gap-5 max-w-5xl px-2 mx-auto font-light">
          <PortableText value={post.body} components={RichTextBlog} />
        </section>
      </article>
      <section className="max-w-6xl pt-20 mx-auto">
        <h2 className="mb-6 text-4xl w-full border-b-2 border-orange-400">
          Related posts
        </h2>
        <section className="grid grid-cols-3 gap-4 ">
          {post.post?.map((p) => (
            <a
              href={`/blog/post/${p.slug.current}`}
              key={p._id}
              className="w-full rounded-lg p-4 relative overflow-hidden border border-gray-800 shadow-xl hover:brightness-125"
            >
              <div className="absolute inset-px bg-gradient-to-br from-slate-950 to-slate-800 -z-10" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <div className="flex text-xs font-fira text-slate-400/70 uppercase">
                {p.category?.title}&nbsp;-&nbsp;
                {new Date(p._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </a>
          ))}
        </section>
      </section>
      <Contacts />
      <Socials />
    </>
  );
}

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  {
    slug
  }
  `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

// export const revalidate = 60 * 60 * 24; // revalidate this page every 1 day
export const revalidate = 60; // revalidate this page every 60 seconds
