import React from "react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const VideoCard = () => {
  return (
    <Card className="w-1/4 h-72 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <CardHeader className="relative h-2/3">
        <Image
          alt="image"
          src="/image.jpeg"
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"  
        />
      </CardHeader>
      <CardFooter className="mt-5 flex items-start">
        <div>
          <p className="text-left">Card Content</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
