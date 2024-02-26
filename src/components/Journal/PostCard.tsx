import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "../../../sanity/lib/image";
import { Button } from "../Ui/Button";

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <div className="group relative rounded-xl p-3 w-full h-[22rem] bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-slate-800 hover:border-slate-700 group-hover:border-slate-700">
      <Link
        href={`/journal/post/${post.slug.current}`}
        className="relative inline-block h-full w-full"
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
              sizes="100%"
              className="object-cover transition-all duration-1000  group-hover:scale-110"
            />
          </div>
        </div>
      </Link>
      <Button variant={"indigoNeon"} className="absolute bottom-3 right-2 z-10">
        <Link href={`/journal/post/${post.slug.current}`}>
          Read Post
        </Link>
      </Button>
    </div>
  );
}

export default PostCard;
