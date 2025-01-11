import {
  integer,
  varchar,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const Videos = pgTable("Videos", {
  Id: uuid().defaultRandom().primaryKey(),
  thumbnail: text("thumbnail_url"),
  userId: varchar("user_id", { length: 50 }).notNull(),
  videoId: text("video_id").notNull(),
  likesCount: integer("likes_count").default(0),
  dislikesCount: integer("dislikes_count").default(0),
  viewsCount: integer("views_count").default(0),
  title: text("title").notNull(),
  description: text("description").notNull(),
  commentsCount: integer("comment_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const YoutubeChannels = pgTable("Channels", {
  Id: uuid().defaultRandom().primaryKey(),
  name: text("channel_name").notNull(),
  userId: varchar("user_id", { length: 50 }).notNull(),
  channelId: text("channel_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const VideoComments = pgTable("VideoComments", {
  Id: uuid().defaultRandom().primaryKey(),
  videoId: varchar("video_id", { length: 50 }).notNull(),
  userId: varchar("user_id", { length: 50 }).notNull(),
  commentText: text("comment_text"),
  likesCount: integer("likes_count").default(0),
  dislikesCount: integer("dislikes_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
