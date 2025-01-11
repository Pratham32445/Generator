import { auth } from "@clerk/nextjs/server";
import { db } from "./db/drizzle";
import { YoutubeChannels } from "./db/schema";
import { eq } from "drizzle-orm";
import { google } from "googleapis";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

const fetchVideoForChannels = (channelId : string) => {
  
}

const getChannelId = async (name: string) => {
  try {
    const response = await youtube.search.list({
      part: ["snippet"],
      type: ["channel"],
      q: name,
      maxResults: 1,
    });
    return response.data.items?.[0].id?.channelId;
  } catch (error) {
    console.log(error);
  }
};

export const scrapeVideos = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("User Not Authenticated");
  const channels = await db
    .select()
    .from(YoutubeChannels)
    .where(eq(YoutubeChannels.userId, userId));
  if (channels.length == 0) return;
  for (const channel of channels) {
    const channelId = await getChannelId(channel.name);
    if (!channelId) return;
    const fetchVideo = await fetchVideoForChannels(channel.channelId);
  }
};
