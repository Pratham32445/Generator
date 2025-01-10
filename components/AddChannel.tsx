import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AddChannel = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Input placeholder="Add Channel Name" className="border-neutral-500 outline-none"/>
        <Button>+Add</Button>
      </div>
      <p className="my-10">Saved Channels</p>
      <div className="h-[300px]">
        <p className="text-center mt-[100px]">Loading...</p>
      </div>
    </div>
  );
};

export default AddChannel;
