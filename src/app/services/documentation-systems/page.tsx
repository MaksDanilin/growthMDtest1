import Link from "next/link";
import { FileText, ArrowLeft, CheckCircle2, FileCheck, ClipboardList, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocumentationSystemsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Documentation Systems</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
              <FileText className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Documentation Systems
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Implement robust clinical documentation practices that satisfy payer requirements and protect your business
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
                <h2>Transform Your Clinical Documentation Process</h2>
                <p>
                  In today's complex behavioral health environment, your clinical documentation is far more than a
                  regulatory requirement—it's a critical business asset that affects reimbursement, quality of care,
                  compliance, and risk management.
                </p>

                <p>
                  The Growth MD's documentation systems service helps behavioral health organizations develop and
                  implement documentation practices that simultaneously satisfy clinical, regulatory, and financial
                  requirements while making the process more efficient for your staff.
                </p>

                <div className="my-8">
                  <h3>Our Comprehensive Documentation System Services Include:</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                      <span><strong>Documentation Assessment:</strong> Comprehensive evaluation of your current documentation practices, identifying gaps, inefficiencies, and compliance risks.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                      <span><strong>System Design & Implementation:</strong> Development of streamlined documentation workflows, templates, and protocols customized to your specific level of care and clinical model.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                      <span><strong>Medical Necessity Documentation:</strong> Implementation of systems that effectively document medical necessity for all levels of care, optimizing authorization approvals and minimizing denials.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                      <span><strong>Staff Training:</strong> Comprehensive training programs for clinical staff on effective documentation practices that satisfy both clinical and reimbursement requirements.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                      <span><strong>EHR Optimization:</strong> Strategic guidance on selecting, implementing, and optimizing electronic health record systems to support your documentation needs.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                      <span><strong>Audit Preparation:</strong> Development of internal audit processes and preparation for external audits from payers, accrediting bodies, and regulatory agencies.</span>
                    </li>
                  </ul>
                </div>

                <h3>The Impact of Effective Documentation Systems</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900">
                    <div className="flex items-center mb-3">
                      <FileCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">Reduced Claim Denials</h4>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-0">
                      Properly documented medical necessity and treatment services significantly reduce claim denials and increase successful appeals.
                    </p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900">
                    <div className="flex items-center mb-3">
                      <ClipboardList className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">Clinical Quality</h4>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-0">
                      Structured documentation improves treatment consistency, supports appropriate level of care decisions, and enhances care coordination.
                    </p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900">
                    <div className="flex items-center mb-3">
                      <TableProperties className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">Staff Efficiency</h4>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-0">
                      Streamlined documentation processes reduce administrative burden on clinical staff, allowing more time for direct patient care.
                    </p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900">
                    <div className="flex items-center mb-3">
                      <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">Risk Mitigation</h4>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-0">
                      Thorough documentation provides protection during audits, helps defend against claims of fraud or negligence, and supports quality improvement.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg my-8 border border-slate-200 dark:border-slate-800">
                  <h3 className="text-slate-900 dark:text-white">Case Study: Documentation Transformation</h3>
                  <p className="mb-0">
                    A 42-bed residential treatment center was struggling with frequent claim denials and inconsistent documentation quality across their clinical team.
                    Through our documentation systems service, we implemented standardized templates aligned with medical necessity criteria, developed an efficient
                    documentation workflow, and provided targeted staff training. Within six months, the facility saw a 68% reduction in documentation-related claim
                    denials and reported significant improvements in staff efficiency and satisfaction.
                  </p>
                </div>

                <h3>Our Approach to Documentation Systems</h3>
                <p>
                  We take a holistic approach to documentation systems, recognizing that effective clinical documentation must balance multiple competing demands:
                </p>
                <ul>
                  <li><strong>Clinically meaningful</strong> - Supporting quality patient care and clinical decision-making</li>
                  <li><strong>Payer compliant</strong> - Meeting requirements for medical necessity and reimbursement</li>
                  <li><strong>Regulatory sound</strong> - Satisfying state, federal, and accreditation requirements</li>
                  <li><strong>Operationally efficient</strong> - Minimizing administrative burden on clinical staff</li>
                  <li><strong>Legally protective</strong> - Providing appropriate risk management</li>
                </ul>

                <p>
                  Our documentation specialists work closely with your clinical leadership to develop systems that achieve all these
                  objectives while maintaining your organization's unique clinical approach and values.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <Card className="mb-6 border-indigo-200 dark:border-indigo-800">
                <CardHeader className="bg-indigo-50 dark:bg-indigo-900 rounded-t-lg">
                  <CardTitle className="text-slate-900 dark:text-white">Transform Your Documentation</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Ready to implement documentation systems that support clinical quality, maximize reimbursement, and protect your business? Schedule a free assessment today.
                  </p>
                  <Button asChild size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Link href="/assessment">
                      Get Your Free Assessment
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Resources Card */}
              <Card className="mb-6 border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle>Free Documentation Resources</CardTitle>
                  <CardDescription>Download our free guides and tools</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                      <Link href="/resources/documentation-audit-checklist.pdf" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                        Documentation Audit Checklist
                      </Link>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                      <Link href="/resources/medical-necessity-guide.pdf" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                        Medical Necessity Documentation Guide
                      </Link>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                      <Link href="/resources/ehr-selection-toolkit.pdf" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                        EHR Selection Toolkit for Behavioral Health
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/resources">
                      View All Resources
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Testimonial */}
              <Card className="mb-6 border-slate-200 dark:border-slate-800">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 mr-4 relative overflow-hidden">
                      <img
                        src="/testimonials/rebecca-chen.jpg"
                        alt="Dr. Rebecca Chen"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Dr. Rebecca Chen</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Clinical Director, Healing Horizons</p>
                    </div>
                  </div>
                  <p className="italic text-slate-600 dark:text-slate-400">
                    "The documentation systems implemented by The Growth MD have not only improved our reimbursement rates but also enhanced our clinical care. Our staff now spends less time on paperwork and more time with patients."
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
                      <Link href="/services/compliance-accreditation" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Compliance & Accreditation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/revenue-optimization" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Revenue Optimization
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/staff-training-retention" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Staff Training & Retention
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
              Ready to Transform Your Documentation Systems?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Our team of documentation specialists is ready to help you implement systems that improve clinical care, maximize reimbursement, and reduce administrative burden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="/assessment">
                  Get Your Free Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950">
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
