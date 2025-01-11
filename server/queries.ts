"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db/drizzle";
import { Videos, YoutubeChannels } from "./db/schema";
import { eq } from "drizzle-orm";

export const getVideoForUser = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("User Not Authenticated");
  return await db.select().from(Videos).where(eq(Videos.userId, userId));
};

export const getChannels = async () => {
  const { userId } = await auth();

  if (!userId) throw new Error("User Not authenticated");

  return await db
    .select()
    .from(YoutubeChannels)
    .where(eq(YoutubeChannels.userId, userId));
};
