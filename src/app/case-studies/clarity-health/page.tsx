import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ArrowUpRight, Settings, Building } from "lucide-react";

export const metadata = {
  title: "Clarity Mental Health Case Study | The Growth MD",
  description: "How we helped modernize operations and implement telehealth solutions to transform a traditional practice into a high-growth behavioral health provider.",
};

export default function ClarityHealthPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
        <ChevronRight className="h-4 w-4" />
        <span>Clarity Mental Health</span>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
            Clarity Mental Health
          </h1>
          <div className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Outpatient Behavioral Health
          </div>
        </div>
        <p className="mt-4 text-xl text-muted-foreground">
          Modernizing operations and implementing telehealth solutions to transform this traditional practice into a high-growth behavioral health provider.
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
            <div className="text-4xl font-bold text-accent">85%</div>
            <div className="mt-2 text-muted-foreground">Patient Growth</div>
          </div>
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">100%</div>
            <div className="mt-2 text-muted-foreground">Digital Transformation</div>
          </div>
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">-60%</div>
            <div className="mt-2 text-muted-foreground">Claim Processing Time</div>
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
                Clarity Mental Health, a well-established outpatient behavioral health practice with 12 therapists and 3 psychiatrists, was facing significant operational challenges that limited growth despite increasing market demand. The practice had been operating for over 15 years with minimal technological adoption and relied heavily on paper-based systems.
              </p>
              <p>
                Key challenges included:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Paper-based clinical documentation and scheduling systems causing inefficiencies</li>
                <li>Manual insurance verification and billing processes leading to claim denials and delayed payments</li>
                <li>Limited ability to offer telehealth services despite growing patient demand</li>
                <li>Ineffective marketing that relied primarily on physician referrals</li>
                <li>Staff frustration with outdated systems resulting in reduced productivity</li>
              </ul>
              <p>
                The leadership team recognized that while their clinical care was excellent, their operational infrastructure could not support growth and was increasingly becoming a competitive disadvantage in their market. They approached The Growth MD to help modernize their practice while preserving their clinical values and patient relationships.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Solution</h2>
            <div className="space-y-4">
              <p>
                After a comprehensive assessment of Clarity's operations, we implemented a phased digital transformation strategy:
              </p>
              <h3 className="text-xl font-medium text-primary">1. EHR Implementation & Digital Workflow Design</h3>
              <p>
                We selected and implemented a behavioral health-specific electronic health record system that matched Clarity's clinical workflows. This included custom templates for their specialty programs, integrated scheduling, and automated appointment reminders. The implementation was phased over 90 days, with extensive staff training to ensure adoption and minimize disruption.
              </p>

              <h3 className="text-xl font-medium text-primary">2. Revenue Cycle Optimization</h3>
              <p>
                We restructured Clarity's entire revenue cycle, implementing digital verification of benefits, automated eligibility checks, and streamlined claims submission processes. This included developing clear protocols for documentation to support medical necessity, implementing charge capture safeguards, and designing denial management workflows.
              </p>

              <h3 className="text-xl font-medium text-primary">3. Telehealth Integration</h3>
              <p>
                We implemented a HIPAA-compliant telehealth platform integrated with their new EHR, allowing clinicians to seamlessly transition between in-person and virtual care. This included developing telehealth-specific clinical protocols, training on virtual therapeutic techniques, and creating technical support processes for patients.
              </p>

              <h3 className="text-xl font-medium text-primary">4. Digital Marketing Strategy</h3>
              <p>
                We developed a comprehensive digital presence for Clarity, including a new website with online scheduling capabilities, condition-specific content marketing, targeted social media campaigns, and a strategic SEO plan. This was complemented by a referral management system to maintain and strengthen existing referral relationships.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Results</h2>
            <div className="space-y-4">
              <p>
                Within 12 months of implementing these changes, Clarity Mental Health experienced remarkable transformation:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li><strong>Increased patient volume by 85%</strong> through combined effects of telehealth adoption and improved marketing</li>
                <li><strong>Reduced claim processing time by 60%</strong> and decreased denial rate from 12% to 3%</li>
                <li><strong>Improved collections rate from 82% to 96%</strong> of billable services</li>
                <li><strong>Expanded service area from local only to entire state</strong> through telehealth services</li>
                <li><strong>Reduced administrative staff time on paperwork by 75%</strong> while improving documentation quality</li>
                <li><strong>Increased clinician capacity by 30%</strong> through more efficient scheduling and reduced documentation time</li>
              </ul>
              <p>
                Most significantly, Clarity was able to achieve these operational improvements while maintaining their culture of clinical excellence. The practice successfully added 4 new clinicians to meet growing demand and is now positioned as a modern, accessible, and patient-centered provider in their market.
              </p>
            </div>
          </section>
        </div>

        <div>
          <div className="rounded-xl border bg-card p-6 sticky top-24">
            <h3 className="mb-4 text-lg font-bold">Company Profile</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Practice Type</dt>
                <dd className="mt-1">Outpatient Mental Health Practice</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Clinician Count</dt>
                <dd className="mt-1">15 (12 therapists, 3 psychiatrists)</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Specialization</dt>
                <dd className="mt-1">General Mental Health & Psychiatry</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                <dd className="mt-1">Mid-sized Market, Eastern US</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Project Duration</dt>
                <dd className="mt-1">12 months</dd>
              </div>
            </dl>
            <div className="mt-6 border-t pt-6">
              <h3 className="mb-4 text-lg font-bold">Services Provided</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-primary" />
                  <span>EHR Selection & Implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Revenue Cycle Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-primary" />
                  <span>Telehealth Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                  <span>Digital Marketing Strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Workflow Redesign</span>
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
              <div className="font-bold">Dr. Rebecca Chen</div>
              <div className="text-primary-foreground/80">Founder & Clinical Director, Clarity Mental Health</div>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="text-4xl font-bold">"</div>
            <blockquote className="mt-2 text-xl">
              Working with The Growth MD transformed our practice in ways I never thought possible. I founded Clarity 15 years ago with a focus on clinical care, but our outdated systems were holding us back. Their team helped us modernize while preserving everything that made our practice special. The telehealth integration opened up access to patients who couldn't reach us before, and the EHR implementation has given our clinicians more time to focus on what matters most - patient care. I was worried about disrupting our practice culture, but they managed the change so well that even our most technology-averse team members are now champions of the new systems.
            </blockquote>
          </div>
        </div>
      </div>

      {/* Next/Prev Navigation */}
      <div className="flex items-center justify-between">
        <Link href="/case-studies/mindwell-iop" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          <span>Previous Case Study</span>
        </Link>
        <Link href="/case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <span>All Case Studies</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-xl bg-muted p-8 md:p-12">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
            Ready to Modernize Your Behavioral Health Practice?
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-muted-foreground">
            Our specialized digital transformation strategies for behavioral health practices can help you
            increase patient volume, streamline operations, and build sustainable growth.
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
