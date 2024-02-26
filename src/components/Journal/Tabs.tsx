"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import PortfolioGrid from "./PortfolioGrid";
import Posts from "./PostGrid";

import * as Tb from "@radix-ui/react-tabs";

type Props = {
  portfolio: Portfolio[];
  posts: Post[];
};

function Tabs({ portfolio, posts }: Props) {
  const searchParams = useSearchParams();
  const tabName = searchParams.get("tab") || "posts";

  return (
    <Suspense>
      <Tb.Root
        className="relative max-w-7xl min-h-[60vh] mx-auto  z-20"
        defaultValue={tabName}
      >
        <Tb.List
          className="relative mt-6 flex justify-between items-center max-w-4xl mx-auto text-2xl font-medium font-fira"
          aria-label="Manage your account"
        >
          <Image
            src="/divLine.svg"
            alt="divLine"
            width={25}
            height={85}
            className="relative left-1/2 top-1/2 w-10"
          />
          <Tb.Trigger
            className="relative flex justify-center w-full py-4 text-center tabTrigger"
            value="posts"
          >
            <Image
              src="/blogHyperline.svg"
              alt="divLine"
              width={160}
              height={38}
              className="divLine absolute left-1/2 -translate-x-1/2 -translate-y-1/4 transition-all duration-500"
            />
            <div className="group tabText relative bottom-0 w-fit transition-all duration-300">
              <span className="tag absolute -left-6 transition-all duration-300 delay-200 text-slate-400">
                &#60;
              </span>
              <span className="tagSlash text-xl absolute -left-3 transition-all duration-300 text-slate-400">
                /
              </span>
              Blog
              <span className="text-slate-400 ">&#62;</span>
            </div>
          </Tb.Trigger>
          <Tb.Trigger
            className="relative flex justify-center w-full py-4 text-center tabTrigger"
            value="portfolio"
          >
            <Image
              src="/blogHyperline.svg"
              alt="divLine"
              width={160}
              height={38}
              className="divLine absolute left-1/2 -translate-x-1/2 -translate-y-1/4 transition-all duration-500"
            />
            <div className="group tabText relative bottom-0 w-fit transition-all duration-300">
              <span className="tag absolute -left-6 transition-all duration-300 delay-200 text-slate-400">
                &#60;
              </span>
              <span className="tagSlash text-xl absolute -left-3 transition-all duration-300 text-slate-400">
                /
              </span>
              Portfolio
              <span className="text-slate-400 ">&#62;</span>
            </div>
          </Tb.Trigger>
        </Tb.List>
        <Tb.Content className="mx-4 mt-4" value="posts">
          <Posts posts={posts} />
        </Tb.Content>
        <Tb.Content className="mx-4 mt-4" value="portfolio">
          <PortfolioGrid portfolio={portfolio} />
        </Tb.Content>
      </Tb.Root>
    </Suspense>
  );
}

export default Tabs;
