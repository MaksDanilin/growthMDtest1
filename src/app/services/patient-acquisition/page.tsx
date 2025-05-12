import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, CheckCircle, Users, Target, BarChart3, Network } from "lucide-react";

export const metadata = {
  title: "Patient Acquisition | The Growth MD",
  description: "Create a predictable flow of qualified patients for your behavioral health facility with ethical, data-driven acquisition strategies.",
};

export default function PatientAcquisitionPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span>Services</span>
        <ChevronRight className="h-4 w-4" />
        <span>Patient Acquisition</span>
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
            Ethical Patient Acquisition for Behavioral Health
          </h1>
          <p className="text-xl text-muted-foreground">
            Create a steady flow of qualified patients for your facility with data-driven,
            ethical acquisition strategies tailored to behavioral health.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-16 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2 space-y-10">
          {/* Overview Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl font-heading">
              Sustainable Growth Through Ethical Patient Acquisition
            </h2>
            <div className="space-y-4">
              <p>
                Patient acquisition in behavioral health requires a deep understanding of the
                unique ethical, clinical, and regulatory considerations of the field. Many
                facilities struggle with inconsistent referrals, high marketing costs, and
                difficulty differentiating their services from competitors.
              </p>
              <p>
                At The Growth MD, we've developed patient acquisition strategies specifically
                for behavioral health providers that balance ethical considerations with effective
                growth tactics. Our approach focuses on building sustainable referral networks,
                targeted digital marketing, and clear communication of your clinical value proposition.
              </p>
              <div className="my-8 aspect-video w-full rounded-lg bg-muted" />
              <p>
                We understand that not all patients are the right fit for every program. Our
                strategies focus on attracting patients who are clinically appropriate for your
                services, creating better outcomes for both your patients and your facility.
                Our clients typically see a 45% increase in qualified admissions within the
                first 90 days of implementation.
              </p>
            </div>
          </section>

          {/* What We Offer Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl font-heading">
              Our Patient Acquisition Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <Target className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Referral Network Development</h3>
                  <p className="text-muted-foreground">
                    Build and nurture relationships with key referral sources including hospitals,
                    primary care providers, therapists, and community organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <Users className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Digital Marketing Strategy</h3>
                  <p className="text-muted-foreground">
                    Targeted digital campaigns that reach potential patients and family members
                    at critical decision points in their treatment journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <BarChart3 className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Admissions Process Optimization</h3>
                  <p className="text-muted-foreground">
                    Streamline your intake and admissions process to convert more inquiries
                    into admissions while improving the experience for patients and families.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <Network className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Community Outreach Programs</h3>
                  <p className="text-muted-foreground">
                    Develop strategic community relationships and education initiatives that
                    position your facility as a trusted resource for behavioral health care.
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
                <h3 className="mb-4 text-xl font-bold">1. Market & Competitive Analysis</h3>
                <p className="mb-4">
                  We begin with a comprehensive analysis of your local market, target demographics,
                  and competitive landscape to identify growth opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Local market assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Competitive positioning analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Patient demographic profiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Service gap identification</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-xl font-bold">2. Strategy Development</h3>
                <p className="mb-4">
                  Based on our analysis, we develop a customized acquisition strategy that
                  aligns with your facility's clinical strengths and growth objectives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Targeted referral source mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Digital marketing channel selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Clinical messaging development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Budget allocation and ROI projections</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-xl font-bold">3. Implementation & Training</h3>
                <p className="mb-4">
                  We work alongside your team to implement the strategy, providing training,
                  resources, and ongoing support during the rollout phase.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Admissions team training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Referral outreach program launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Digital marketing campaign execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Intake process optimization</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="mb-4 text-xl font-bold">4. Monitoring & Optimization</h3>
                <p className="mb-4">
                  We continuously track key performance metrics and optimize the strategy
                  to improve results and adapt to changing market conditions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Weekly performance tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Channel effectiveness analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Conversion optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Quarterly strategy refinement</span>
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
              <h3 className="mb-4 text-xl font-bold">Ready to Grow Your Census?</h3>
              <p className="mb-6 text-muted-foreground">
                Book a free consultation to discuss your facility's patient acquisition
                challenges and discover how we can help you achieve predictable growth.
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
                  <p className="font-bold">45% Increase</p>
                  <p className="text-sm text-muted-foreground">Average growth in qualified admissions</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold">32% Lower</p>
                  <p className="text-sm text-muted-foreground">Average cost per acquisition</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold">3x Increase</p>
                  <p className="text-sm text-muted-foreground">In referral network productivity</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold">85% Census</p>
                  <p className="text-sm text-muted-foreground">Average sustained occupancy rate</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Related Content */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Related Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/insights/patient-acquisition-strategies" className="text-primary hover:underline">
                  Ethical Patient Acquisition Strategies for Behavioral Health Facilities
                </Link>
              </li>
              <li>
                <Link href="/case-studies/mindwell-iop" className="text-primary hover:underline">
                  Case Study: How MindWell IOP Scaled to Multiple Locations
                </Link>
              </li>
              <li>
                <Link href="/insights/digital-marketing-for-treatment-centers" className="text-primary hover:underline">
                  Digital Marketing Best Practices for Treatment Centers in 2025
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
            The Growth MD transformed our patient acquisition strategy with ethical, targeted
            approaches that aligned with our clinical values. Within 90 days, our inquiries
            increased by 68%, and our admissions grew by 42%. More importantly, the quality
            of patient matches improved, leading to better treatment outcomes and longer stays.
          </blockquote>
          <div>
            <div className="font-bold">Dr. Michael Chen</div>
            <div className="text-muted-foreground">Clinical Director, Evergreen Recovery Center</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-xl bg-primary p-8 text-white md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
            Ready to Fill Your Beds with the Right Patients?
          </h2>
          <p className="mb-8 text-white/80">
            Book a free consultation with our patient acquisition specialists to
            develop a strategy tailored to your facility's unique needs.
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
