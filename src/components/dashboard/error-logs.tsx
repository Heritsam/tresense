"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LogEntry {
  id: string;
  date: string;
  action: string;
  user: string;
  outcome: "Success" | "Error" | "Warning";
  details: string;
}

const logs: LogEntry[] = [
  {
    id: "1",
    date: "2023-06-15 14:32:45",
    action: "Auto-reply failed",
    user: "System",
    outcome: "Error",
    details: "API rate limit exceeded",
  },
  {
    id: "2",
    date: "2023-06-15 13:21:10",
    action: "Manual override",
    user: "john.doe@example.com",
    outcome: "Success",
    details: "Changed reply template for negative sentiment",
  },
  {
    id: "3",
    date: "2023-06-15 12:05:33",
    action: "Integration disconnected",
    user: "System",
    outcome: "Warning",
    details: "Facebook token expired",
  },
  {
    id: "4",
    date: "2023-06-15 10:45:22",
    action: "Comment flagged",
    user: "sarah.smith@example.com",
    outcome: "Success",
    details: "Flagged for inappropriate content",
  },
  {
    id: "5",
    date: "2023-06-15 09:12:07",
    action: "Auto-reply failed",
    user: "System",
    outcome: "Error",
    details: "Unable to process sentiment",
  },
];

export function ErrorLogs() {
  const [filter, setFilter] = useState<string>("all");

  const filteredLogs =
    filter === "all"
      ? logs
      : logs.filter(
          (log) => log.outcome.toLowerCase() === filter.toLowerCase()
        );

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-2">
        <div>
          <CardTitle>Error & Audit Logs</CardTitle>
          <CardDescription>
            Track system events and manual actions
          </CardDescription>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <Select defaultValue="all" onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Filter by outcome" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Outcomes</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            Export Logs
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date & Time</TableHead>
                <TableHead>Action</TableHead>
                <TableHead className="hidden md:table-cell">User</TableHead>
                <TableHead>Outcome</TableHead>
                <TableHead className="hidden sm:table-cell">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium text-xs sm:text-sm whitespace-nowrap">
                    {log.date}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm">
                    {log.action}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                    {log.user}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        log.outcome === "Success"
                          ? "default"
                          : log.outcome === "Warning"
                          ? "secondary"
                          : "destructive"
                      }
                      className="text-xs whitespace-nowrap"
                    >
                      {log.outcome}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-xs sm:text-sm">
                    {log.details}
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
