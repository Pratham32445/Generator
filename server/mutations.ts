import { auth } from "@clerk/nextjs/server";
import { db } from "./db/drizzle";
import { YoutubeChannels } from "./db/schema";

export const addChannel = async (name: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not Authenticated");
  }

  const res = await db.insert(YoutubeChannels).values({
    name,
    userId,
  });

  console.log(res);
};
