"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Eye,
  Heart,
  Instagram,
  MessageCircle,
  MoreHorizontal,
  Music2,
  Play,
  Share2,
  Youtube,
} from "lucide-react";
import Image from "next/image";

type Platform = "Instagram" | "YouTube" | "TikTok";
type SentimentType = "Positive" | "Neutral" | "Negative";

interface Post {
  id: string;
  content: string;
  platform: Platform;
  sentiment: SentimentType;
  sentimentScore: number;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  author: {
    name: string;
    avatar: string;
    handle: string;
  };
  youtube?: {
    videoId: string;
    thumbnail: string;
    views: number;
    duration: string;
    likes: number;
    dislikes: number;
    title: string;
  };
  instagram?: {
    imageUrl: string;
    location?: string;
    hashtags: string[];
  };
  tiktok?: {
    videoId: string;
    thumbnail: string;
    views: number;
    duration: string;
    songName: string;
    songArtist: string;
  };
}

const posts: Post[] = [
  {
    id: "1",
    content:
      "Check out our latest video on how we integrated Sentiment AI into our workflow and improved customer satisfaction by 35%! #ProductivityHacks #CustomerExperience",
    platform: "Instagram",
    sentiment: "Positive",
    sentimentScore: 0.79,
    date: "2 days ago",
    likes: 287,
    comments: 42,
    shares: 31,
    author: {
      name: "Digital Marketers",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "digitalmarketers",
    },
    instagram: {
      imageUrl: "/placeholder.svg?height=400&width=400",
      location: "San Francisco, CA",
      hashtags: [
        "ProductivityHacks",
        "CustomerExperience",
        "AI",
        "SentimentAnalysis",
      ],
    },
  },
  {
    id: "2",
    content:
      "In our latest tutorial, we show you how to set up Sentiment AI for your YouTube channel comments. Watch now to learn how to manage engagement more efficiently!",
    platform: "YouTube",
    sentiment: "Neutral",
    sentimentScore: 0.65,
    date: "4 days ago",
    likes: 1245,
    comments: 89,
    shares: 102,
    author: {
      name: "Tech Tutorials",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "techtutorials",
    },
    youtube: {
      videoId: "abc123",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: 24560,
      duration: "12:45",
      likes: 1245,
      dislikes: 28,
      title:
        "How to Set Up Sentiment AI for YouTube Comments - Complete Tutorial",
    },
  },
  {
    id: "3",
    content:
      "We reviewed the top AI sentiment analysis tools in 2023, and Sentiment AI came out on top! Check out our detailed comparison and see why it's the best choice for content creators.",
    platform: "YouTube",
    sentiment: "Positive",
    sentimentScore: 0.89,
    date: "1 week ago",
    likes: 3421,
    comments: 215,
    shares: 178,
    author: {
      name: "AI Reviews",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "aireviews",
    },
    youtube: {
      videoId: "def456",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: 87320,
      duration: "18:22",
      likes: 3421,
      dislikes: 104,
      title: "Top 5 AI Sentiment Analysis Tools for 2023 - Detailed Comparison",
    },
  },
  {
    id: "4",
    content:
      "I tried using Sentiment AI for my gaming channel and the results were disappointing. The AI doesn't understand gaming terminology and keeps misclassifying comments. Not worth the price.",
    platform: "YouTube",
    sentiment: "Negative",
    sentimentScore: 0.23,
    date: "2 weeks ago",
    likes: 542,
    comments: 98,
    shares: 24,
    author: {
      name: "Gaming With Josh",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "gamingwithjosh",
    },
    youtube: {
      videoId: "ghi789",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: 12450,
      duration: "8:37",
      likes: 542,
      dislikes: 124,
      title:
        "Sentiment AI Review - Does It Work for Gaming Channels? (HONEST REVIEW)",
    },
  },
  {
    id: "5",
    content:
      "How we use AI to respond to comments and save hours every day! Our team productivity has increased by 40% since implementing this tool. #ProductivityHack #ContentCreator",
    platform: "Instagram",
    sentiment: "Positive",
    sentimentScore: 0.92,
    date: "3 days ago",
    likes: 1254,
    comments: 87,
    shares: 45,
    author: {
      name: "Social Media Experts",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "socialmediaexperts",
    },
    instagram: {
      imageUrl: "/placeholder.svg?height=400&width=400",
      location: "New York, NY",
      hashtags: [
        "ProductivityHack",
        "ContentCreator",
        "SocialMediaTips",
        "AITools",
      ],
    },
  },
  {
    id: "6",
    content:
      "POV: When the AI understands your audience better than you do 😂 #SentimentAI #ContentCreator #TechTok",
    platform: "TikTok",
    sentiment: "Positive",
    sentimentScore: 0.88,
    date: "1 day ago",
    likes: 24500,
    comments: 342,
    shares: 1200,
    author: {
      name: "Tech Trends",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@techtrends",
    },
    tiktok: {
      videoId: "tik001",
      thumbnail: "/placeholder.svg?height=600&width=340",
      views: 145000,
      duration: "0:45",
      songName: "Funny Tech Sound",
      songArtist: "TikTok Creator",
    },
  },
  {
    id: "7",
    content:
      "Testing Sentiment AI on hate comments... the results will shock you! 😱 #AITesting #ContentCreatorLife",
    platform: "TikTok",
    sentiment: "Neutral",
    sentimentScore: 0.52,
    date: "3 days ago",
    likes: 56700,
    comments: 890,
    shares: 3400,
    author: {
      name: "Creator Academy",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@creatoracademy",
    },
    tiktok: {
      videoId: "tik002",
      thumbnail: "/placeholder.svg?height=600&width=340",
      views: 287000,
      duration: "1:12",
      songName: "Original Sound",
      songArtist: "Creator Academy",
    },
  },
  {
    id: "8",
    content:
      "This AI tool is NOT worth the money! Save your $29/month and do this instead... #HonestReview #AITools",
    platform: "TikTok",
    sentiment: "Negative",
    sentimentScore: 0.18,
    date: "5 days ago",
    likes: 34200,
    comments: 1240,
    shares: 2100,
    author: {
      name: "Honest Reviews",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@honestreviews",
    },
    tiktok: {
      videoId: "tik003",
      thumbnail: "/placeholder.svg?height=600&width=340",
      views: 198000,
      duration: "2:24",
      songName: "Disappointed - Sound Effect",
      songArtist: "SoundLibrary",
    },
  },
];

export function IndividualPosts() {
  const [filter, setFilter] = useState<string>("all");

  const filteredPosts =
    filter === "all"
      ? posts
      : posts.filter(
          (post) => post.platform.toLowerCase() === filter.toLowerCase()
        );

  const getPlatformIcon = (platform: Platform) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="h-4 w-4 text-pink-600" />;
      case "YouTube":
        return <Youtube className="h-4 w-4 text-red-600" />;
      case "TikTok":
        return (
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
              fill="#000000"
            />
          </svg>
        );
    }
  };

  const formatViews = (views: number): string => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    } else {
      return views.toString();
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-2">
        <div>
          <CardTitle>Individual Posts</CardTitle>
          <CardDescription>
            Monitor and analyze individual posts across platforms
          </CardDescription>
        </div>
        <Tabs
          defaultValue="all"
          onValueChange={setFilter}
          className="w-full sm:w-auto"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="youtube" className="flex items-center gap-1">
              <Youtube className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">YouTube</span>
            </TabsTrigger>
            <TabsTrigger value="instagram" className="flex items-center gap-1">
              <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Instagram</span>
            </TabsTrigger>
            <TabsTrigger value="tiktok" className="flex items-center gap-1">
              <svg
                className="h-3 w-3 sm:h-4 sm:w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                  fill="currentColor"
                />
              </svg>
              <span className="hidden sm:inline">TikTok</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] sm:h-[500px] pr-2 sm:pr-4">
          <div className="space-y-4 mt-2">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center">
                      <div className="flex gap-1">
                        {getPlatformIcon(post.platform)}
                        <span className="text-xs text-muted-foreground hidden sm:inline">
                          {post.platform}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 ml-auto">
                        <Badge
                          variant={
                            post.sentiment === "Positive"
                              ? "default"
                              : post.sentiment === "Neutral"
                              ? "secondary"
                              : "destructive"
                          }
                          className="text-xs"
                        >
                          {post.sentiment} (
                          {(post.sentimentScore * 100).toFixed(0)}%)
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>
                              Analyze Sentiment
                            </DropdownMenuItem>
                            <DropdownMenuItem>Generate Reply</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Hide Post</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="grid">
                      {post.platform === "YouTube" && post.youtube && (
                        <div className="mt-2 mb-3">
                          <div className="aspect-video relative rounded-md w-full md:w-2/3 lg:w-1/3 h-auto mb-2">
                            <Image
                              src={post.youtube.thumbnail || "/placeholder.svg"}
                              alt={post.youtube.title}
                              fill
                              className="object-cover rounded-md"
                            />
                            <div className="absolute inset-0 rounded-md bg-black/20 flex items-center justify-center">
                              <div className="bg-black/60 rounded-full p-2">
                                <Play className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                              {post.youtube.duration}
                            </div>
                          </div>

                          <div className="text-sm font-medium mb-2">
                            {post.youtube.title}
                          </div>
                        </div>
                      )}
                    </div>

                    {post.platform === "YouTube" && post.youtube && (
                      <div className="mt-2 mb-3">
                        <div className="aspect-video relative rounded-md w-full md:w-2/3 lg:w-1/3 h-auto mb-2">
                          <Image
                            src={post.youtube.thumbnail || "/placeholder.svg"}
                            alt={post.youtube.title}
                            fill
                            className="object-cover rounded-md"
                          />
                          <div className="absolute inset-0 rounded-md bg-black/20 flex items-center justify-center">
                            <div className="bg-black/60 rounded-full p-2">
                              <Play className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                            {post.youtube.duration}
                          </div>
                        </div>

                        <div className="text-sm font-medium mb-2">
                          {post.youtube.title}
                        </div>
                      </div>
                    )}

                    {post.platform === "Instagram" && post.instagram && (
                      <div className="mt-2 mb-3">
                        <div className="relative rounded-md overflow-hidden">
                          <div className="aspect-square relative rounded-md w-full md:w-2/3 lg:w-1/3 h-auto mb-2">
                            <Image
                              src={
                                post.instagram.imageUrl || "/placeholder.svg"
                              }
                              alt="Instagram post"
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          {post.instagram.location && (
                            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                              {post.instagram.location}
                            </div>
                          )}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {post.instagram.hashtags.map((tag, index) => (
                            <span key={index} className="text-xs text-blue-500">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {post.platform === "TikTok" && post.tiktok && (
                      <div className="mt-2 mb-3">
                        <div className="relative rounded-md overflow-hidden">
                          <div className="aspect-[9/16] relative max-w-[250px] mx-auto">
                            <Image
                              src={post.tiktok.thumbnail || "/placeholder.svg"}
                              alt="TikTok video"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="bg-black/60 rounded-full p-2">
                                <Play className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                              {post.tiktok.duration}
                            </div>
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {formatViews(post.tiktok.views)}
                            </div>
                          </div>
                          <div className="flex items-center justify-between bg-muted/30 p-2 text-xs max-w-[250px] mx-auto">
                            <div className="flex items-center gap-1 truncate">
                              <Music2 className="h-3.5 w-3.5 flex-shrink-0" />
                              <span className="truncate">
                                {post.tiktok.songName} -{" "}
                                {post.tiktok.songArtist}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-sm">{post.content}</p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3.5 w-3.5" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3.5 w-3.5" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="h-3.5 w-3.5" />
                          <span>{post.shares}</span>
                        </div>
                      </div>
                      {!post.youtube && !post.tiktok && !post.instagram && (
                        <div className="text-xs text-muted-foreground">
                          {post.date}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
