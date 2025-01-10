import { Button } from "@/components/ui/button";
import VideoCard from "@/components/VideoCard";
import { getVideoForUser } from "@/server/queries";
import React from "react";
import { TvMinimal } from "lucide-react";

const Videos = async () => {
  const videos = await getVideoForUser();

  if (videos.length == 0) {
    return (
      <div className="flex justify-center mt-[100px]">
        <div className="flex flex-col justify-center items-center">
          <TvMinimal color="#FF4C4C" width={50} height={50} />
          <div className="text-center">
            <p className="mt-[20px] text-2xl font-bold">No Videos yet</p>
            <p className="my-[20px] text-neutral-700">Please Add Youtube channels and then scrape for videos. <br/> Video comments will be analyzed for content ideas</p>
            <Button className="bg-[#FF4C4C] hover:bg-[#fc3232]">Scrape Videos</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl m-auto mt-[20px]">
      <div className="flex justify-between">
        <p className="text-3xl font-bold">Videos</p>
        <Button className="bg-red-500 to-red-400 px-10 py-5 hover:bg-red-500">
          Scrape
        </Button>
      </div>
      <div className="mt-[30px]">
        <div className="flex justify-center flex-wrap gap-20 pb-5">
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
