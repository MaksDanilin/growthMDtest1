import Link from "next/link";
import { Building, ArrowLeft, CheckCircle, BarChart3, MapPin, Briefcase, LineChart, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Facility Growth Planning | The Growth MD",
  description: "Strategic planning for facility expansion, new location development, and multi-site management optimization for behavioral health organizations.",
};

export default function FacilityGrowthPlanningPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Facility Growth Planning</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <Building className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Facility Growth Planning
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Strategic planning for expansion, new location development, and multi-site management optimization
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
                <h2>Strategic Facility Growth for Behavioral Health Organizations</h2>
                <p>
                  Expanding your behavioral health facility or opening new locations requires careful planning, market analysis, and operational expertise. Without proper strategic planning, expansion efforts can lead to cash flow issues, operational inefficiencies, and diminished patient care quality.
                </p>
                <p>
                  At The Growth MD, we bring decades of experience in behavioral health facility expansion and multi-site management. Our facility growth planning services help treatment centers, detox facilities, and outpatient programs expand strategically while maintaining clinical excellence and financial sustainability.
                </p>

                <h3>Key Challenges in Behavioral Health Facility Expansion</h3>
                <ul>
                  <li>
                    <strong>Market Saturation Analysis:</strong> Understanding competitive landscapes and identifying underserved markets suitable for expansion
                  </li>
                  <li>
                    <strong>Regulatory Compliance:</strong> Navigating complex licensing, zoning, and accreditation requirements across different jurisdictions
                  </li>
                  <li>
                    <strong>Staffing Challenges:</strong> Recruiting and retaining qualified clinical and administrative staff for new locations
                  </li>
                  <li>
                    <strong>Capital Requirements:</strong> Determining appropriate funding strategies and capital allocation for expansion
                  </li>
                  <li>
                    <strong>Operational Consistency:</strong> Maintaining consistent quality and culture across multiple locations
                  </li>
                </ul>

                <h3>Our Approach to Facility Growth Planning</h3>
                <p>
                  We take a data-driven, strategic approach to facility expansion, helping you make informed decisions that align with your organizational goals, clinical philosophy, and financial constraints. Our comprehensive planning process minimizes risks while maximizing the potential for successful growth.
                </p>

                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border border-teal-200 dark:border-teal-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full">
                          <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">Market Analysis & Site Selection</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Comprehensive analysis of market demographics, competition, reimbursement rates, and regulatory environments to identify optimal locations for expansion.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-teal-200 dark:border-teal-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full">
                          <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">Business Plan Development</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Creation of detailed business plans including financial projections, staffing models, marketing strategies, and operational timelines.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-teal-200 dark:border-teal-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full">
                          <Scale className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">Regulatory Navigation</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Expert guidance on licensing requirements, zoning regulations, accreditation standards, and compliance considerations for new locations.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-teal-200 dark:border-teal-800">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full">
                          <LineChart className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">Financial Modeling</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Sophisticated financial forecasting that accounts for startup costs, breakeven analysis, cash flow projections, and ROI calculations.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3>The Facility Growth Planning Process</h3>
                <p>
                  Our structured approach to facility growth planning ensures that all critical aspects of expansion are addressed, from initial market assessment through implementation and ongoing optimization.
                </p>

                <div className="space-y-6 my-6">
                  <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                      <span className="text-teal-600 dark:text-teal-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Assessment & Strategy Development</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Current state assessment and growth readiness evaluation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Market analysis and competitive positioning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Strategic growth objectives and target market identification</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                      <span className="text-teal-600 dark:text-teal-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Planning & Due Diligence</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Financial modeling and capital planning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Regulatory and compliance planning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Operational infrastructure evaluation and planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                      <span className="text-teal-600 dark:text-teal-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Implementation Support</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Project management and milestone tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Staffing and training program development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>System setup and operational readiness</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                      <span className="text-teal-600 dark:text-teal-400 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Post-Launch Optimization</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Performance monitoring and KPI tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Process refinement and operational optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>Ongoing support and strategic adjustment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>Multi-Site Management Excellence</h3>
                <p>
                  As organizations grow from single locations to multiple facilities, management complexity increases exponentially. Our multi-site management optimization services help behavioral health organizations establish the systems, processes, and leadership structures needed to maintain quality and efficiency across multiple locations.
                </p>

                <div className="my-8 bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-teal-700 dark:text-teal-300 mb-4">Key Multi-Site Management Capabilities We Help Develop:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Centralized Administrative Functions</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Streamlined billing, intake, HR, and accounting processes that create economies of scale
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Standardized Clinical Protocols</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Consistent treatment approaches and documentation systems across all locations
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Multi-Site Leadership Structure</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Effective organizational structures and communication systems for managing multiple facilities
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Cross-Facility Resource Sharing</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Systems for efficiently sharing clinical staff, expertise, and resources between locations
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Enterprise Technology Solutions</strong>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Implementation of technology systems that support multi-site operations and data sharing
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h3>Client Success Story</h3>
                <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                      <Building className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Highland Recovery Center</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Residential Treatment Program</p>
                    </div>
                  </div>
                  <blockquote className="italic text-slate-700 dark:text-slate-300 mb-4">
                    "The Growth MD guided us through expanding from a single 30-bed residential facility to a network of 4 facilities with 120+ beds across two states. Their strategic planning process helped us avoid costly mistakes and accelerated our growth timeline while maintaining our clinical excellence."
                  </blockquote>
                  <p className="text-sm text-slate-600 dark:text-slate-400">— James Thompson, CEO</p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">300%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Bed Capacity Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">18 mos</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Expansion Timeline</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">86%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Average Occupancy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">43%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Revenue Growth</div>
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
                  <h3 className="text-xl font-bold mb-4">Ready to Expand Your Facility?</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Book a free consultation to discuss your growth plans and discover how we can help you expand strategically.
                  </p>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 text-white">
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
                <h3 className="text-lg font-bold mb-4">Benefits of Strategic Growth Planning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Reduced Financial Risk</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Data-driven expansion decisions reduce financial exposure</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Faster Time to Profitability</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Strategic planning accelerates the path to positive cash flow</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Operational Excellence</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Optimized processes and systems across all locations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Regulatory Compliance</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Comprehensive compliance planning at each stage</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div>
                <h3 className="text-lg font-bold mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/revenue-optimization" className="text-teal-600 dark:text-teal-400 hover:underline">
                      Revenue Optimization
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/patient-acquisition" className="text-teal-600 dark:text-teal-400 hover:underline">
                      Patient Acquisition
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/operational-excellence" className="text-teal-600 dark:text-teal-400 hover:underline">
                      Operational Excellence
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/staff-training-retention" className="text-teal-600 dark:text-teal-400 hover:underline">
                      Staff Training & Retention
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-bold mb-4">Free Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    <Link href="/resources/treatment-center-financial-model" className="text-teal-600 dark:text-teal-400 hover:underline">
                      Treatment Center Financial Model
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    <Link href="/resources/facility-expansion-checklist" className="text-teal-600 dark:text-teal-400 hover:underline">
                      Facility Expansion Checklist
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 dark:bg-teal-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Expand Your Behavioral Health Services?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our facility growth planning services help you expand strategically while maintaining clinical excellence and financial sustainability.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-white/90">
            <Link href="/contact">
              Schedule Your Strategic Planning Session
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
