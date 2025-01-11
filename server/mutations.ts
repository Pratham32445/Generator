"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db/drizzle";
import { YoutubeChannels } from "./db/schema";
import { and, eq } from "drizzle-orm";

export const addChannelForUser = async (channelName: string) => {
  const { userId } = await auth();

  if (!userId) throw new Error("user not authenticated");

  const [new_channel] = await db
    .insert(YoutubeChannels)
    .values({
      name: channelName,
      userId,
    })
    .returning();

  return new_channel;
};

export const removeChannelForUser = async (Id: string) => {
  const { userId } = await auth();
  if (!userId) throw new Error("User Not Authenticated");
  const [removed_channel] = await db
    .delete(YoutubeChannels)
    .where(and(eq(YoutubeChannels.Id, Id), eq(YoutubeChannels.userId, userId))).returning();
  return removed_channel
};
