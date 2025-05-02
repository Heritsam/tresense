"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Skeleton } from "../ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const contentList = [
  {
    id: 1,
    title: "Tips Produktif 2025",
    thumbnail:
      "https://i.ytimg.com/vi/MLpmiywRNzY/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFQgZSgvMA8=&rs=AOn4CLC4w16R37-r4ayyFj8-7do2tdnNQg",
    comments: 324,
    likes: "2.1K",
    date: "01 Mei 2025",
    platform: "YouTube",
    analyzed: true,
    hasTopic: true,
    hasSentiment: true,
  },
  {
    id: 2,
    title: "Supermarket Simulator",
    thumbnail:
      "https://i.ytimg.com/vi/7kDuzDiNDto/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCweLXQv6Ru65q8pNINWONCkoCCiw",
    comments: 212,
    likes: "1.5K",
    date: "29 Apr 2025",
    platform: "Instagram",
    analyzed: true,
    hasTopic: true,
    hasSentiment: false,
  },
  {
    id: 3,
    title: "Borong Bitcoin",
    thumbnail:
      "https://i.ytimg.com/vi/VqLdt2LkW64/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBWA3x7QeQZO45wUkOR5waqMz2HSw",
    comments: 510,
    likes: "3.8K",
    date: "28 Apr 2025",
    platform: "TikTok",
    analyzed: false,
    hasTopic: false,
    hasSentiment: false,
  },
];

export function ContentInsight() {
  const [view, setView] = useState("daily");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  console.log(view);

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-2">
        <div>
          <CardTitle className="text-base">Content Insights</CardTitle>
          <CardDescription>
            Track your posts performance accross all platforms
          </CardDescription>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Tabs
            defaultValue="daily"
            onValueChange={setView}
            className="w-full sm:w-auto"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
            </TabsList>
          </Tabs>
          <Select>
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="All Channels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Channels</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-2 sm:pt-4">
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            <AnimatePresence>
              {contentList.map((content) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="border p-3 rounded-xl"
                >
                  <div className="flex gap-4 items-center">
                    <Image
                      src={content.thumbnail}
                      alt={content.title}
                      height={400}
                      width={200}
                      className="w-1/6 h-auto rounded-md"
                    />
                    <div className="space-y-1 w-full">
                      <div className="flex items-center gap-2 font-medium">
                        <span>{content.title}</span>
                      </div>
                      <p className="text-md text-muted-foreground">
                        Komentar: {content.comments} | Like: {content.likes} |{" "}
                        {content.date}
                      </p>
                      <div className="flex gap-2 text-xs mt-1">
                        <span className="flex items-center gap-1">
                          {content.analyzed ? (
                            <CheckCircle2 className="text-green-500 w-3 h-3" />
                          ) : (
                            <XCircle className="text-red-500 w-3 h-3" />
                          )}{" "}
                          Analisis
                        </span>
                        <span className="flex items-center gap-1">
                          {content.hasTopic ? (
                            <CheckCircle2 className="text-green-500 w-3 h-3" />
                          ) : (
                            <XCircle className="text-red-500 w-3 h-3" />
                          )}{" "}
                          Topik
                        </span>
                        <span className="flex items-center gap-1">
                          {content.hasSentiment ? (
                            <CheckCircle2 className="text-green-500 w-3 h-3" />
                          ) : (
                            <XCircle className="text-red-500 w-3 h-3" />
                          )}{" "}
                          Sentimen
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-primary ml-auto"
                      onClick={() =>
                        setSelectedId(
                          content.id === selectedId ? null : content.id
                        )
                      }
                    >
                      {selectedId === content.id ? "Close" : "View"}
                    </Button>
                  </div>
                  {selectedId === content.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="mt-3 ml-4 p-4 border rounded-lg bg-muted/20"
                    >
                      <h4 className="font-semibold mb-2">Content Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        This is a detailed analysis of {content.title}.
                      </p>
                      <ul className="text-sm list-disc ml-5 mt-2 space-y-1">
                        <li>
                          Engagement rate is 6.2% based on likes and comments.
                        </li>
                        <li>Sentiment analysis shows 80% positive comments.</li>
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4"
                        onClick={() => setSelectedId(null)}
                      >
                        Close
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {[0, 1, 2].map((i) => (
              <div
                key={i + "-skeleton"}
                className="border p-3 rounded-xl flex gap-4 items-center"
              >
                <Skeleton className="h-18 w-1/4 rounded-md" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] rounded-full" />
                  <Skeleton className="h-4 w-[250px] rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
