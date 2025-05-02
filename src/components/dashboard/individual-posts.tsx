"use client";

import {
  Heart,
  Instagram,
  MessageCircle,
  Play,
  Share2,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      thumbnail:
        "https://i.ytimg.com/vi/MLpmiywRNzY/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFQgZSgvMA8=&rs=AOn4CLC4w16R37-r4ayyFj8-7do2tdnNQg",
      views: 24560,
      duration: "12:45",
      likes: 1245,
      dislikes: 28,
      title:
        "Tips Produktif 2025: How to Use Sentiment AI for YouTube Comments",
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
      thumbnail:
        "https://i.ytimg.com/vi/7kDuzDiNDto/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCweLXQv6Ru65q8pNINWONCkoCCiw",
      views: 87320,
      duration: "18:22",
      likes: 3421,
      dislikes: 104,
      title: "Supermarket Simulator",
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
      thumbnail:
        "https://i.ytimg.com/vi/VqLdt2LkW64/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBWA3x7QeQZO45wUkOR5waqMz2HSw",
      views: 12450,
      duration: "8:37",
      likes: 542,
      dislikes: 124,
      title: "Borong Bitcoin",
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

  // const formatViews = (views: number): string => {
  //   if (views >= 1000000) {
  //     return `${(views / 1000000).toFixed(1)}M`;
  //   } else if (views >= 1000) {
  //     return `${(views / 1000).toFixed(1)}K`;
  //   } else {
  //     return views.toString();
  //   }
  // };

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
              <Youtube className="size-5 sm:size-4" />
              <span className="hidden sm:inline">YouTube</span>
            </TabsTrigger>
            <TabsTrigger value="instagram" className="flex items-center gap-1">
              <Instagram className="size-5 sm:size-4" />
              <span className="hidden sm:inline">Instagram</span>
            </TabsTrigger>
            <TabsTrigger value="tiktok" className="flex items-center gap-1">
              <svg
                className="size-5 sm:size-4"
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
          <div className="flex flex-col gap-4 mt-2">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="p-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={post.youtube!.thumbnail}
                    alt={post.youtube!.title}
                    height={400}
                    width={200}
                    className="w-auto h-full rounded-md"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold">
                      {post.youtube!.title}
                    </h3>
                    <p className="text-sm">{post.content}</p>
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
                  </div>
                </div>
                <div className="flex mt-2 w-full">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="default" className="ml-auto">
                        <Play className="size-4" />
                        Run Analysis
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        Run Sentiment Analysis
                      </DropdownMenuItem>
                      <DropdownMenuItem>Run Topic Analysis</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
