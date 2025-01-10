"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db/drizzle";
import { YoutubeChannels } from "./db/schema";
import { and, eq } from "drizzle-orm";

export const addChannel = async (name: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not Authenticated");
  }

  const res = await db
    .insert(YoutubeChannels)
    .values({
      name,
      userId,
    })
    .returning();

  return res[0];
};

export const removeChannel = async (Id: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not Authenticated");
  }
  const channel = await db
    .delete(YoutubeChannels)
    .where(and(eq(YoutubeChannels.Id, Id), eq(YoutubeChannels.userId, userId)))
    .returning();

  console.log(channel);
};
