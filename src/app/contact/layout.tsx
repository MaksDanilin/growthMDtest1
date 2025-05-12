import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Growth MD",
  description: "Get in touch with our behavioral health growth consultants and schedule a free consultation.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
