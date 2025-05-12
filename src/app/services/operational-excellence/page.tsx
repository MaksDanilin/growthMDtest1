import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, CheckCircle, Settings, BarChart3, ClipboardCheck, Workflow } from "lucide-react";

export const metadata = {
  title: "Operational Excellence | The Growth MD",
  description: "Streamline your behavioral health facility's operations with proven systems to improve efficiency, reduce costs, and enhance care quality.",
};

export default function OperationalExcellencePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span>Services</span>
        <ChevronRight className="h-4 w-4" />
        <span>Operational Excellence</span>
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
            Operational Excellence for Behavioral Health
          </h1>
          <p className="text-xl text-muted-foreground">
            Streamline your operations with proven systems to improve efficiency,
            reduce costs, and enhance care quality across your facility.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-16 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2 space-y-10">
          {/* Overview Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl font-heading">
              Optimize Your Facility's Operations for Peak Performance
            </h2>
            <div className="space-y-4">
              <p>
                Behavioral health facilities face unique operational challenges that
                general business consultants often don't understand. From clinical
                workflows and utilization management to staffing models and regulatory
                compliance, the complexity of behavioral health operations requires
                specialized expertise.
              </p>
              <p>
                At The Growth MD, our operational excellence services are designed
                specifically for the behavioral health sector. We focus on creating
                efficient, effective processes that reduce administrative burden,
                lower costs, and allow your clinical team to focus on what matters
                most - providing exceptional patient care.
              </p>
              <div className="my-8 aspect-video w-full rounded-lg bg-muted" />
              <p>
                Our team includes former behavioral health executives, operations
                specialists, and process improvement experts who have worked with
                treatment centers, detox facilities, PHPs, IOPs, and outpatient programs.
                We understand the unique challenges you face and bring proven methodologies
                that have helped facilities improve operational efficiency by an average
                of 42% while enhancing clinical quality.
              </p>
            </div>
          </section>

          {/* What We Offer Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl font-heading">
              Our Operational Excellence Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <ClipboardCheck className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Process Optimization</h3>
                  <p className="text-muted-foreground">
                    Streamline clinical and administrative workflows to eliminate
                    waste, reduce errors, and improve patient and staff experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <Settings className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Staffing Models & Productivity</h3>
                  <p className="text-muted-foreground">
                    Develop effective staffing models that align with census fluctuations,
                    optimize productivity, and reduce turnover and burnout.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <BarChart3 className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Performance Metrics & KPIs</h3>
                  <p className="text-muted-foreground">
                    Implement meaningful operational metrics and dashboards that
                    provide actionable insights for continuous improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <Workflow className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Compliance & Quality Systems</h3>
                  <p className="text-muted-foreground">
                    Develop efficient systems for maintaining regulatory compliance
                    and clinical quality while minimizing administrative burden.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Process Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl font-heading">
              Our Approach
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-xl font-bold">1. Comprehensive Operational Assessment</h3>
                <p className="mb-4">
                  We begin with a thorough analysis of your current operations,
                  identifying inefficiencies, bottlenecks, and opportunities for improvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Process mapping and workflow analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Staffing model evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Technology utilization assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Compliance and quality review</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-xl font-bold">2. Strategic Improvement Planning</h3>
                <p className="mb-4">
                  Based on our assessment, we develop a prioritized roadmap for
                  operational improvements with clear ROI projections and timelines.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Prioritized improvement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Resource requirements and allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Implementation timeline and milestones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Expected outcomes and ROI projections</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-xl font-bold">3. Implementation & Change Management</h3>
                <p className="mb-4">
                  We work alongside your team to implement operational improvements,
                  providing training, tools, and change management support.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Process redesign and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Staff training and development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Change management and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Technology integration and optimization</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-xl font-bold">4. Performance Monitoring & Continuous Improvement</h3>
                <p className="mb-4">
                  We establish metrics, dashboards, and review processes to monitor
                  performance and drive ongoing operational excellence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Key performance indicator tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Regular performance reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Continuous improvement methodology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Ongoing operational support as needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* CTA Card */}
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Ready to Optimize Your Operations?</h3>
              <p className="mb-6 text-muted-foreground">
                Book a free consultation to discuss your facility's operational challenges
                and discover how we can help you achieve greater efficiency and effectiveness.
              </p>
              <Link href="/contact">
                <Button className="w-full" size="lg">
                  Book Free Consultation
                </Button>
              </Link>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                No obligation, 30-minute consultation
              </div>
            </CardContent>
          </Card>

          {/* Results Box */}
          <div className="rounded-lg bg-muted p-6">
            <h3 className="mb-4 text-lg font-bold">Results Our Clients Achieve</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold">42% Improvement</p>
                  <p className="text-sm text-muted-foreground">Average operational efficiency increase</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold">35% Reduction</p>
                  <p className="text-sm text-muted-foreground">In administrative staff time</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold">28% Lower</p>
                  <p className="text-sm text-muted-foreground">Staff turnover rate</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold">22% Cost Reduction</p>
                  <p className="text-sm text-muted-foreground">Average decrease in operational costs</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Related Content */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Related Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/insights/staff-retention" className="text-primary hover:underline">
                  Solving the Staffing Crisis: Retention Strategies for Behavioral Health Organizations
                </Link>
              </li>
              <li>
                <Link href="/case-studies/clarity-health" className="text-primary hover:underline">
                  Case Study: Clarity Mental Health's Operational Transformation
                </Link>
              </li>
              <li>
                <Link href="/insights/quality-improvement" className="text-primary hover:underline">
                  Quality Improvement Strategies for Behavioral Health Facilities
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mb-16 rounded-xl bg-secondary p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 text-4xl font-bold">"</div>
          <blockquote className="mb-6 text-xl font-medium italic">
            The Growth MD's operational excellence program transformed our facility's
            efficiency and cost structure. Their team identified workflow improvements
            that reduced our administrative burden by 35% and allowed our clinical team
            to spend more time with patients. The financial impact has been significant,
            with operational costs down by 24% and staff satisfaction scores at an all-time high.
          </blockquote>
          <div>
            <div className="font-bold">Lisa Washington</div>
            <div className="text-muted-foreground">CEO, Valley Behavioral Health Center</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-xl bg-primary p-8 text-white md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
            Ready to Transform Your Facility's Operations?
          </h2>
          <p className="mb-8 text-white/80">
            Book a free consultation with our operational excellence specialists to
            discover how we can help your behavioral health facility achieve greater
            efficiency, quality, and staff satisfaction.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
