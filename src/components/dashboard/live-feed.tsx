"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

type CommentStatus = "Auto-replied" | "Pending" | "Manual";
type SentimentType = "Positive" | "Neutral" | "Negative";

interface Comment {
  id: string;
  text: string;
  sentiment: SentimentType;
  status: CommentStatus;
  time: string;
  reply?: string;
}

const comments: Comment[] = [
  {
    id: "1",
    text: "I absolutely love your product! It's been a game changer for my business.",
    sentiment: "Positive",
    status: "Auto-replied",
    time: "Just now",
    reply:
      "Thank you for your kind words! We're thrilled to hear our product is helping your business.",
  },
  {
    id: "2",
    text: "When will the new features be available?",
    sentiment: "Neutral",
    status: "Pending",
    time: "2m ago",
  },
  {
    id: "3",
    text: "I've been waiting for support for 2 days now. This is unacceptable.",
    sentiment: "Negative",
    status: "Manual",
    time: "5m ago",
  },
  {
    id: "4",
    text: "The latest update is working great, thanks team!",
    sentiment: "Positive",
    status: "Auto-replied",
    time: "10m ago",
    reply:
      "We're glad to hear you're enjoying the update! Let us know if you have any feedback.",
  },
  {
    id: "5",
    text: "How do I access the analytics dashboard?",
    sentiment: "Neutral",
    status: "Auto-replied",
    time: "15m ago",
    reply:
      "You can access the analytics dashboard from your account settings. Let us know if you need further assistance!",
  },
];

export function LiveFeed() {
  return (
    <Card className="col-span-1 overflow-hidden">
      <CardHeader>
        <CardTitle>Live Feed</CardTitle>
        <CardDescription>Real-time stream of incoming comments</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[250px] sm:h-[300px] pr-2 sm:pr-4">
          <div className="space-y-3 sm:space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="rounded-lg border p-2 sm:p-3">
                <div className="flex justify-between items-start mb-1 sm:mb-2">
                  <div className="font-medium text-xs sm:text-sm">
                    {comment.text}
                  </div>
                  <Badge
                    variant={
                      comment.sentiment === "Positive"
                        ? "default"
                        : comment.sentiment === "Neutral"
                        ? "secondary"
                        : "destructive"
                    }
                    className="ml-2 whitespace-nowrap text-xs"
                  >
                    {comment.sentiment}
                  </Badge>
                </div>
                {comment.reply && (
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 pl-2 sm:pl-3 border-l-2">
                    {comment.reply}
                  </div>
                )}
                <div className="flex justify-between items-center mt-1 sm:mt-2 text-xs text-muted-foreground">
                  <span>{comment.time}</span>
                  <Badge variant="outline" className="text-xs">
                    {comment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
