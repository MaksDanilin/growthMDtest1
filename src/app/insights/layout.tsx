import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | The Growth MD",
  description: "Expert insights on behavioral health growth strategies, revenue optimization, patient acquisition, and operational excellence for treatment centers and outpatient programs.",
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
