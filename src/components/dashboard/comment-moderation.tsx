"use client";

import { useState } from "react";
import { Check, Edit, MoreHorizontal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface Comment {
  id: string;
  text: string;
  sentiment: "Positive" | "Neutral" | "Negative";
  confidence: number;
  suggestedReply: string;
  status: "Approved" | "Pending" | "Rejected";
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
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              Bulk Actions
            </Button>
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
                <TableHead>Comment</TableHead>
                <TableHead className="hidden sm:table-cell w-[100px]">
                  Sentiment
                </TableHead>
                <TableHead className="hidden md:table-cell w-[100px]">
                  Confidence
                </TableHead>
                <TableHead className="hidden lg:table-cell">
                  Suggested Reply
                </TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredComments.map((comment) => (
                <TableRow key={comment.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedComments.includes(comment.id)}
                      onCheckedChange={() => toggleSelectComment(comment.id)}
                      aria-label={`Select comment ${comment.id}`}
                    />
                  </TableCell>
                  <TableCell
                    className="font-medium max-w-[150px] sm:max-w-[200px] truncate"
                    title={comment.text}
                  >
                    <div className="flex items-center gap-2 sm:hidden">
                      <Badge
                        variant={
                          comment.sentiment === "Positive"
                            ? "default"
                            : comment.sentiment === "Neutral"
                            ? "secondary"
                            : "destructive"
                        }
                        className="shrink-0"
                      >
                        {comment.sentiment[0]}
                      </Badge>
                    </div>
                    {comment.text}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge
                      variant={
                        comment.sentiment === "Positive"
                          ? "default"
                          : comment.sentiment === "Neutral"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {comment.sentiment}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {(comment.confidence * 100).toFixed(0)}%
                  </TableCell>
                  <TableCell
                    className="hidden lg:table-cell max-w-[200px] truncate"
                    title={comment.suggestedReply}
                  >
                    {comment.suggestedReply}
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
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8"
                      >
                        <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8"
                      >
                        <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 sm:h-8 sm:w-8"
                          >
                            <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Reassign</DropdownMenuItem>
                          <DropdownMenuItem>View History</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
