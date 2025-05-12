import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle, XCircle, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Revenue Optimization | The Growth MD",
  description: "Maximize your behavioral health facility's financial performance with our specialized revenue optimization services. Improve reimbursement rates, optimize billing, and enhance revenue cycle management.",
};

export default function RevenueOptimizationPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/services" className="hover:text-foreground">Services</Link>
        <ChevronRight className="h-4 w-4" />
        <span>Revenue Optimization</span>
      </div>

      {/* Hero section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-heading">
            Revenue <span className="text-primary">Optimization</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Unlock the full financial potential of your behavioral health facility through strategic revenue cycle management, payer mix optimization, and reimbursement rate improvements.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p>Increase reimbursement rates by an average of 15-25% within 6 months</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p>Improve claim acceptance rates and reduce days in AR by up to 40%</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p>Optimize your payer mix for improved profitability without compromising care</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/assessment">
                Get Your Free Assessment
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-tr from-primary/10 to-secondary/10 p-1 rounded-lg">
            <Image
              src="https://source.unsplash.com/uX0C8x2cLbY/800x600"
              alt="Revenue Optimization for Behavioral Health"
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-xl p-4 md:p-6 border border-border w-36 md:w-52">
            <DollarSign className="h-8 w-8 text-primary mb-2" />
            <div className="text-sm md:text-base font-medium">Average ROI</div>
            <div className="text-2xl md:text-3xl font-bold text-primary">4.2x</div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 md:p-6 rounded-lg border border-primary/10">
          <div className="text-3xl md:text-4xl font-bold text-primary">23%</div>
          <div className="text-sm md:text-base text-muted-foreground">Average Increase in Reimbursement Rates</div>
        </div>
        <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-4 md:p-6 rounded-lg border border-secondary/10">
          <div className="text-3xl md:text-4xl font-bold text-secondary">42%</div>
          <div className="text-sm md:text-base text-muted-foreground">Reduction in Denied Claims</div>
        </div>
        <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-4 md:p-6 rounded-lg border border-accent/10">
          <div className="text-3xl md:text-4xl font-bold text-accent">37%</div>
          <div className="text-sm md:text-base text-muted-foreground">Decrease in Days in AR</div>
        </div>
        <div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-4 md:p-6 rounded-lg border border-primary/10">
          <div className="text-3xl md:text-4xl font-bold" style={{ color: "#8b5cf6" }}>92%</div>
          <div className="text-sm md:text-base text-muted-foreground">Client Satisfaction Rate</div>
        </div>
      </div>

      {/* Process diagram */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Revenue Optimization Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A methodical approach to transform your facility's financial performance through proven optimization strategies
          </p>
        </div>

        <div className="relative">
          {/* Desktop process steps */}
          <div className="hidden md:block">
            <div className="absolute top-32 left-0 w-full border-t-2 border-dashed border-primary/30"></div>

            <div className="grid grid-cols-5 gap-6">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">1</div>
                <Card className="mt-10 h-full">
                  <CardHeader>
                    <CardTitle className="text-center">Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm">Comprehensive analysis of current revenue cycle, contracts, and financial performance</p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">2</div>
                <Card className="mt-10 h-full">
                  <CardHeader>
                    <CardTitle className="text-center">Strategy Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm">Custom revenue optimization plan based on facility type and payer mix</p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">3</div>
                <Card className="mt-10 h-full">
                  <CardHeader>
                    <CardTitle className="text-center">Implementation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm">Expert-guided execution of rate adjustments, process improvements and documentation changes</p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">4</div>
                <Card className="mt-10 h-full">
                  <CardHeader>
                    <CardTitle className="text-center">Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm">Continuous tracking of key metrics with weekly reporting and adjustments</p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">5</div>
                <Card className="mt-10 h-full">
                  <CardHeader>
                    <CardTitle className="text-center">Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm">Ongoing refinement and contract renegotiation for maximum sustainable revenue</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Mobile process steps */}
          <div className="md:hidden space-y-6">
            <div className="relative pl-10 pb-10 border-l-2 border-dashed border-primary/30">
              <div className="absolute top-0 left-0 -translate-x-1/2 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold shadow-lg">1</div>
              <h3 className="text-xl font-bold">Assessment</h3>
              <p className="text-sm text-muted-foreground">Comprehensive analysis of current revenue cycle, contracts, and financial performance</p>
            </div>

            <div className="relative pl-10 pb-10 border-l-2 border-dashed border-primary/30">
              <div className="absolute top-0 left-0 -translate-x-1/2 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold shadow-lg">2</div>
              <h3 className="text-xl font-bold">Strategy Development</h3>
              <p className="text-sm text-muted-foreground">Custom revenue optimization plan based on facility type and payer mix</p>
            </div>

            <div className="relative pl-10 pb-10 border-l-2 border-dashed border-primary/30">
              <div className="absolute top-0 left-0 -translate-x-1/2 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold shadow-lg">3</div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-sm text-muted-foreground">Expert-guided execution of rate adjustments, process improvements and documentation changes</p>
            </div>

            <div className="relative pl-10 pb-10 border-l-2 border-dashed border-primary/30">
              <div className="absolute top-0 left-0 -translate-x-1/2 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold shadow-lg">4</div>
              <h3 className="text-xl font-bold">Monitoring</h3>
              <p className="text-sm text-muted-foreground">Continuous tracking of key metrics with weekly reporting and adjustments</p>
            </div>

            <div className="relative pl-10">
              <div className="absolute top-0 left-0 -translate-x-1/2 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold shadow-lg">5</div>
              <h3 className="text-xl font-bold">Optimization</h3>
              <p className="text-sm text-muted-foreground">Ongoing refinement and contract renegotiation for maximum sustainable revenue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key areas section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Key Areas We Address</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Payer Contract Analysis & Negotiation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our experts identify opportunities in existing contracts and leverage industry benchmarks to negotiate improved rates.</p>

              <div className="space-y-2">
                <h4 className="font-medium">We help you:</h4>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Identify unfavorable contract terms and rate structures</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Benchmark your rates against industry standards</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Develop negotiation strategies specific to behavioral health</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Secure more favorable reimbursement rates and terms</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Cycle Management Optimization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We streamline your entire revenue cycle from initial verification to final payment, eliminating bottlenecks and reducing denials.</p>

              <div className="space-y-2">
                <h4 className="font-medium">We help you:</h4>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Implement efficient verification and authorization processes</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Optimize charge capture and coding accuracy</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Reduce claim denials and improve appeal success rates</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Accelerate payment cycles and reduce days in accounts receivable</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clinical Documentation Improvement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We ensure your clinical documentation supports medical necessity while maximizing appropriate reimbursement opportunities.</p>

              <div className="space-y-2">
                <h4 className="font-medium">We help you:</h4>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Align documentation with payer requirements</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Develop payer-specific documentation templates</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Train clinical staff on effective documentation practices</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Implement quality assurance processes for continuous improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Utilization Management & Length of Stay Optimization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We implement strategies to optimize appropriate length of stay while ensuring clinical quality and maximizing reimbursement.</p>

              <div className="space-y-2">
                <h4 className="font-medium">We help you:</h4>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Develop clinically appropriate utilization criteria</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Implement effective concurrent review processes</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Optimize treatment planning to justify appropriate length of stay</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>Create effective strategies for addressing payer denials</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Common challenges section */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Common Revenue Challenges We Solve</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Behavioral health facilities often face unique revenue challenges. Our specialized approach addresses the most common issues:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Low Reimbursement Rates</h4>
                  <p className="text-sm text-muted-foreground">Historical undervaluation of behavioral health services by insurance companies</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">High Denial Rates</h4>
                  <p className="text-sm text-muted-foreground">Complex authorization requirements and stringent medical necessity criteria</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Documentation Challenges</h4>
                  <p className="text-sm text-muted-foreground">Inadequate documentation to support medical necessity and level of care</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Utilization Management Conflicts</h4>
                  <p className="text-sm text-muted-foreground">Frequent length of stay denials and early discharge pressure from payers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Inefficient Billing Processes</h4>
                  <p className="text-sm text-muted-foreground">Delayed claims submission and ineffective follow-up procedures</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-primary/10 to-secondary/10 p-1 rounded-lg">
            <Image
              src="https://source.unsplash.com/ld8Thj3NC04/800x1000"
              alt="Revenue challenges in behavioral health"
              width={800}
              height={1000}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="mb-16 bg-secondary/10 p-8 md:p-12 rounded-xl">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <Image
                src="/testimonials/sarah-johnson.jpg"
                alt="Sarah Johnson"
                width={120}
                height={120}
                className="rounded-full object-cover h-24 w-24 md:h-32 md:w-32 border-4 border-white shadow-md"
              />
            </div>
            <div>
              <p className="text-lg md:text-xl italic mb-4">
                "The Growth MD's revenue optimization services transformed our financial performance. Within 6 months, we saw a 22% increase in our average reimbursement rates and a 40% reduction in denied claims. Their deep understanding of behavioral health billing is unmatched."
              </p>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-muted-foreground">CEO, Highland Recovery Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-medium">How quickly will we see results?</h3>
            <p className="text-muted-foreground">Most clients begin to see measurable improvements within 60 days, with significant financial impact evident by the 4-6 month mark as contract adjustments and process improvements take full effect.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium">Do you work with all facility types?</h3>
            <p className="text-muted-foreground">Yes, we specialize in all behavioral health settings including residential treatment, detox, PHP/IOP, and outpatient practices, with customized approaches for each level of care.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium">What makes your approach different?</h3>
            <p className="text-muted-foreground">Our exclusive focus on behavioral health means we understand the unique challenges of behavioral health reimbursement and have developed specialized strategies that general healthcare consultants typically miss.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium">How do you measure success?</h3>
            <p className="text-muted-foreground">We establish clear baseline metrics and track key performance indicators including average reimbursement rates, denial percentages, days in AR, and total revenue growth, providing regular transparent reporting.</p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden shadow-xl">
        <div className="p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Revenue?</h2>
            <p className="text-xl text-white/80 mb-8">
              Schedule a free consultation to discuss how we can help increase your facility's revenue and financial performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">
                  Book Your Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link href="/roi-calculator">
                  Try Our ROI Calculator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related services */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Payer Contracting</CardTitle>
              <CardDescription>Specialized insurance contract negotiation for behavioral health</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/services/payer-contracting">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Documentation Systems</CardTitle>
              <CardDescription>Implementing robust documentation practices that protect revenue</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/services/documentation-systems">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Operational Excellence</CardTitle>
              <CardDescription>Streamlining operations to reduce costs and improve margins</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/services/operational-excellence">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
