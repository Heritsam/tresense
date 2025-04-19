"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { template: "Template A", engagement: 78, followUp: 45, likes: 65 },
  { template: "Template B", engagement: 65, followUp: 38, likes: 52 },
  { template: "Template C", engagement: 82, followUp: 52, likes: 70 },
  { template: "Template D", engagement: 55, followUp: 30, likes: 45 },
  { template: "Template E", engagement: 70, followUp: 42, likes: 58 },
];

export function ReplyEffectiveness() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-2">
        <div>
          <CardTitle>Reply Effectiveness</CardTitle>
          <CardDescription>
            Track which replies generate the most engagement
          </CardDescription>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by sentiment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sentiments</SelectItem>
            <SelectItem value="positive">Positive Comments</SelectItem>
            <SelectItem value="neutral">Neutral Comments</SelectItem>
            <SelectItem value="negative">Negative Comments</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-2 sm:pt-4">
        <div className="h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="template" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Bar
                dataKey="engagement"
                name="Engagement Rate %"
                fill="#3b82f6"
              />
              <Bar
                dataKey="followUp"
                name="Follow-up Comments %"
                fill="#8b5cf6"
              />
              <Bar dataKey="likes" name="Likes %" fill="#ec4899" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
