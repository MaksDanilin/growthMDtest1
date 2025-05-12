import Link from "next/link";
import { Building, ArrowLeft, CheckCircle2, BarChart3, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function TreatmentCentersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/facility-types" className="hover:text-blue-600 dark:hover:text-blue-400">Facility Types</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Treatment Centers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/facility-types">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Facility Types
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
              <Building className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Residential Treatment Center Growth Solutions
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Comprehensive strategies to optimize your residential treatment facility's operations, revenue, and clinical outcomes
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
                <h2>Specialized Consulting for Residential Treatment Facilities</h2>
                <p>
                  Residential treatment centers face unique challenges in today's behavioral health landscape. From navigating
                  complex regulations to optimizing length of stay and maintaining clinical excellence, your facility requires
                  specialized expertise to thrive.
                </p>

                <p>
                  The Growth MD brings deep expertise in residential treatment center operations, having transformed over 50 facilities
                  nationwide. Our consultants work directly with your leadership team to implement proven systems that improve clinical
                  outcomes while maximizing operational efficiency and revenue.
                </p>

                <div className="my-8">
                  <h3>Our Treatment Center Solutions Include:</h3>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5" />
                      <span><strong>Census Optimization:</strong> Implement systems to maintain optimal occupancy while ensuring appropriate clinical placement.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5" />
                      <span><strong>Length of Stay Management:</strong> Develop clinical programming and utilization review processes that optimize appropriate length of stay.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5" />
                      <span><strong>Staff-to-Patient Ratios:</strong> Create staffing models that balance clinical excellence with operational efficiency.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5" />
                      <span><strong>Insurance Reimbursement Optimization:</strong> Maximize revenue through strategic billing practices and payer contract negotiations.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5" />
                      <span><strong>Clinical Program Development:</strong> Design distinctive, evidence-based treatment programs that improve outcomes and differentiate your facility.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5" />
                      <span><strong>Referral Network Development:</strong> Build sustainable referral relationships with outpatient providers, hospitals, and other referral sources.</span>
                    </li>
                  </ul>
                </div>

                <h3>Common Treatment Center Challenges We Solve</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">Fluctuating Census</h4>
                    </div>
                    <p className="text-sm mb-0">Implementing strategic marketing, admission processes, and referral management systems to maintain consistent occupancy.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">Revenue Leakage</h4>
                    </div>
                    <p className="text-sm mb-0">Identifying and correcting billing inefficiencies, insurance verification gaps, and utilization management challenges.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">Staff Turnover</h4>
                    </div>
                    <p className="text-sm mb-0">Developing staffing models, leadership training, and retention strategies to maintain a stable, high-performing team.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Building className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-2" />
                      <h4 className="font-bold text-slate-900 dark:text-white m-0">Facility Expansion</h4>
                    </div>
                    <p className="text-sm mb-0">Strategic planning for growth, including new location development, licensing, and multi-site management optimization.</p>
                  </div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg my-8 border border-emerald-100 dark:border-emerald-800">
                  <h3 className="text-slate-900 dark:text-white">Case Study: Residential Center Transformation</h3>
                  <p className="mb-0">
                    A 64-bed residential treatment center was operating at 62% occupancy with significant reimbursement challenges.
                    Our team implemented a comprehensive transformation, including admission process redesign, utilization management
                    improvements, and clinical program refinement. Within six months, the facility achieved 92% occupancy, increased
                    reimbursement rates by 24%, and reduced staff turnover by 35%.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <Card className="mb-6 border-emerald-200 dark:border-emerald-800">
                <CardHeader className="bg-emerald-50 dark:bg-emerald-900 rounded-t-lg">
                  <CardTitle className="text-slate-900 dark:text-white">Transform Your Treatment Center</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Ready to optimize your residential treatment center's performance? Schedule a free consultation with our treatment center specialists.
                  </p>
                  <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Link href="/assessment">
                      Get Your Free Assessment
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Key Metrics Card */}
              <Card className="mb-6 border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle>Success By The Numbers</CardTitle>
                  <CardDescription>Average improvements for our treatment center clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Census Increase</span>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">28%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div className="bg-emerald-600 dark:bg-emerald-400 h-2 rounded-full" style={{ width: '28%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Revenue Growth</span>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">34%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div className="bg-emerald-600 dark:bg-emerald-400 h-2 rounded-full" style={{ width: '34%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Staff Retention Improvement</span>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">42%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div className="bg-emerald-600 dark:bg-emerald-400 h-2 rounded-full" style={{ width: '42%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Patient Satisfaction</span>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">96%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div className="bg-emerald-600 dark:bg-emerald-400 h-2 rounded-full" style={{ width: '96%' }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Services</CardTitle>
                  <CardDescription>Explore services for Treatment Centers</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/revenue-optimization" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Revenue Optimization
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/patient-acquisition" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Patient Acquisition
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/clinical-program-development" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Clinical Program Development
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
              Ready to Transform Your Treatment Center?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Our team of residential treatment specialists is ready to help you optimize your facility's performance and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/assessment">
                  Get Your Free Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950">
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
