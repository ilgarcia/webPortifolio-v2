"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import PortfolioGrid from "../Portfolio/PortfolioGrid";
import Posts from "../Posts/Posts";

type Props = {
  portfolio: Portfolio[];
  posts: Post[];
};

function Tabs({ portfolio, posts }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabName = searchParams.get("tab");

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="relative max-w-7xl min-h-[80vh] mx-auto -mt-4 z-20">
      <div className="relative mt-10 flex justify-between items-center max-w-4xl mx-auto text-2xl font-medium font-fira ">
        <Image
          src="/divLine.svg"
          alt="divLine"
          width={25}
          height={85}
          className="relative left-1/2 top-1/2 w-10"
        />
        <div className="relative w-full py-4 text-center">
          <Image
            src="/blogHyperline.svg"
            alt="divLine"
            width={160}
            height={38}
            className={`absolute left-1/2  -translate-x-1/2 -translate-y-1/4 transition-all duration-500 ${
              tabName === "posts" ? "opacity-50 scale-110" : "opacity-0 scale-0"
            }`}
          />
          <button
            onClick={() =>
              router.push(pathname + "?" + createQueryString("tab", "posts"))
            }
            className={`group relative bottom-0 transition-all duration-300  ${
              tabName === "posts"
                ? "text-slate-200 hover:animate-wiggle"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span
              className={`absolute -left-6 transition-all duration-300 delay-200 text-slate-400 ${
                tabName === "posts"
                  ? "translate-x-2"
                  : "translate-x-0 group-hover:translate-x-2"
              }`}
            >
              &#60;
            </span>
            <span
              className={`text-xl absolute -left-3 transition-all duration-300 text-slate-400 ${
                tabName === "posts"
                  ? "opacity-0"
                  : "opacity-100 group-hover:opacity-0"
              }`}
            >
              /
            </span>
            Blog
            <span className="text-slate-400 ">&#62;</span>
          </button>
        </div>
        <div className="relative w-full py-4 text-center">
          <Image
            src="/blogHyperline.svg"
            alt="divLine"
            width={160}
            height={38}
            className={`absolute left-1/2  -translate-x-1/2 -translate-y-1/4 transition-all duration-500 ${
              tabName === "portfolio"
                ? "opacity-50 scale-110"
                : "opacity-0 scale-0"
            }`}
          />
          <button
            onClick={() =>
              router.push(
                pathname + "?" + createQueryString("tab", "portfolio")
              )
            }
            className={`group relative bottom-0 transition-all duration-300  ${
              tabName === "portfolio"
                ? "text-slate-200 hover:animate-wiggle"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span
              className={`absolute -left-6 transition-all duration-300 delay-200 text-slate-400 ${
                tabName === "portfolio"
                  ? "translate-x-2"
                  : "translate-x-0 group-hover:translate-x-2"
              }`}
            >
              &#60;
            </span>
            <span
              className={`text-xl absolute -left-3 transition-all duration-300 text-slate-400 ${
                tabName === "portfolio"
                  ? "opacity-0"
                  : "opacity-100 group-hover:opacity-0"
              }`}
            >
              /
            </span>
            Portfolio
            <span className="text-slate-400 ">&#62;</span>
          </button>
        </div>
      </div>

      <div>
        {tabName === "posts" ? (
          <Posts posts={posts} />
        ) : (
          <PortfolioGrid portfolio={portfolio} />
        )}
      </div>
    </div>
  );
}

export default Tabs;
