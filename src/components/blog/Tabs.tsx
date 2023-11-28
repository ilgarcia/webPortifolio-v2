"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import PortfolioGrid from "../portfolio/PortfolioGrid";
import Posts from "../posts/Posts";

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
    <div className="max-w-7xl mx-auto min-h-[80vh] pt-14 px-1 lg:px-4">
      <div className="border-b border-slate-700 mb-10">
        <ul className="flex flex-wrap -mb-px text-lg">
          <li>
            <button
              onClick={() => router.push(pathname + '?' + createQueryString('tab', 'posts'))}
              className={`min-w-[128px] inline-block rounded-t-lg py-2.5 px-4 font-medium text-center border-b-2 ${
                tabName === "posts"
                  ? "bg-orange-400/20 text-orange-400 border-orange-400"
                  : "text-slate-200 border-transparent hover:text-orange-400/80 hover:border-orange-400/50"
              }`}
            >
              Posts
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push(pathname + '?' + createQueryString('tab', 'portfolio'))}
              className={`min-w-[128px] inline-block rounded-t-lg py-2.5 px-4 font-medium text-center  border-b-2 ${
                tabName === "portfolio"
                  ? "bg-orange-400/20 text-orange-400 border-orange-400"
                  : "text-slate-200 border-transparent hover:text-orange-400/80 hover:border-orange-400/50"
              }`}
            >
              Portfolio
            </button>
          </li>
        </ul>
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
