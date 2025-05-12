import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ArrowUpRight, Settings, Users } from "lucide-react";

export const metadata = {
  title: "Serenity Detox Solutions Case Study | The Growth MD",
  description: "How we helped Serenity Detox Solutions achieve 90% occupancy and reduce staff turnover by transforming operations and building strong referral networks.",
};

export default function SerenityDetoxPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
        <ChevronRight className="h-4 w-4" />
        <span>Serenity Detox Solutions</span>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
            Serenity Detox Solutions
          </h1>
          <div className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Medical Detoxification Center
          </div>
        </div>
        <p className="mt-4 text-xl text-muted-foreground">
          Transforming operations and referral networks to help this detox facility achieve consistent 90% occupancy while reducing staff turnover.
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
            <div className="text-4xl font-bold text-accent">90%</div>
            <div className="mt-2 text-muted-foreground">Occupancy Rate</div>
          </div>
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">+45%</div>
            <div className="mt-2 text-muted-foreground">Staff Retention</div>
          </div>
          <div className="rounded-lg bg-background p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-accent">3x</div>
            <div className="mt-2 text-muted-foreground">Referral Growth</div>
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
                Serenity Detox Solutions, a 24-bed medical detoxification facility, was facing significant operational challenges despite offering high-quality clinical care. Their average occupancy had dropped to 62%, and they were experiencing high staff turnover rates, particularly among nursing staff.
              </p>
              <p>
                Key challenges included:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Inconsistent staffing patterns leading to high overtime costs and burnout</li>
                <li>Weak relationships with residential treatment centers for patient placement after detox</li>
                <li>Inefficient admissions protocols causing delays in intake and lost opportunities</li>
                <li>Billing and utilization review problems resulting in shortened lengths of stay</li>
                <li>Poor staff onboarding and training leading to high turnover (over 60% annually)</li>
              </ul>
              <p>
                The facility's clinical director and ownership group recognized that these operational issues were undermining their clinical mission and financial sustainability. They approached The Growth MD to develop solutions that would stabilize operations while maintaining their commitment to quality care.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Solution</h2>
            <div className="space-y-4">
              <p>
                After conducting a comprehensive operational assessment, we implemented a multi-faceted strategy to address Serenity's challenges:
              </p>
              <h3 className="text-xl font-medium text-primary">1. Staffing Model Redesign</h3>
              <p>
                We completely restructured their staffing patterns to align with patient flow and acuity needs. This included implementing a flexible scheduling system, optimizing nurse-to-patient ratios, and creating a more effective on-call system to handle admission surges.
              </p>

              <h3 className="text-xl font-medium text-primary">2. Strategic Placement Partnerships</h3>
              <p>
                We developed formal relationships with residential and outpatient providers in their region, establishing Serenity as a preferred detox provider. This included implementing a dedicated placement coordinator role and creating streamlined handoff protocols to ensure smooth transitions of care.
              </p>

              <h3 className="text-xl font-medium text-primary">3. Rapid-Response Admissions Process</h3>
              <p>
                We redesigned their admissions workflow to enable same-day intake for medically appropriate patients. This included implementing a centralized verification system, developing clinical pre-screening protocols, and creating a dedicated "rapid admission" team.
              </p>

              <h3 className="text-xl font-medium text-primary">4. Staff Retention Program</h3>
              <p>
                We implemented a comprehensive staff retention initiative that included improved onboarding, clinical mentorship programs, competitive compensation analysis, and career advancement pathways. Special attention was paid to nursing staff retention through targeted incentives and quality-of-life improvements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Results</h2>
            <div className="space-y-4">
              <p>
                Within six months of implementation, Serenity Detox Solutions experienced dramatic improvements:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li><strong>Average occupancy increased from 62% to 90%</strong>, creating consistent full census on most days</li>
                <li><strong>Staff turnover decreased by 45%</strong>, with nursing retention improving from 40% to 85%</li>
                <li><strong>Overtime costs decreased by 62%</strong> despite higher patient volume</li>
                <li><strong>Successful placement rate reached 94%</strong> of eligible patients</li>
                <li><strong>Average time from initial call to admission decreased by 68%</strong></li>
                <li><strong>Referral relationships grew by 3x</strong>, creating a steady flow of new patients</li>
              </ul>
              <p>
                Most importantly, these operational improvements allowed Serenity to reinvest in its clinical program and staff development. The facility is now recognized as a premier detoxification provider in its region, with strong partnerships across the continuum of care. Their financial performance has stabilized, allowing for planned expansion of services.
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
                <dd className="mt-1">Medical Detoxification Center</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Bed Capacity</dt>
                <dd className="mt-1">24 beds</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Specialization</dt>
                <dd className="mt-1">Alcohol, Opioid, and Polysubstance Detox</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                <dd className="mt-1">Midwest United States</dd>
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
                  <Users className="h-4 w-4 text-primary" />
                  <span>Staffing Model Redesign</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                  <span>Strategic Placement Partnerships</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-primary" />
                  <span>Admissions Process Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Staff Retention Program</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-primary" />
                  <span>Utilization Review Enhancement</span>
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
              <div className="font-bold">Jennifer Wallace</div>
              <div className="text-primary-foreground/80">Executive Director, Serenity Detox Solutions</div>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="text-4xl font-bold">"</div>
            <blockquote className="mt-2 text-xl">
              Working with The Growth MD completely transformed our facility. Their operational expertise helped us create systems that work for both our staff and patients. The staffing model they developed has dramatically improved morale and retention, while their admissions redesign has allowed us to help more patients when they need it most. Our relationships with treatment centers have never been stronger, and our financial performance reflects these improvements.
            </blockquote>
          </div>
        </div>
      </div>

      {/* Next/Prev Navigation */}
      <div className="flex items-center justify-between">
        <Link href="/case-studies/highland-recovery" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          <span>Previous Case Study</span>
        </Link>
        <Link href="/case-studies/mindwell-iop" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <span>Next Case Study</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-xl bg-muted p-8 md:p-12">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
            Ready to Optimize Your Detox Facility's Operations?
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-muted-foreground">
            Our specialized operational strategies for detox facilities can help you increase occupancy,
            improve staff retention, and build sustainable growth.
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
