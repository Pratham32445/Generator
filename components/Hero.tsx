import React from "react";
import { Button } from "./ui/button";
import { CircleCheckBig } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex justify-center mt-[100px]">
      <div>
        <div>
          <p className="capitalize text-7xl text-center bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text font-bold pb-3">
            Transform your youtube <br /> content strategy
          </p>
          <p className="text-2xl text-center my-[20px] text-neutral-600">
            Generate fresh,engaging ideas for your Youtube channel <br /> in
            seconds. Never run out of content again
          </p>
        </div>
        <div className="flex items-center justify-center mt-[10px] gap-5">
          <Button className="px-10 py-6 bg-red-500 to-red-400 hover:bg-red-700">
            Get Started Free
          </Button>
          <p className="text-neutral-800">No credit card required</p>
        </div>
        <div>
          <div className="flex gap-5 justify-center items-center mt-[20px]">
            {["Ai Powered", "Instant Results", "Free to Try"].map(
              (item, id) => (
                <div key={id} className="flex items-center gap-5">
                  <CircleCheckBig color="#FF4C4C" />
                  <p>{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
