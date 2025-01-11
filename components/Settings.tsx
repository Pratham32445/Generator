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
import { addChannelForUser, removeChannelForUser } from "@/server/mutations";
import { getChannels } from "@/server/queries";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

const Settings = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [channels, setChannels] = useState<any[]>([]);
  const [newChannel, setNewChannel] = useState("");

  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    const userChannels = await getChannels();
    setChannels(userChannels);
  };

  const addNewChannel = async () => {
    const channel = await addChannelForUser(newChannel);
    if (channel) setChannels([...channels, channel]);
  };

  const removeChannel = async (Id : string) => {
    const removed_channels = await removeChannelForUser(Id);
    if(removed_channels) {
      const new_channels = channels.filter((channel) => channel.Id != removed_channels.Id)
      setChannels(new_channels);
    }
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
        <div>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Add Channel Name"
              className="border-neutral-500 outline-none"
              onChange={(e) => setNewChannel(e.target.value)}
            />
            <Button onClick={addNewChannel}>+Add</Button>
          </div>
          <p className="my-10">Saved Channels</p>
          <ScrollArea className="h-[300px]">
            {channels.length > 0 ? (
              <div>
                {channels.map(({ name, Id }, idx) => (
                  <div key={idx} className="p-5 border my-2">
                    <div className="flex items-center justify-between">
                      <p>{name}</p>
                      <X
                        onClick={() => removeChannel(Id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center mt-[100px]">Loading...</p>
            )}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
