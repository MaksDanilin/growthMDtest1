import Link from "next/link";
import { ClipboardCheck, ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ComplianceAccreditationPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Compliance & Accreditation</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
              <ClipboardCheck className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Compliance & Accreditation
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Navigate regulatory requirements and achieve accreditation standards with confidence and efficiency
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
                <h2>Navigate the Compliance Landscape with Confidence</h2>
                <p>
                  In today's highly regulated behavioral health environment, maintaining compliance and achieving accreditation
                  is not just about meeting minimum standards—it's essential to your organization's reputation, reimbursement rates,
                  and ability to deliver quality care.
                </p>

                <p>
                  The Growth MD's compliance and accreditation specialists combine deep regulatory knowledge with practical
                  operational experience to help your facility navigate complex requirements efficiently while improving
                  your clinical and business operations.
                </p>

                <h3>Our Comprehensive Compliance & Accreditation Services</h3>
                <div className="my-8">
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                      <span><strong>Gap Analysis and Readiness Assessment:</strong> Comprehensive evaluation of your organization's current compliance status against regulatory and accreditation requirements.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                      <span><strong>Accreditation Preparation:</strong> Expert guidance for CARF, Joint Commission, and other accreditation bodies' requirements and processes.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                      <span><strong>Policy & Procedure Development:</strong> Creation of customized compliance documentation that meets regulatory requirements while being operationally practical.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                      <span><strong>Staff Training:</strong> Focused education to ensure your team understands compliance requirements and integrates them into daily operations.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                      <span><strong>Mock Surveys and Audits:</strong> Thorough preparation to identify and address issues before official surveys.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                      <span><strong>Ongoing Compliance Management:</strong> Systems and processes to maintain compliance between accreditation cycles.</span>
                    </li>
                  </ul>
                </div>

                <h3>Major Accreditations We Assist With</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="bg-amber-50 dark:bg-amber-950 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <ShieldCheck className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">CARF</h4>
                    </div>
                    <p className="text-sm mb-0">Commission on Accreditation of Rehabilitation Facilities - focused on quality standards for behavioral health services.</p>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <ShieldCheck className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">The Joint Commission</h4>
                    </div>
                    <p className="text-sm mb-0">Gold standard for healthcare accreditation, with specific behavioral health care standards.</p>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <ShieldCheck className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">NCQA</h4>
                    </div>
                    <p className="text-sm mb-0">National Committee for Quality Assurance - focuses on quality healthcare service delivery.</p>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <ShieldCheck className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">State Licensure</h4>
                    </div>
                    <p className="text-sm mb-0">Comprehensive support for meeting state-specific requirements for behavioral health facilities.</p>
                  </div>
                </div>

                <h3>Why Invest in Professional Compliance Support?</h3>
                <p>
                  Behavioral health organizations that partner with The Growth MD for compliance and accreditation support experience:
                </p>
                <ul>
                  <li>Higher first-time accreditation success rates</li>
                  <li>Reduced administrative burden on clinical leadership</li>
                  <li>Lower risk of regulatory penalties or citations</li>
                  <li>Improved operational efficiency through optimized compliance processes</li>
                  <li>Enhanced reputation with referral sources and payers</li>
                  <li>Increased reimbursement rates from payers who recognize accreditation</li>
                </ul>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg my-8">
                  <h3 className="text-slate-900 dark:text-white">Case Study: Streamlined Accreditation</h3>
                  <p className="mb-0">
                    A multi-location behavioral health provider was struggling with preparing for CARF accreditation,
                    with documentation scattered across multiple systems and inconsistent practices between sites.
                    Our team implemented a centralized compliance management system, standardized policies,
                    and conducted targeted staff training. The organization achieved three-year CARF accreditation on their first attempt,
                    with surveyors specifically commending their documentation quality and consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <Card className="mb-6 border-amber-200 dark:border-amber-800">
                <CardHeader className="bg-amber-50 dark:bg-amber-900 rounded-t-lg">
                  <CardTitle className="text-slate-900 dark:text-white">Ready for Accreditation Success?</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Schedule a compliance readiness assessment to identify gaps and create an efficient path to accreditation.
                  </p>
                  <Button asChild size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
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
                      <h4 className="font-semibold text-slate-900 dark:text-white">Jennifer Miller</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Executive Director, Wellness Recovery Center</p>
                    </div>
                  </div>
                  <p className="italic text-slate-600 dark:text-slate-400">
                    "The Growth MD took the stress out of our accreditation process. Their team not only helped us achieve our accreditation but also implemented systems that have improved our operations long-term. The return on investment has been remarkable."
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
                      <Link href="/services/documentation-systems" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Documentation Systems
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/staff-training-retention" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Staff Training & Retention
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/operational-excellence" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Operational Excellence
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
              Ready to Navigate the Compliance Landscape?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Our compliance specialists can help you achieve and maintain accreditation with less stress and greater operational benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/assessment">
                  Get Your Free Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950">
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
