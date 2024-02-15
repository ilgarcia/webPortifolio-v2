"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { groq } from "next-sanity";

import PortfolioGrid from "./PortfolioGrid";
import Posts from "./PostGrid";

import { client } from "../../../sanity/lib/client";

import * as Tb from "@radix-ui/react-tabs";

// const queryPortfolio = groq`
//   *[_type=='portfolio']{
//     ...,
//     appType->,
//     skill[]->,
//     post[]->,
//   } | order(_createdAt desc)
// `;

// const queryPosts = groq`
//   *[_type=='post']{
//     ...,
//     category->,
//     skill[]->,
//     post[]->,
//     portfolio[]->,
//   } | order(_createdAt desc)
// `;

type Props = {
  portfolio: Portfolio[];
  posts: Post[];
};

function Tabs({ portfolio, posts }: Props) {
  const searchParams = useSearchParams();
  const tabName = searchParams.get("tab") || "posts";

  // const [portfolio, setPortfolio] = useState([]);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await client.fetch(queryPortfolio).then((data) => setPortfolio(data));
  //     await client.fetch(queryPosts).then((data) => setPosts(data));
  //   };

  //   fetchData();
  // });

  return (
    <Tb.Root
      className="relative max-w-7xl min-h-[80vh] mx-auto  z-20"
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
          className="relative flex justify-center w-full py-4 text-center text-slate-200 [&_.divLine]:data-[state=active]:opacity-50 [&_.divLine]:data-[state=active]:scale-110 [&_.divLine]:data-[state=inactive]:opacity-0 [&_.divLine]:data-[state=inactive]:scale-0 [&_.tabText]:data-[state=active]:hover:animate-wiggle [&_.tabText]:data-[state=inactive]:text-slate-400 [&_.tabText]:data-[state=inactive]:hover:text-slate-200 [&_.tag]:data-[state=active]:translate-x-2 [&_.tag]:data-[state=inactive]:translate-x-0 [&_.tag]:data-[state=inactive]:hover:translate-x-2 [&_.tagSlash]:data-[state=active]:opacity-0 [&_.tagSlash]:data-[state=inactive]:opacity-100 [&_.tagSlash]:data-[state=inactive]:hover:opacity-0"
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
          className="relative flex justify-center w-full py-4 text-center text-slate-200 [&_.divLine]:data-[state=active]:opacity-50 [&_.divLine]:data-[state=active]:scale-110 [&_.divLine]:data-[state=inactive]:opacity-0 [&_.divLine]:data-[state=inactive]:scale-0 [&_.tabText]:data-[state=active]:hover:animate-wiggle [&_.tabText]:data-[state=inactive]:text-slate-400 [&_.tabText]:data-[state=inactive]:hover:text-slate-200 [&_.tag]:data-[state=active]:translate-x-2 [&_.tag]:data-[state=inactive]:translate-x-0 [&_.tag]:data-[state=inactive]:hover:translate-x-2 [&_.tagSlash]:data-[state=active]:opacity-0 [&_.tagSlash]:data-[state=inactive]:opacity-100 [&_.tagSlash]:data-[state=inactive]:hover:opacity-0"
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
      <Tb.Content className="" value="posts">
        <Posts posts={posts} />
      </Tb.Content>
      <Tb.Content className="" value="portfolio">
        <PortfolioGrid portfolio={portfolio} />
      </Tb.Content>
    </Tb.Root>
  );
}

export default Tabs;
