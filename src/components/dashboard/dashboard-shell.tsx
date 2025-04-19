import type { ReactNode } from "react";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="container px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6">
      {children}
    </div>
  );
}
