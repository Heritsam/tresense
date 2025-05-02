import { Metadata } from "next";

import { AutomationControls } from "@/components/dashboard/automation-controls";
import { CommentModeration } from "@/components/dashboard/comment-moderation";
import { ContentInsight } from "@/components/dashboard/content-insight";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ErrorLogs } from "@/components/dashboard/error-logs";
import { IndividualPosts } from "@/components/dashboard/individual-posts";
import { KeywordInsights } from "@/components/dashboard/keyword-insights";
import { KpiCards } from "@/components/dashboard/kpi-cards";
import { LiveFeed } from "@/components/dashboard/live-feed";
import { ReplyEffectiveness } from "@/components/dashboard/reply-effectiveness";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 container mx-auto">
        <DashboardShell>
          <div className="grid gap-4 md:gap-6">
            <KpiCards />
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
              {/* <SentimentTrend /> */}
              <ContentInsight />
              <LiveFeed />
            </div>
            <IndividualPosts />
            <CommentModeration />
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
              <AutomationControls />
              <ReplyEffectiveness />
            </div>
            <KeywordInsights />
            <ErrorLogs />
          </div>
        </DashboardShell>
      </div>
    </div>
  );
}
