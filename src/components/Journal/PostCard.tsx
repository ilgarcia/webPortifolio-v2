import Image from "next/image";
import Link from "next/link";

import { BiCaretRight } from "react-icons/bi";
import { urlForImage } from "../../../sanity/lib/image";

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <Link
      href={`/journal/post/${post.slug.current}`}
      className="group relative rounded-xl w-full p-3 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-slate-800 hover:border-slate-700 group-hover:border-slate-700 h-96 "
    >
      <div className="relative h-full w-full">
        <div className="px-3 pt-1">
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
          <h2 className="text-2xl mb-2 text-slate-200  font-semibold">
            {post.title}
          </h2>
        </div>

        <div className="absolute left-0 bottom-2 w-full h-44 rounded-lg overflow-hidden">
          <div className="relative z-10 w-full h-full bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]" />
          <Image
            src={urlForImage({ ...post.mainImage }).url()}
            alt={post.mainImage.alt}
            fill
            className="object-cover transition-all duration-1000  group-hover:scale-110"
          />
        </div>
      </div>
      <Link
        href={`/journal/post/${post.slug.current}`}
        className="absolute bottom-3 right-2 flex transition-all duration-300 opacity-0 group-hover:opacity-100 hover:brightness-125 hover:shadow-md hover:shadow-indigo-500/60 justify-center items-center gap-3 bg-slate-900 border border-indigo-500 w-fit pl-4 pr-2 py-1 rounded-md font-semibold z-10"
      >
        Read Post
        <BiCaretRight className="text-xl" />
      </Link>
    </Link>
  );
}

export default PostCard;
