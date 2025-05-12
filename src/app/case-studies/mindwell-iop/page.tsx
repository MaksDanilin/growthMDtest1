import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ArrowUpRight, LineChart, TrendingUp } from "lucide-react";

export const metadata = {
  title: "MindWell Intensive Outpatient Case Study | The Growth MD",
  description: "How we helped MindWell Intensive Outpatient Program scale to multiple locations using data-driven patient acquisition strategies while maintaining clinical excellence.",
};

export default function MindwellIOPPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
        <ChevronRight className="h-4 w-4" />
        <span>MindWell Intensive Outpatient</span>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
            MindWell Intensive Outpatient
          </h1>
          <div className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            PHP/IOP Program
          </div>
        </div>
        <p className="mt-4 text-xl text-muted-foreground">
          Using data-driven patient acquisition strategies to help this PHP/IOP program scale to multiple locations while maintaining clinical excellence.
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
            <div className="text-4xl font-bold text-accent">+125%</div>
            <div className="mt-2 text-muted-foreground">Patient Volume</div>
          </div>
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">3</div>
            <div className="mt-2 text-muted-foreground">New Locations</div>
          </div>
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">4.2x</div>
            <div className="mt-2 text-muted-foreground">Marketing ROI</div>
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
                MindWell Intensive Outpatient Program, a provider of PHP and IOP services for mental health and substance use disorders, faced significant challenges in a competitive urban market. With one successful location, they aimed to expand but lacked the systems and strategies to scale effectively.
              </p>
              <p>
                Key challenges included:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Inefficient patient acquisition processes with high cost-per-admission</li>
                <li>Inconsistent clinical outcomes across different therapists and groups</li>
                <li>Limited data utilization for business and clinical decision-making</li>
                <li>Low visibility in their service area despite strong patient testimonials</li>
                <li>Difficulty in maintaining program quality while planning expansion</li>
              </ul>
              <p>
                While MindWell delivered exceptional treatment at their original location, attempting to replicate this success at new sites proved challenging. Without standardized processes and systems, their expansion efforts stalled, and marketing costs continued to rise without proportional patient growth.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Solution</h2>
            <div className="space-y-4">
              <p>
                After conducting a comprehensive assessment of MindWell's operations and growth potential, we implemented a multi-faceted strategy:
              </p>
              <h3 className="text-xl font-medium text-primary">1. Data-Driven Patient Acquisition System</h3>
              <p>
                We developed a comprehensive digital marketing strategy built around measurable patient acquisition funnels. This included implementing advanced tracking systems to monitor the entire patient journey from initial contact to admission, allowing for continuous optimization of marketing spend and messaging.
              </p>

              <h3 className="text-xl font-medium text-primary">2. Clinical Program Standardization</h3>
              <p>
                We helped MindWell develop standardized clinical protocols and treatment pathways that maintained therapeutic flexibility while ensuring consistent quality across all locations. This included implementing evidence-based assessment tools, structured treatment planning processes, and outcome measurement systems.
              </p>

              <h3 className="text-xl font-medium text-primary">3. Scalable Operations Model</h3>
              <p>
                We designed a hub-and-spoke operational model that centralized key administrative functions while allowing new locations to focus on clinical excellence. This included standardized intake processes, centralized insurance verification, unified electronic health records, and consistent staff training programs.
              </p>

              <h3 className="text-xl font-medium text-primary">4. Strategic Location Selection</h3>
              <p>
                Using demographic analysis, competition mapping, and insurance coverage data, we helped MindWell identify ideal locations for expansion. This data-driven approach ensured new facilities were positioned in areas with high demand and favorable reimbursement conditions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Results</h2>
            <div className="space-y-4">
              <p>
                Within 18 months of implementing our recommendations, MindWell achieved remarkable growth:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li><strong>Expanded from 1 to 4 locations</strong> across the metropolitan area</li>
                <li><strong>Increased patient volume by 125%</strong> with consistent clinical outcomes across all sites</li>
                <li><strong>Reduced marketing cost-per-admission by 58%</strong> through targeted digital strategies</li>
                <li><strong>Achieved 4.2x return on marketing investment</strong>, up from 1.8x previously</li>
                <li><strong>Standardized clinical protocols</strong> resulted in a 32% improvement in treatment completion rates</li>
                <li><strong>Built a sustainable growth model</strong> that maintained 90%+ patient satisfaction scores</li>
              </ul>
              <p>
                Most importantly, MindWell successfully scaled their operations without compromising their clinical excellence. Their program became known as the premier PHP/IOP provider in their region, with strong referral relationships from both healthcare providers and community organizations. The standardized systems we implemented provided a foundation for continued growth, allowing MindWell to plan further expansion into neighboring markets.
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
                <dd className="mt-1">PHP/IOP Mental Health & Addiction Program</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Capacity</dt>
                <dd className="mt-1">25-40 patients per location</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Specialization</dt>
                <dd className="mt-1">Dual Diagnosis & Mental Health Treatment</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                <dd className="mt-1">Major Metropolitan Area</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Project Duration</dt>
                <dd className="mt-1">18 months</dd>
              </div>
            </dl>
            <div className="mt-6 border-t pt-6">
              <h3 className="mb-4 text-lg font-bold">Services Provided</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>Patient Acquisition System Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-primary" />
                  <span>Clinical Program Standardization</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>Scalable Operations Model</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                  <span>Strategic Location Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-primary" />
                  <span>Marketing Strategy & Optimization</span>
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
              <div className="font-bold">Dr. Sarah Johnson</div>
              <div className="text-primary-foreground/80">Clinical Director, MindWell Intensive Outpatient</div>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="text-4xl font-bold">"</div>
            <blockquote className="mt-2 text-xl">
              Working with The Growth MD transformed how we approach growth and clinical quality. Their data-driven systems allowed us to scale rapidly while actually improving our patient outcomes. The marketing strategies they implemented brought in exactly the right patients for our programs, and their standardized clinical protocols made it possible to maintain our high standards across all locations. I'm most proud that we've been able to help significantly more people while enhancing our reputation for clinical excellence.
            </blockquote>
          </div>
        </div>
      </div>

      {/* Next/Prev Navigation */}
      <div className="flex items-center justify-between">
        <Link href="/case-studies/serenity-detox" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          <span>Previous Case Study</span>
        </Link>
        <Link href="/case-studies/clarity-health" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <span>Next Case Study</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-xl bg-muted p-8 md:p-12">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
            Ready to Scale Your PHP/IOP Program?
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-muted-foreground">
            Our specialized growth strategies for behavioral health outpatient programs can help you
            increase patient volume, expand to new locations, and build sustainable growth.
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
