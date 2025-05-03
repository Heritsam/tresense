export type Comment = {
  author: string;
  message: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
};

export type Video = {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  channelTitle: string;
  thumbnail: string;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
};
