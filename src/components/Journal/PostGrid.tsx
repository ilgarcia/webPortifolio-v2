// "use client";

import { useState } from "react";
import { Variants, motion as m } from "framer-motion";
import { usePagination } from "@mantine/hooks";


import { postImage } from "./Variants";
import { HoverRightIndigoLink } from "../Ui/UIControls";
import Pagination from "../Ui/Pagination";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

// const arrowVariant: Variants = {
//   hoverIn: {
//     x: 5,
//     transition: {
//       repeat: Infinity,
//       repeatType: "reverse",
//       duration: 0.5,
//     },
//   },
//   hoverOut: { x: 0 },
// };

function Posts({ posts }: Props) {
  // const itemsPerPage = 9;

  // const [visiblePosts, setVisiblePosts] = useState(
  //   posts.slice(0, itemsPerPage)
  // );

  // const total = Math.ceil(posts.length / itemsPerPage);
  // const pagination = usePagination({
  //   total,
  //   initialPage: 1,
  //   onChange(page) {
  //     const start = (page - 1) * itemsPerPage;
  //     const end = start + itemsPerPage;
  //     setVisiblePosts(posts.slice(start, end));
  //   },
  // });

  return (
    <section className="mt-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-5 ">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}/>
        ))}
      </section>
      {/* <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-7 max-w-6xl 2xl:max-w-7xl mx-auto px-1 lg:px-20 xl:px-4">
        {visiblePosts.map((post) => (
          <m.div
            key={post._id}
            initial="hoverOut"
            whileHover="hoverIn"
            animate="hoverOut"
            className="h-56"
          >
            <a
              href={`/blog/post/${post.slug.current}`}
              className="relative flex items-center h-full"
            >
              <div className="absolute inset-px xs:left-3 xs:right-0.5 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] -z-50" />
              <div className="max-w-[145px] w-full h-[85%] relative overflow-hidden hidden xs:block">
                <m.div variants={postImage} className="w-full h-full">
                  <Image
                    src={urlForImage({ ...post.mainImage }).url()}
                    alt={post.mainImage.alt}
                    fill
                    sizes="100%"
                    className="object-cover "
                  />
                </m.div>
              </div>
              <div className="w-full h-full p-6 xs:p-4 relative">
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
                <div className="absolute bottom-5 right-5 w-fit">
                  <HoverRightIndigoLink
                    link={`/blog/post/${post.slug.current}`}
                    title={"Read More"}
                    initial={false}
                  />
                </div>
              </div>
              <div className="absolute inset-px xs:left-3 xs:right-0.5 border border-indigo-400/30" />
            </a>
          </m.div>
        ))}
      </section> */}
      {/* {pagination.range.length > 1 && <Pagination pagination={pagination} />} */}
    </section>
  );
}

export default Posts;
