import Image from "next/image";
import { BiCaretRight } from "react-icons/bi";
import { urlForImage } from "../../../sanity/lib/image";

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <a
      href={`/blog/post/${post.slug.current}`}
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
            {post.title} esse é um teste de texto para ver qual a melhor
            aaaaaaa.
          </h2>
        </div>

        <div className="absolute left-0 bottom-2 w-full h-44 ">
          <Image
            src={urlForImage({ ...post.mainImage }).url()}
            alt={post.mainImage.alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <a
        href={`/blog/post/${post.slug.current}`}
        className="absolute bottom-3 right-2 flex transition-all duration-300 opacity-0 group-hover:opacity-100 hover:brightness-125 hover:shadow-md hover:shadow-indigo-500/60 justify-center items-center gap-3 bg-slate-900 border border-indigo-500 w-fit pl-4 pr-2 py-1 rounded-md font-semibold z-10"
      >
        Read Post
        <BiCaretRight className="text-xl" />
      </a>
    </a>
  );
}

export default PostCard;
