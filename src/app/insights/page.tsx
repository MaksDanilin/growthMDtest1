"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, ArrowRight, CheckIcon, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

// This metadata needs to be moved to a separate layout.tsx file for client components
const metadataInfo = {
  title: "Insights | The Growth MD",
  description: "Expert insights on behavioral health growth strategies, revenue optimization, patient acquisition, and operational excellence for treatment centers and outpatient programs.",
};

const blogPosts = [
  {
    id: "revenue-metrics-to-track",
    title: "5 Key Revenue Metrics Every Behavioral Health Facility Should Track",
    description: "Learn which financial metrics matter most for treatment centers and how to use them to drive sustainable growth.",
    category: "revenue",
    image: "/insights/placeholder-1.jpg",
    date: "May 2, 2025",
    author: "Dr. Emily Chen",
    readTime: "6 min read",
    featured: true,
    slug: "/insights/revenue-metrics-to-track",
  },
  {
    id: "telehealth-implementation",
    title: "Implementing Telehealth in Your Behavioral Health Practice: Best Practices for 2025",
    description: "A step-by-step guide to launching or optimizing telehealth services to expand your behavioral health practice's reach.",
    category: "digital",
    image: "/insights/placeholder-2.jpg",
    date: "April 28, 2025",
    author: "Michael Johnson",
    readTime: "9 min read",
    featured: true,
    slug: "/insights/telehealth-implementation",
  },
  {
    id: "patient-acquisition-strategies",
    title: "Ethical Patient Acquisition Strategies for Behavioral Health Facilities",
    description: "How to build a consistent referral pipeline while maintaining clinical integrity and ethical standards.",
    category: "marketing",
    image: "/insights/placeholder-3.jpg",
    date: "April 15, 2025",
    author: "Sarah Rodriguez",
    readTime: "7 min read",
    featured: false,
    slug: "/insights/patient-acquisition-strategies",
  },
  {
    id: "insurance-reimbursement",
    title: "Maximizing Insurance Reimbursements: Strategies for Behavioral Health Providers",
    description: "Practical tips to optimize your billing processes and increase reimbursement rates from insurance providers.",
    category: "revenue",
    image: "/insights/placeholder-4.jpg",
    date: "April 10, 2025",
    author: "David Thompson",
    readTime: "8 min read",
    featured: false,
    slug: "/insights/insurance-reimbursement",
  },
  {
    id: "staff-retention",
    title: "Solving the Staffing Crisis: Retention Strategies for Behavioral Health Organizations",
    description: "Practical approaches to improve staff retention and build a stable clinical team in today's competitive market.",
    category: "operations",
    image: "/insights/placeholder-5.jpg",
    date: "April 3, 2025",
    author: "Dr. Emily Chen",
    readTime: "10 min read",
    featured: false,
    slug: "/insights/staff-retention",
  },
  {
    id: "ai-in-behavioral-health",
    title: "AI in Behavioral Health: Practical Applications for Treatment Centers in 2025",
    description: "How artificial intelligence is transforming behavioral health operations, from clinical documentation to patient engagement.",
    category: "digital",
    image: "/insights/placeholder-6.jpg",
    date: "March 25, 2025",
    author: "Michael Johnson",
    readTime: "11 min read",
    featured: false,
    slug: "/insights/ai-in-behavioral-health",
  },
];

export default function InsightsPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const allPosts = blogPosts;
  const revenueOptimizationPosts = blogPosts.filter(post => post.category === "revenue");
  const patientAcquisitionPosts = blogPosts.filter(post => post.category === "marketing");
  const operationsPosts = blogPosts.filter(post => post.category === "operations");
  const digitalTransformationPosts = blogPosts.filter(post => post.category === "digital");

  // Newsletter subscription form state
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");
    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Newsletter subscription:", email);
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
          Insights for Behavioral Health Leaders
        </h1>
        <p className="text-xl text-muted-foreground">
          Expert strategies, trends, and best practices to help your
          behavioral health facility thrive in a challenging market.
        </p>
      </div>

      {/* Featured Articles */}
      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl font-heading">
          Featured Insights
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="flex h-full flex-col overflow-hidden">
              <div className="aspect-video bg-muted" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category === "revenue" && "Revenue Optimization"}
                    {post.category === "marketing" && "Patient Acquisition"}
                    {post.category === "operations" && "Operational Excellence"}
                    {post.category === "digital" && "Digital Transformation"}
                  </div>
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                </div>
                <CardTitle className="mt-2 text-2xl">
                  <Link href={post.slug} className="hover:text-primary">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={post.slug} className="group flex items-center gap-2 text-primary">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* All Articles Tabs */}
      <div>
        <h2 className="mb-8 text-2xl font-bold md:text-3xl font-heading">
          All Articles
        </h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="marketing">Patient Acquisition</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {allPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {revenueOptimizationPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {patientAcquisitionPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="operations" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {operationsPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="digital" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {digitalTransformationPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Subscribe CTA */}
      <div className="mt-16 rounded-xl bg-muted p-8 md:p-12">
        {!isSubscribed ? (
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground">
                Get the latest insights on behavioral health growth, revenue optimization,
                and patient acquisition strategies delivered to your inbox monthly.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col justify-center gap-4 md:flex-row">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                />
                {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
              </div>
              <Button type="submit" disabled={isSubscribing}>
                {isSubscribing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Thanks for Subscribing!</h2>
            <p className="text-muted-foreground">
              You've been added to our newsletter. Look out for our next issue with exclusive insights and strategies.
            </p>
          </div>
        )}
      </div>

      {/* Breadcrumbs */}
      <div className="mt-16 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span>Insights</span>
      </div>
    </div>
  );
}

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  featured: boolean;
  slug: string;
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <div className="aspect-video bg-muted" />
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.category === "revenue" && "Revenue Optimization"}
            {post.category === "marketing" && "Patient Acquisition"}
            {post.category === "operations" && "Operational Excellence"}
            {post.category === "digital" && "Digital Transformation"}
          </div>
        </div>
        <CardTitle className="mt-2">
          <Link href={post.slug} className="hover:text-primary">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-muted-foreground">{post.description}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={post.slug} className="group flex items-center gap-2 text-primary">
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
