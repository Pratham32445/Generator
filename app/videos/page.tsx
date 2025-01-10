import { Button } from "@/components/ui/button";
import VideoCard from "@/components/VideoCard";
import React from "react";

const Videos = () => {
  return (
    <div className="max-w-7xl m-auto mt-[20px]">
      <div className="flex justify-between">
        <p className="text-3xl font-bold">Videos</p>
        <Button className="bg-red-500 to-red-400 px-10 py-5 hover:bg-red-500">
          Scrape
        </Button>
      </div>
      <div className="mt-[30px]">
        <div className="flex justify-center flex-wrap gap-20">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default Videos;
