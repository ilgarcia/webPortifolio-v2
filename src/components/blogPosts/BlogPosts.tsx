"use client";

import Image from "next/image";
import { Variants, motion as m } from "framer-motion";
import { usePagination } from "@mantine/hooks";
import CanvasBorder from "./CanvasBorder";
import { urlForImage } from "../../../sanity/lib/image";
import { BiCaretRight } from "react-icons/bi";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";

type Props = {
  posts: Post[];
};

const imageVariant: Variants = {
  rest: { scale: 1, transition: { duration: 1 } },
  hover: { scale: 1.15, transition: { duration: 1 } },
};

const arrowVariant: Variants = {
  rest: { x: 0 },
  hover: {
    x: 5,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.5,
    },
  },
};

function BlogPosts({ posts }: Props) {
  const itemsPerPage = 9;

  const [visiblePosts, setVisiblePosts] = useState(
    posts.slice(0, itemsPerPage)
  );

  const total = Math.ceil(posts.length / itemsPerPage);
  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setVisiblePosts(posts.slice(start, end));
    },
  });

  return (
    <section>
      <section className="grid grid-cols-3 gap-7 items-center justify-between max-w-7xl mx-auto">
        {visiblePosts.map((post) => (
          <m.div
            key={post._id}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="h-56"
          >
            <a
              href={`/blog/post/${post.slug.current}`}
              className="relative flex items-center h-full"
            >
              <div className="absolute inset-px left-3 right-0.5 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] -z-50" />
              <div className="max-w-[145px] w-full h-[85%] relative overflow-hidden">
                <m.div variants={imageVariant} className="w-full h-full">
                  <Image
                    src={urlForImage({ ...post.mainImage }).url()}
                    alt={post.mainImage.alt}
                    fill
                    sizes="100%"
                    className="object-cover "
                  />
                </m.div>
              </div>
              <div className="w-full h-full p-4 relative">
                <div className="flex justify-between text-xs font-fira text-slate-400/70 mb-3 uppercase">
                  <div className="tracking-wider">{post.category?.title}</div>
                  <div>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl mb-2 text-slate-200  font-semibold">
                    {post.title}
                  </h2>
                </div>
                <div className="text-slate-200/80 leading-5 font-light">
                  {post.description}
                </div>
                <div className="absolute flex items-center text-indigo-500 text-base font-medium w-fit bottom-5 right-4">
                  <span className="mr-2">Read More</span>
                  <m.span variants={arrowVariant}>
                    <BiCaretRight className="text-xl" />
                  </m.span>
                </div>
              </div>
              <div className="absolute inset-px left-3 right-0.5 border border-indigo-400/30" />
            </a>
          </m.div>
        ))}
      </section>
      {pagination.range.length > 1 && <Pagination pagination={pagination} />}
    </section>
  );
}

export default BlogPosts;
