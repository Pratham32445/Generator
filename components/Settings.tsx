"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getUserChannles } from "@/server/queries";
import AddChannel from "./AddChannel";
import { useEffect } from "react";

const Settings = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    const channels = await getUserChannles();
    console.log(channels);
  };

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-red-600">
            Add New Channel
          </DialogTitle>
        </DialogHeader>
        <AddChannel />
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
