"use client";

import { Check, Edit, ExternalLink, MoreHorizontal, Trash } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Video } from "@/lib/models";
import { useQuery } from "@tanstack/react-query";

interface Comment {
  id: string;
  text: string;
  sentiment: "Positive" | "Neutral" | "Negative";
  confidence: number;
  suggestedReply: string;
  status: "Automated" | "Approved" | "Pending" | "Rejected";
}

const comments: Comment[] = [
  {
    id: "1",
    text: "Your customer service is outstanding! I'll definitely recommend you to my friends.",
    sentiment: "Positive",
    confidence: 0.95,
    suggestedReply:
      "Thank you for your kind words! We're thrilled to hear about your positive experience. We appreciate your recommendations!",
    status: "Approved",
  },
  {
    id: "2",
    text: "I'm having trouble finding the export button. Where is it located?",
    sentiment: "Neutral",
    confidence: 0.87,
    suggestedReply:
      "The export button is located in the top right corner of the dashboard. If you're still having trouble, please let us know!",
    status: "Pending",
  },
  {
    id: "3",
    text: "This product is not working as advertised. I want a refund.",
    sentiment: "Negative",
    confidence: 0.92,
    suggestedReply:
      "We're sorry to hear about your experience. Please contact our support team at support@example.com, and we'll help resolve this issue immediately.",
    status: "Pending",
  },
  {
    id: "4",
    text: "How do I change my subscription plan?",
    sentiment: "Neutral",
    confidence: 0.89,
    suggestedReply:
      "You can change your subscription plan in your account settings under 'Subscription'. If you need any assistance, our support team is here to help!",
    status: "Approved",
  },
  {
    id: "5",
    text: "The new update is amazing! So many useful features.",
    sentiment: "Positive",
    confidence: 0.97,
    suggestedReply:
      "We're delighted to hear you're enjoying the new update! We worked hard to include features our users would love. Thank you for your feedback!",
    status: "Pending",
  },
];

export function CommentModeration() {
  const [selectedComments, setSelectedComments] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const filteredComments = comments.filter(
    (comment) =>
      comment.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.suggestedReply.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectAll = () => {
    if (selectedComments.length === filteredComments.length) {
      setSelectedComments([]);
    } else {
      setSelectedComments(filteredComments.map((comment) => comment.id));
    }
  };

  const toggleSelectComment = (id: string) => {
    if (selectedComments.includes(id)) {
      setSelectedComments(
        selectedComments.filter((commentId) => commentId !== id)
      );
    } else {
      setSelectedComments([...selectedComments, id]);
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

  if (status === "pending") {
    return (
      <Card>
        <CardContent>
          <div className="flex items-center justify-center w-full h-full">
            Loading...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (status === "error") {
    return (
      <Card>
        <CardContent>
          <div className="flex items-center justify-center w-full h-full">
            <p>Error: {error.message}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div>
            <CardTitle>Comment Moderation</CardTitle>
            <CardDescription>
              Review and manage incoming comments
            </CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <Input
              placeholder="Search comments..."
              className="w-full sm:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select onValueChange={setSelectedPost}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a post" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a post</SelectLabel>
                  {posts.map((post, index) => (
                    <SelectItem
                      key={post.videoId + "-" + index}
                      value={post.title}
                    >
                      {post.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={
                      selectedComments.length === filteredComments.length &&
                      filteredComments.length > 0
                    }
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead>Executed at</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead className="hidden sm:table-cell w-[100px]">
                  Sentiment
                </TableHead>
                <TableHead className="hidden lg:table-cell">
                  Suggested Reply
                </TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedPost &&
                filteredComments.map((comment) => (
                  <TableRow key={comment.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedComments.includes(comment.id)}
                        onCheckedChange={() => toggleSelectComment(comment.id)}
                        aria-label={`Select comment ${comment.id}`}
                      />
                    </TableCell>
                    <TableCell>
                      {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </TableCell>
                    <TableCell>Falif</TableCell>
                    <TableCell
                      className="font-medium max-w-[150px] sm:max-w-[200px] truncate"
                      title={comment.text}
                    >
                      <div className="flex items-center gap-2 sm:hidden">
                        <Badge
                          variant={
                            comment.sentiment === "Positive"
                              ? "success"
                              : comment.sentiment === "Neutral"
                              ? "secondary"
                              : "destructive"
                          }
                          className="shrink-0"
                        >
                          {comment.sentiment[0]}
                        </Badge>
                      </div>
                      <HoverCard>
                        <HoverCardTrigger className="cursor-pointer">
                          {comment.text}
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">Falif</h4>
                              <p className="text-sm text-muted-foreground">
                                24/10/2023, 10:30 AM
                              </p>
                              <p className="text-sm">{comment.text}</p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge
                        variant={
                          comment.sentiment === "Positive"
                            ? "success"
                            : comment.sentiment === "Neutral"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {comment.sentiment}
                      </Badge>
                    </TableCell>
                    <TableCell
                      className="hidden lg:table-cell max-w-[200px] truncate"
                      title={comment.suggestedReply}
                    >
                      <HoverCard>
                        <HoverCardTrigger className="cursor-pointer">
                          {comment.suggestedReply}
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">
                                Suggested reply
                              </h4>
                              <p className="text-sm">
                                {comment.suggestedReply}
                              </p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          comment.status === "Approved"
                            ? "default"
                            : comment.status === "Pending"
                            ? "outline"
                            : "destructive"
                        }
                      >
                        {comment.status}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 sm:h-8 sm:w-8"
                          >
                            <MoreHorizontal className="size-3 sm:size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <ExternalLink className="size-3 sm:size-4" />
                            Link to post
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Check className="size-3 sm:size-4" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="size-3 sm:size-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="size-3 sm:size-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              {!selectedPost && (
                <TableRow>
                  <TableCell colSpan={13} className="h-24 text-center">
                    Please select a post to view comments.
                  </TableCell>
                </TableRow>
              )}

              {filteredComments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={13} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
