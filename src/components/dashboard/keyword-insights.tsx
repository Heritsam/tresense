"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Lightbulb } from "lucide-react";

interface KeywordItem {
  text: string;
  weight: number;
}

const keywords: KeywordItem[] = [
  { text: "support", weight: 100 },
  { text: "great", weight: 85 },
  { text: "feature", weight: 75 },
  { text: "help", weight: 70 },
  { text: "update", weight: 65 },
  { text: "issue", weight: 60 },
  { text: "thanks", weight: 55 },
  { text: "problem", weight: 50 },
  { text: "love", weight: 45 },
  { text: "amazing", weight: 40 },
  { text: "slow", weight: 35 },
  { text: "bug", weight: 30 },
  { text: "easy", weight: 25 },
  { text: "difficult", weight: 20 },
  { text: "price", weight: 15 },
];

const insights = [
  "Increase positive sentiment by responding faster to support requests",
  "Users frequently mention the new dashboard feature in positive comments",
  "Consider addressing pricing concerns in your automated replies",
  "Bug reports have decreased by 15% since the last update",
  "Users appreciate personalized responses over generic templates",
];

export function KeywordInsights() {
  // Calculate font size based on weight
  const getFontSize = (weight: number) => {
    const min = 10;
    const max = 24;
    return min + ((max - min) * weight) / 100;
  };

  // Calculate opacity based on weight
  const getOpacity = (weight: number) => {
    const min = 0.5;
    const max = 1;
    return min + ((max - min) * weight) / 100;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-2">
        <div>
          <CardTitle>Keywords & Insights</CardTitle>
          <CardDescription>
            Trending topics and AI-powered suggestions
          </CardDescription>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium mb-3 sm:mb-4">
              Trending Keywords
            </h3>
            <div className="bg-muted/50 rounded-lg p-3 sm:p-4 h-[180px] sm:h-[200px] flex items-center justify-center overflow-hidden">
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-block"
                    style={{
                      fontSize: `${getFontSize(keyword.weight)}px`,
                      opacity: getOpacity(keyword.weight),
                      fontWeight: keyword.weight > 50 ? "bold" : "normal",
                    }}
                  >
                    {keyword.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3 sm:mb-4 mt-3 lg:mt-0">
              AI Suggestions
            </h3>
            <div className="space-y-2 sm:space-y-3 max-h-[180px] sm:max-h-[200px] overflow-y-auto pr-1">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 bg-muted/50 rounded-lg p-2 sm:p-3"
                >
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mt-0.5 shrink-0" />
                  <p className="text-xs sm:text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
