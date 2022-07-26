import React from "react";
import { useAppSelector } from "../app/hooks";

import FeaturedPostCard from "./FeaturedPostCard";

export default function FeaturedPosts() {
  const { featuredPosts } = useAppSelector((state) => state.blog);

  const firstColumnPosts = featuredPosts.slice(0, 3);
  const secondColumnPosts = featuredPosts.slice(3, 6);
  const thirdColumnPosts = featuredPosts.slice(6, 9);

  return (
    <>
      <div className="pt-8 xl:pt-16 flex-col items-center justify-center  px-4">
        <h1
          role="heading"
          className="text-center text-3xl  md:text-4xl xl:text-5xl font-bold text-gray-800"
        >
          Our Featured Articles
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 mt-4"
        >
          Whether article spirits new her covered hastily sitting her. Money
          witty books nor son
        </p>
        <div className="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-10 xl:pt-14 gap-6">
          <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            {firstColumnPosts.map((post) => (
              <FeaturedPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            {secondColumnPosts.map((post) => (
              <FeaturedPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
            {thirdColumnPosts.map((post) => (
              <FeaturedPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
