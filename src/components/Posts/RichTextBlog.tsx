import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "../../../sanity/lib/image";

export const RichTextBlog = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-80 mx-auto">
          <Image
            src={urlForImage(value).url()}
            alt="Blog Post Image"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      );
    },
    // code:({ children }: any)=><pre><code>{children}</code></pre>
  },
  list: {
    bullet: ({ children }: any) => <ol>{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => <h1 className="font-semibold text-3xl">{children}</h1>,
    h2: ({ children }: any) => <h2 className="font-semibold text-3xl">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-semibold text-3xl">{children}</h3>,
    h4: ({ children }: any) => <h4 className="font-semibold text-3xl">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="my-5 p-5 border-l-4 border-solid border-theme-orange">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      // const rel = !value.href.starsWith("/")
      //   ? "noreferrer noopener"
      //   : undefined;

      const rel = undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-bold underline decoration-2 decoration-orange-400 hover:decoration-indigo-500"
        >
          {children}
        </Link>
      );
    },
  },
};
