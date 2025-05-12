import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ArrowUpRight, BarChart2 } from "lucide-react";

export const metadata = {
  title: "Highland Recovery Center Case Study | The Growth MD",
  description: "How we helped Highland Recovery Center increase census by 40% and improve insurance reimbursement rates in just 6 months through strategic growth initiatives.",
};

export default function HighlandRecoveryPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
        <ChevronRight className="h-4 w-4" />
        <span>Highland Recovery Center</span>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
            Highland Recovery Center
          </h1>
          <div className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Residential Treatment Center
          </div>
        </div>
        <p className="mt-4 text-xl text-muted-foreground">
          How we helped a struggling residential facility increase census by 40% and improve
          insurance reimbursement rates in just 6 months.
        </p>
      </div>

      {/* Featured Image */}
      <div className="mb-12 overflow-hidden rounded-xl bg-muted">
        <div className="aspect-video" />
      </div>

      {/* Key Metrics */}
      <div className="mb-12 rounded-xl bg-accent/10 p-8 md:p-12">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl font-heading">Key Results</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">40%</div>
            <div className="mt-2 text-muted-foreground">Census Increase</div>
          </div>
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">65%</div>
            <div className="mt-2 text-muted-foreground">Revenue Growth</div>
          </div>
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">+28%</div>
            <div className="mt-2 text-muted-foreground">Insurance Reimbursement Rate</div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mb-12 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Challenge</h2>
            <div className="space-y-4">
              <p>
                Highland Recovery Center, a 32-bed residential treatment facility specializing in dual diagnosis
                treatment, was struggling with low census numbers and declining revenue. Despite an experienced
                clinical team and strong treatment outcomes, the facility was operating at just 55% capacity.
              </p>
              <p>
                Key challenges included:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Inconsistent referral sources and poor coordination with detox centers</li>
                <li>Sub-optimal insurance verification and utilization review processes</li>
                <li>Limited marketing presence in their service area</li>
                <li>High staff turnover in key admissions and business development roles</li>
                <li>Inefficient billing practices leading to denied claims and delayed payments</li>
              </ul>
              <p>
                The facility's leadership team recognized these challenges but lacked the specialized expertise
                needed to address them systematically. They approached The Growth MD seeking a comprehensive
                solution to improve census, optimize revenue cycle management, and create sustainable growth.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Solution</h2>
            <div className="space-y-4">
              <p>
                We worked closely with Highland's leadership team to implement a multi-faceted growth strategy:
              </p>
              <h3 className="text-xl font-medium text-primary">1. Revenue Cycle Optimization</h3>
              <p>
                We began by conducting a thorough audit of Highland's revenue cycle, from insurance verification
                to claims submission. We identified significant inefficiencies and implemented new processes that
                increased reimbursement rates and accelerated payment timelines.
              </p>

              <h3 className="text-xl font-medium text-primary">2. Referral Network Development</h3>
              <p>
                We mapped the local treatment ecosystem and developed strategic partnerships with complementary
                providers, particularly detox centers and outpatient programs. We created formal referral agreements
                and communication protocols that established Highland as a preferred residential provider.
              </p>

              <h3 className="text-xl font-medium text-primary">3. Admissions Team Restructuring</h3>
              <p>
                We redesigned the admissions department structure and implemented comprehensive training for the
                admissions team. This included developing clear protocols for responding to inquiries, conducting
                clinical pre-assessments, and managing the intake process to minimize barriers to entry.
              </p>

              <h3 className="text-xl font-medium text-primary">4. Targeted Digital Marketing</h3>
              <p>
                We developed a focused digital marketing strategy highlighting Highland's specialized dual diagnosis
                programming. This included website optimization, local SEO, targeted PPC campaigns, and content
                development focused on their clinical differentiators.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Results</h2>
            <div className="space-y-4">
              <p>
                Within six months of implementing our recommendations, Highland Recovery Center experienced
                dramatic improvements:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li><strong>Census increased from 55% to 77%</strong> (a 40% improvement)</li>
                <li><strong>Revenue grew by 65%</strong> due to both increased census and improved reimbursement rates</li>
                <li><strong>Insurance reimbursement rates improved by 28%</strong> through better utilization review and documentation</li>
                <li><strong>Referral partnerships generated 42%</strong> of all new admissions</li>
                <li><strong>Admissions team retention improved to 85%</strong> from a previous 40%</li>
                <li><strong>Website traffic increased by 215%</strong> with a 4.8x improvement in conversion rates</li>
              </ul>
              <p>
                Most importantly, Highland was able to maintain its commitment to clinical excellence while
                significantly improving its financial performance. The facility is now operating consistently
                at 85-90% capacity, providing financial stability that has allowed for program expansion and
                quality improvements.
              </p>
            </div>
          </section>
        </div>

        <div>
          <div className="rounded-xl border bg-card p-6 sticky top-24">
            <h3 className="mb-4 text-lg font-bold">Company Profile</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Facility Type</dt>
                <dd className="mt-1">Residential Treatment Center</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Bed Capacity</dt>
                <dd className="mt-1">32 beds</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Specialization</dt>
                <dd className="mt-1">Dual Diagnosis Treatment</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                <dd className="mt-1">Western United States</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Project Duration</dt>
                <dd className="mt-1">6 months</dd>
              </div>
            </dl>
            <div className="mt-6 border-t pt-6">
              <h3 className="mb-4 text-lg font-bold">Services Provided</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  <span>Revenue Cycle Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                  <span>Referral Network Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  <span>Admissions Process Redesign</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                  <span>Digital Marketing Strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  <span>Staff Training & Development</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="w-full">
                  Get Similar Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mb-12 rounded-xl bg-primary p-8 text-primary-foreground md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="md:w-1/4">
            <div className="aspect-square w-24 rounded-full bg-primary-foreground/10" />
            <div className="mt-4">
              <div className="font-bold">Dr. James Wilson</div>
              <div className="text-primary-foreground/80">CEO, Highland Recovery Center</div>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="text-4xl font-bold">"</div>
            <blockquote className="mt-2 text-xl">
              Working with The Growth MD transformed our facility from struggling to thriving. Their team understood
              the unique challenges of behavioral healthcare and provided actionable strategies that delivered real
              results. What sets them apart is their deep understanding of both the clinical and business aspects of
              treatment centers. We're now able to help more patients while building a sustainable business.
            </blockquote>
          </div>
        </div>
      </div>

      {/* Next/Prev Navigation */}
      <div className="flex items-center justify-between">
        <Link href="/case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Case Studies</span>
        </Link>
        <Link href="/case-studies/serenity-detox" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <span>Next Case Study</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-xl bg-muted p-8 md:p-12">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
            Ready to Achieve Similar Results for Your Facility?
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-muted-foreground">
            Our specialized growth strategies for behavioral health facilities can help you
            increase census, optimize revenue, and build sustainable growth.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                Explore More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
