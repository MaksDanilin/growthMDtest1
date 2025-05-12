import Link from "next/link";
import { Brain, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClinicalProgramDevelopmentPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Clinical Program Development</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
              <Brain className="h-8 w-8 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Clinical Program Development
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Design evidence-based treatment programs that improve outcomes and differentiate your facility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>Transform Your Clinical Approach</h2>
                <p>
                  In today's competitive behavioral health landscape, your clinical programming can be your biggest differentiator.
                  The Growth MD helps behavioral health organizations develop, refine, and implement evidence-based treatment programs
                  that not only improve patient outcomes but also distinguish your facility in the marketplace.
                </p>

                <h3>Our Approach to Clinical Program Development</h3>
                <p>
                  We begin with a comprehensive assessment of your current clinical offerings, patient population, and market position.
                  Our team of clinical experts then works with your leadership to design programs that align with your organization's
                  mission and goals while incorporating the latest research and best practices in behavioral healthcare.
                </p>

                <div className="my-8">
                  <h3>Our Clinical Program Development Services Include:</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 mt-0.5" />
                      <span>Evidence-based treatment protocol development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 mt-0.5" />
                      <span>Specialty program design (trauma, dual diagnosis, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 mt-0.5" />
                      <span>Clinical staff training and implementation support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 mt-0.5" />
                      <span>Treatment outcome measurement systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 mt-0.5" />
                      <span>Clinical documentation workflow optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2 mt-0.5" />
                      <span>Program marketing and differentiation strategy</span>
                    </li>
                  </ul>
                </div>

                <h3>Why Clinical Programming Matters</h3>
                <p>
                  Strong clinical programs not only lead to better patient outcomes but also:
                </p>
                <ul>
                  <li>Increase referrals from healthcare providers who recognize your specialized expertise</li>
                  <li>Improve insurance reimbursement rates through demonstrated outcomes</li>
                  <li>Enhance staff satisfaction and retention by providing clear treatment protocols</li>
                  <li>Reduce liability through consistent, evidence-based practices</li>
                  <li>Create marketing differentiation in competitive markets</li>
                </ul>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg my-8">
                  <h3 className="text-slate-900 dark:text-white">Case Study: Transformation Through Programming</h3>
                  <p className="mb-0">
                    A 32-bed residential treatment center was struggling with census and high patient dropout rates.
                    Our team developed a specialized trauma-informed care program with clear protocols, staff training,
                    and outcome measures. Within six months, the facility achieved 95% occupancy, reduced dropout rates
                    by 35%, and secured preferred provider status with three major insurance companies.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <Card className="mb-6 border-pink-200 dark:border-pink-800">
                <CardHeader className="bg-pink-50 dark:bg-pink-900 rounded-t-lg">
                  <CardTitle className="text-slate-900 dark:text-white">Ready to Transform Your Clinical Programs?</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Schedule a free consultation to discuss how we can help you develop clinical programs that improve outcomes and set your facility apart.
                  </p>
                  <Button asChild size="lg" className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    <Link href="/assessment">
                      Get Your Free Assessment
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="mb-6 border-slate-200 dark:border-slate-800">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 mr-4" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Dr. Sarah Johnson</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Clinical Director, Harmony Healing Center</p>
                    </div>
                  </div>
                  <p className="italic text-slate-600 dark:text-slate-400">
                    "The clinical programs developed with The Growth MD have completely transformed our treatment outcomes. Our clients are more engaged, our staff more confident, and our referral partners consistently impressed with our specialized approach."
                  </p>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Services</CardTitle>
                  <CardDescription>Explore other ways we can help</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/staff-training-retention" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Staff Training & Retention
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/outcomes-measurement" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Outcomes Measurement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/documentation-systems" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Documentation Systems
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Ready to Elevate Your Clinical Programming?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Our team of clinical experts is ready to help you develop programs that improve outcomes and differentiate your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                <Link href="/assessment">
                  Get Your Free Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-950">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
