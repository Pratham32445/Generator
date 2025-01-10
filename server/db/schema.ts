import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const Videos = pgTable("videos", {
  Id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_Id", { length: 50 }).notNull(),
  videoId: text("video_Id").notNull(),
  description: text("description"),
  publishedAt: timestamp("publisheda_at").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  channelId: text("channel_Id").notNull(),
  channelTitle: text("channel_Id").notNull(),
  viewsCount: integer("view_count").default(0),
  likesCount: integer("view_count").default(0),
  dislikesCount: integer("view_count").default(0),
  commentCount: integer("view_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const YoutubeChannels = pgTable("youtube_channels", {
  Id: uuid("Id").defaultRandom().primaryKey(),
  userId: varchar("user_Id", { length: 50 }).notNull(),
  name: text("name").notNull(),
  channelId: text("channel_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const videoComments = pgTable("video_comments", {
  Id: uuid("Id").defaultRandom().primaryKey(),
  videoId: uuid("video_Id").notNull(),
  userId: varchar("user_id", { length: 50 }).notNull(),
  commentText: text("comment_text").notNull(),
  likesCount: integer("like_count").default(0),
  pubishedAt: timestamp("published_at").notNull(),
  isUsed: boolean("is_used").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});


// relationships
export const VideoRelations =  relations(Videos,({many}) => ({
  comments : many(videoComments)
}))

export const VideoCommentRelations = relations(videoComments,({one}) => ({
  video : one(Videos,{
    fields : [videoComments.videoId],
    references : [Videos.Id]
  })
}))