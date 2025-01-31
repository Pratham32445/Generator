import { Button } from "@/components/ui/button";
import React from "react";
import { CircleCheckBig } from "lucide-react";

const Data = ["AI-Povered", "Instant Results", "Free to Try"];

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-7xl text-center font-bold">
          Transoform Your Youtube <br />{" "}
          <span className="text-red-700">Content Startegy</span>
        </h1>
        <p className="text-center text-md text-neutral-500">
          Generate Fresh engagin ideas for youtube channel in seconds. <br />{" "}
          Never run out of content again
        </p>
        <div className="flex items-center gap-4">
          <Button className="p-6 px-10 bg-red-600 text-white hover:bg-red-800">
            Get Started Free
          </Button>
          <p>No credit card required</p>
        </div>
        <div>
          <div className="flex gap-8 items-center mt-10">
            {Data.map((name, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CircleCheckBig />
                <p className="text-white">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
