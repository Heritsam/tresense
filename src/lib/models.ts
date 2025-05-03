export type Comment = {
  author: string;
  message: string;
  like_count: number;
  publishedAt: string;
  updatedAt: string;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  published_at: string;
  channel_title: string;
  thumbnail: string;
  view_count: number;
  like_count: number;
  dislike_count: number;
  comment_count: number;
};
export type AutoComment = {
  id: string;
  thread_id: string;
  comment: string;
  sentiment: string;
  status: string;
  suggested_reply: string;
};
