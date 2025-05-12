import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-300px)] flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">404</h1>
        <h2 className="mb-6 text-2xl font-medium text-muted-foreground">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          We couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
