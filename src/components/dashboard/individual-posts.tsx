"use client";

import { Eye, Heart, MessageCircle, Play } from "lucide-react";
import Image from "next/image";

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
import { Video } from "@/lib/models";
import { useQuery } from "@tanstack/react-query";

export function IndividualPosts() {
  const formatNumbers = (numbers: number): string => {
    if (numbers >= 1000000) {
      return `${(numbers / 1000000).toFixed(1)}M`;
    } else if (numbers >= 1000) {
      return `${(numbers / 1000).toFixed(1)}K`;
    } else {
      return `${numbers}`;
    }
  };

  const {
    status,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("/api/posts");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Video[] = await response.json();

      return data;
    },
  });

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-2">
        <div>
          <CardTitle>Individual Posts</CardTitle>
          <CardDescription>
            Monitor and analyze individual posts across platforms
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] sm:h-[500px] pr-2 sm:pr-4">
          <div className="flex flex-col gap-4 mt-2">
            {status === "pending" && (
              <div className="flex items-center justify-center w-full h-full">
                Loading...
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center justify-center w-full h-full">
                <p>Error: {error.message}</p>
              </div>
            )}
            {/* Render posts */}
            {status === "success" &&
              posts &&
              posts.map((post, index) => (
                <Card key={post.videoId + "-" + index} className="p-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      height={400}
                      width={200}
                      className="w-auto h-full rounded-md"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-semibold">{post.title}</h3>
                      <p className="text-sm line-clamp-2 max-w-xl">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3.5 w-3.5" />
                          <span>{formatNumbers(post.likeCount)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3.5 w-3.5" />
                          <span>{formatNumbers(post.commentCount)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          <span>{formatNumbers(post.viewCount)}</span>
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
