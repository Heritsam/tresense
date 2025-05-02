import { CheckCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function KpiCards() {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs sm:text-sm font-medium">
            Sentiment Breakdown
          </CardTitle>
          <div className="flex space-x-1">
            <span className="h-4 w-4 rounded-full bg-green-500" />
            <span className="h-4 w-4 rounded-full bg-yellow-500" />
            <span className="h-4 w-4 rounded-full bg-red-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium">Positive</div>
              <div className="text-lg sm:text-xl font-bold">65%</div>
            </div>
            <div>
              <div className="text-xs font-medium">Neutral</div>
              <div className="text-lg sm:text-xl font-bold">25%</div>
            </div>
            <div>
              <div className="text-xs font-medium">Negative</div>
              <div className="text-lg sm:text-xl font-bold">10%</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs sm:text-sm font-medium">
            Automated Replies
          </CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-xl sm:text-2xl font-bold">1,429</div>
          <p className="text-xs text-muted-foreground">
            50.1% of total comments
          </p>
        </CardContent>
      </Card>
      {/* <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs sm:text-sm font-medium">
            Automation Mode
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Automation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="automation">Automation</SelectItem>
              <SelectItem value="approval">Approval</SelectItem>
              <SelectItem value="manual">Manual</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card> */}
    </div>
  );
}
