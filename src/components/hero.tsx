import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Enhanced background patterns */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div
        className="absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-accent/10 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-secondary/5 blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>

      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-6">
            {/* Highlight badge */}
            <Badge className="w-fit mb-2 text-xs bg-primary/10 hover:bg-primary/20 text-primary border-none px-3 py-1">
              <Check className="h-3.5 w-3.5 mr-1" /> SPECIALIZED FOR BEHAVIORAL HEALTH
            </Badge>

            <h1 className="hero-text font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
              Accelerating Growth for{" "}
              <span className="text-gradient animate-gradient bg-[length:300%_300%] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Behavioral Health
              </span>{" "}
              Facilities
            </h1>

            <p className="text-xl text-muted-foreground">
              Specialized growth strategies to help treatment centers, detox facilities, PHPs, IOPs, and outpatient programs increase patient acquisition, optimize operations, and improve profitability.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
              <Link href="/contact" passHref>
                <Button size="lg" className="gap-2 h-12 px-6">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/assessment" passHref>
                <Button variant="outline" size="lg" className="gap-2 h-12 px-6">
                  Get Your Free Assessment
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Success metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-w-md">
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-xs text-muted-foreground">Facilities Served</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                <div className="text-2xl font-bold text-primary">35%</div>
                <div className="text-xs text-muted-foreground">Avg. Revenue Growth</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden md:block">
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="https://source.unsplash.com/cvBBO4PzWPg/800x1000"
                alt="Healthcare professional consulting with client"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-xl p-4 border border-border/60 max-w-[240px]">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Results Tracker</span>
              </div>
              <div className="text-xs text-muted-foreground mb-2">Highland Recovery Center</div>
              <div className="flex justify-between mb-1">
                <span className="text-xs">Census Growth</span>
                <span className="text-xs font-medium">40%</span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full mb-3">
                <div className="h-1.5 bg-primary rounded-full" style={{ width: "40%" }}></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-xs">Revenue Increase</span>
                <span className="text-xs font-medium">65%</span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full">
                <div className="h-1.5 bg-primary rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-6 text-sm font-medium text-muted-foreground text-center">
            TRUSTED BY LEADING BEHAVIORAL HEALTH FACILITIES
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex items-center justify-center h-12">
              <Image
                src="/logos/guardian-recovery.png"
                alt="Guardian Recovery"
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image
                src="/logos/mountainside.png"
                alt="Mountainside"
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image
                src="/logos/aware-recovery.png"
                alt="Aware Recovery"
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center h-12">
              <Image
                src="/logos/empower-health.png"
                alt="Empower Health"
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="hidden lg:flex items-center justify-center h-12">
              <Image
                src="/logos/mountainside.png"
                alt="Serenity Wellness"
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
