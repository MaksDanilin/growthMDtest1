import Link from "next/link";
import { Microscope, ArrowLeft, CheckCircle, BarChart3, LineChart, ClipboardList, FileText, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Outcomes Measurement | The Growth MD",
  description: "Implement systems to track, analyze, and leverage treatment outcomes data for improved patient care, marketing advantage, and payer relationships.",
};

export default function OutcomesMeasurementPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Outcomes Measurement</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
              <Microscope className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Outcomes Measurement
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Implement systems to track and analyze treatment outcomes for continuous improvement and marketing advantage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>The Power of Outcomes Measurement in Behavioral Health</h2>
                <p>
                  In today's behavioral health landscape, demonstrating treatment effectiveness through measurable outcomes is no longer optional—it's essential. Organizations that systematically track, analyze, and leverage outcomes data gain significant advantages in clinical quality, patient engagement, payer negotiations, and marketing differentiation.
                </p>
                <p>
                  Despite its importance, many behavioral health organizations struggle to implement effective outcomes measurement systems due to challenges with data collection methods, staff buy-in, measurement tool selection, and technical implementation.
                </p>

                <h3>The Impact of Effective Outcomes Measurement</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <Card className="border border-cyan-200 dark:border-cyan-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-100 dark:bg-cyan-900 p-2 rounded-full">
                          <LineChart className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">Clinical Quality Improvement</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Identify treatment approaches and interventions that yield the best results for specific patient populations and diagnoses.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-cyan-200 dark:border-cyan-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-100 dark:bg-cyan-900 p-2 rounded-full">
                          <FileText className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">Insurance Leverage</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Use outcomes data to demonstrate value to payers, potentially securing better reimbursement rates and preferred network status.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-cyan-200 dark:border-cyan-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-100 dark:bg-cyan-900 p-2 rounded-full">
                          <PieChart className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">Marketing Differentiation</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Create compelling marketing materials featuring verifiable outcome data that sets your facility apart from competitors.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-cyan-200 dark:border-cyan-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-100 dark:bg-cyan-900 p-2 rounded-full">
                          <ClipboardList className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">Accreditation Success</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Meet and exceed accrediting body requirements for outcomes tracking and performance improvement.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3>Our Outcomes Measurement Implementation Approach</h3>
                <p>
                  The Growth MD takes a comprehensive approach to helping behavioral health organizations implement effective outcomes measurement systems. We focus on creating sustainable processes that integrate seamlessly with your clinical workflows while providing actionable insights for all stakeholders.
                </p>

                <div className="space-y-6 my-6">
                  <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Assessment & Strategy</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Evaluation of current outcomes tracking practices and tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Stakeholder interviews to understand goals and pain points</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Selection of appropriate measurement tools and methodologies</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">System Design & Implementation</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Development of data collection workflows and protocols</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Integration with existing EHR and technology systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Creation of custom dashboards and reporting tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Staff Training & Change Management</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive training for clinical and administrative staff</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Development of processes to increase staff buy-in and compliance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Strategies for incorporating outcomes into clinical discussions</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Analysis & Utilization</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Advanced data analysis to identify meaningful patterns and insights</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Development of marketing materials featuring outcomes data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>Strategies for leveraging data in payer negotiations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>Measurement-Based Care: The Gold Standard</h3>
                <p>
                  We help organizations implement measurement-based care (MBC), a clinical practice that uses standardized tools to regularly monitor patient progress and adjust treatment accordingly. This approach has been shown to improve treatment outcomes by 20-60% compared to treatment as usual.
                </p>

                <div className="my-8 bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-cyan-700 dark:text-cyan-300 mb-4">Key Elements of Our Measurement-Based Care Implementation:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Validated Assessment Selection</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Guidance on selecting scientifically sound measurement tools appropriate for your specific patient population and treatment goals
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Systematic Data Collection</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Implementation of consistent data collection processes at admission, during treatment, at discharge, and post-discharge
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Real-Time Feedback Loops</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Systems for providing clinicians with timely patient progress data to inform treatment decisions and identify at-risk patients
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Patient Engagement Tools</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Methods for involving patients in tracking their own progress and understanding their treatment outcomes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Aggregate Data Analysis</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Powerful analytics to identify program-level trends, treatment effectiveness by population, and opportunities for improvement
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h3>Client Success Story</h3>
                <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center">
                      <Microscope className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Serenity Recovery Network</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Multi-Location Treatment Provider</p>
                    </div>
                  </div>
                  <blockquote className="italic text-slate-700 dark:text-slate-300 mb-4">
                    "The Growth MD transformed our approach to outcomes measurement. What was once a burdensome compliance requirement became a powerful clinical and business tool. Our outcomes data has helped us improve treatment effectiveness, secure better reimbursement rates, and develop compelling marketing materials that directly led to increased referrals."
                  </blockquote>
                  <p className="text-sm text-slate-600 dark:text-slate-400">— Dr. Sarah Johnson, Clinical Director</p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">87%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Data Collection Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">24%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Outcome Improvement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">15%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Increased Reimbursement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">32%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Referral Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Ready to Implement Outcomes Measurement?</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Book a free consultation to discuss your outcomes measurement needs and discover how we can help your organization leverage data for clinical and business success.
                  </p>
                  <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    <Link href="/contact">
                      Schedule Free Consultation
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-slate-500 dark:text-slate-500 mt-4">
                    No obligation, 30-minute strategy session
                  </p>
                </CardContent>
              </Card>

              {/* Key Benefits */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Benefits of Outcomes Measurement</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Enhanced Treatment Effectiveness</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Identify what works best for specific patient populations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Increased Referrals</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Differentiate your services with proven outcomes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Better Reimbursement</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Leverage data in payer negotiations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Accreditation Compliance</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Exceed regulatory and accreditation requirements</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div>
                <h3 className="text-lg font-bold mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/clinical-program-development" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      Clinical Program Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/documentation-systems" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      Documentation Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/compliance-accreditation" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      Compliance & Accreditation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/payer-contracting" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      Payer Contracting
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-bold mb-4">Free Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    <Link href="/resources/measurement-based-care" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      Guide to Measurement-Based Care
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    <Link href="/resources/outcomes-assessment-checklist" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      Outcomes Assessment Tool Selection Checklist
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-600 dark:bg-cyan-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transform Treatment Outcomes Into Your Competitive Advantage</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our outcomes measurement services help you implement systems that improve clinical quality, demonstrate value to payers, and differentiate your facility in the marketplace.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-white/90">
            <Link href="/contact">
              Schedule Your Outcomes Strategy Session
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
