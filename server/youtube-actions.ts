import { auth } from "@clerk/nextjs/server";
import { google, youtube_v3 } from "googleapis";
import { db } from "./db/drizzle";
import { YoutubeChannels } from "./db/schema";
import { and, eq } from "drizzle-orm";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

async function getChannelId(channelName: string) {
  const response = await youtube.search.list({
    part: ["snippet"],
    type: ["channel"],
    q: channelName,
    maxResults: 1,
  });
  if (!response) return null;
  return response?.data?.items?.[0]?.id?.channelId;
}

export async function scrapeVideo() {
  const { userId } = await auth();

  if (!userId) throw new Error("User Not authenticated");

  const channels = await db
    .select()
    .from(YoutubeChannels)
    .where(eq(YoutubeChannels.userId, userId));

  if (channels.length == 0) throw new Error("No channels found for this user");

  for (const channel of channels) {
    const channelId = await getChannelId(channel.name);

    if (!channelId) {
      console.error("");
      continue;
    }

    await db
      .update(YoutubeChannels)
      .set({
        channelId,
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(YoutubeChannels.Id, channel.Id),
          eq(YoutubeChannels.userId, userId)
        )
      );
  }
}
