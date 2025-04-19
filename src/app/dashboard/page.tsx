import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { KpiCards } from "@/components/dashboard/kpi-cards";
import { SentimentTrend } from "@/components/dashboard/sentiment-trend";
import { LiveFeed } from "@/components/dashboard/live-feed";
import { CommentModeration } from "@/components/dashboard/comment-moderation";
import { AutomationControls } from "@/components/dashboard/automation-controls";
import { ReplyEffectiveness } from "@/components/dashboard/reply-effectiveness";
import { KeywordInsights } from "@/components/dashboard/keyword-insights";
import { ErrorLogs } from "@/components/dashboard/error-logs";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 container mx-auto">
        <DashboardShell>
          <div className="grid gap-4 md:gap-6">
            <KpiCards />
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
              <SentimentTrend />
              <LiveFeed />
            </div>
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
