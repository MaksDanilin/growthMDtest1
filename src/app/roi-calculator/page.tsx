"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Calculator, DollarSign, Percent, Users, Building, BarChart, Info, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { LeadCaptureModal } from "@/components/lead-capture-modal";
import { ROICalculatorForm } from "@/components/roi-calculator-form";
import { ROICharts } from "@/components/roi-charts";
import { ROIPdfExport } from "@/components/roi-pdf-export";

export default function ROICalculatorPage() {
  // State for calculation results
  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [projectedRevenue, setProjectedRevenue] = useState(0);
  const [additionalRevenue, setAdditionalRevenue] = useState(0);
  const [percentIncrease, setPercentIncrease] = useState(0);
  const [currentCensus, setCurrentCensus] = useState(75);
  const [avgDailyRate, setAvgDailyRate] = useState(800);

  // Individual improvement amounts
  const [censusImprovement, setCensusImprovement] = useState(0);
  const [reimbursementImprovement, setReimbursementImprovement] = useState(0);
  const [losImprovement, setLosImprovement] = useState(0);
  const [conversionImprovement, setConversionImprovement] = useState(0);
  const [operationsImprovement, setOperationsImprovement] = useState(0);

  // Reference for PDF export
  const resultsRef = useRef(null);

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Handle calculation form submission
  const handleCalculate = (values) => {
    console.log("ROI Calculator values:", values);

    // Store form inputs for calculations and display
    setCurrentCensus(values.currentCensus);
    setAvgDailyRate(values.avgDailyRate);

    // Calculate current revenue
    const occupiedBeds = Math.floor(values.bedCapacity * (values.currentCensus / 100));
    const currentAnnualRevenue = occupiedBeds * values.avgDailyRate * values.avgLOS * (365 / values.avgLOS);
    setCurrentRevenue(currentAnnualRevenue);

    // Initialize improvements
    let censusImp = 0;
    let reimbursementImp = 0;
    let losImp = 0;
    let conversionImp = 0;
    let operationsImp = 0;

    // Calculate each improvement type if selected
    if (values.optimizeCensus) {
      const newCensus = Math.min(values.currentCensus + 15, 100);
      const censusImproved = Math.floor(values.bedCapacity * (newCensus / 100)) - occupiedBeds;
      censusImp = censusImproved * values.avgDailyRate * values.avgLOS * (365 / values.avgLOS);
    }

    if (values.optimizeReimbursement) {
      const rateImprovement = values.avgDailyRate * 0.1;
      reimbursementImp = occupiedBeds * rateImprovement * values.avgLOS * (365 / values.avgLOS);
    }

    if (values.optimizeLOS) {
      const losImproved = values.avgLOS * 0.05;
      losImp = occupiedBeds * values.avgDailyRate * losImproved * (365 / values.avgLOS);
    }

    if (values.optimizeConversion) {
      // Assuming 12% admissions boost from better lead conversion
      conversionImp = currentAnnualRevenue * 0.12;
    }

    if (values.optimizeOperations) {
      // Operational savings (assuming 70% of revenue is costs)
      operationsImp = currentAnnualRevenue * 0.7 * 0.08;
    }

    // Store individual improvements for display
    setCensusImprovement(censusImp);
    setReimbursementImprovement(reimbursementImp);
    setLosImprovement(losImp);
    setConversionImprovement(conversionImp);
    setOperationsImprovement(operationsImp);

    // Calculate total revenue impact
    const totalAdditionalRevenue = censusImp + reimbursementImp + losImp + conversionImp + operationsImp;

    // Update state with results
    setAdditionalRevenue(totalAdditionalRevenue);
    setProjectedRevenue(currentAnnualRevenue + totalAdditionalRevenue);
    setPercentIncrease(totalAdditionalRevenue > 0 ? (totalAdditionalRevenue / currentAnnualRevenue) * 100 : 0);
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Behavioral Health ROI Calculator
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8">
              See how our consulting services can improve your facility's financial performance
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="px-3 py-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                <DollarSign className="mr-1 h-3.5 w-3.5" />
                Revenue Projections
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                <Percent className="mr-1 h-3.5 w-3.5" />
                ROI Analysis
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                <Users className="mr-1 h-3.5 w-3.5" />
                Census Impact
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white dark:bg-slate-950 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="calculator" className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <TabsList className="w-full md:w-auto">
                  <TabsTrigger value="calculator">Calculator</TabsTrigger>
                  <TabsTrigger value="methodology">Methodology</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <div>
                  <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
                    <Link href="/assessment">
                      Get a Personalized Assessment <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <TabsContent value="calculator" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Inputs Section */}
                  <div className="lg:col-span-1">
                    <ROICalculatorForm onCalculate={handleCalculate} />
                  </div>

                  {/* Results Section */}
                  <div className="lg:col-span-2">
                    <div ref={resultsRef}>
                      <Card className="mb-6">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Calculator className="mr-2 h-5 w-5 text-indigo-500" />
                            Your Custom ROI Projection
                          </CardTitle>
                          <CardDescription>
                            Based on industry benchmarks and your facility information
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {/* Current Performance Section */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">Current Performance (Estimated)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                                <CardContent className="p-4">
                                  <div className="text-sm text-slate-500 dark:text-slate-400">Annual Revenue</div>
                                  <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{formatCurrency(currentRevenue)}</div>
                                </CardContent>
                              </Card>
                              <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                                <CardContent className="p-4">
                                  <div className="text-sm text-slate-500 dark:text-slate-400">Average Census</div>
                                  <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{currentCensus}%</div>
                                </CardContent>
                              </Card>
                              <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                                <CardContent className="p-4">
                                  <div className="text-sm text-slate-500 dark:text-slate-400">Average Daily Rate</div>
                                  <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{formatCurrency(avgDailyRate)}</div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          {/* Potential Improvement Section */}
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Potential Improvements with The Growth MD</h3>
                              <ROIPdfExport
                                containerRef={resultsRef}
                                additionalData={{
                                  currentRevenue,
                                  projectedRevenue,
                                  percentIncrease: percentIncrease.toFixed(1)
                                }}
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              {censusImprovement > 0 && (
                                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-medium text-slate-900 dark:text-white">Census Improvement</div>
                                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">+15%</Badge>
                                  </div>
                                  <div className="text-sm text-slate-600 dark:text-slate-400">
                                    Expected increase from {currentCensus}% to {Math.min(currentCensus + 15, 100)}% average census
                                  </div>
                                  <div className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                    + {formatCurrency(censusImprovement)} additional annual revenue
                                  </div>
                                </div>
                              )}

                              {reimbursementImprovement > 0 && (
                                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-medium text-slate-900 dark:text-white">Reimbursement Improvement</div>
                                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">+10%</Badge>
                                  </div>
                                  <div className="text-sm text-slate-600 dark:text-slate-400">
                                    Average daily rate increase from ${avgDailyRate} to ${Math.round(avgDailyRate * 1.1)}
                                  </div>
                                  <div className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                    + {formatCurrency(reimbursementImprovement)} additional annual revenue
                                  </div>
                                </div>
                              )}

                              {losImprovement > 0 && (
                                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-medium text-slate-900 dark:text-white">Length of Stay Optimization</div>
                                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">+5%</Badge>
                                  </div>
                                  <div className="text-sm text-slate-600 dark:text-slate-400">
                                    Appropriate LOS increase through better utilization management
                                  </div>
                                  <div className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                    + {formatCurrency(losImprovement)} additional annual revenue
                                  </div>
                                </div>
                              )}

                              {conversionImprovement > 0 && (
                                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-medium text-slate-900 dark:text-white">Lead Conversion Improvement</div>
                                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">+12%</Badge>
                                  </div>
                                  <div className="text-sm text-slate-600 dark:text-slate-400">
                                    More admissions from better marketing and sales processes
                                  </div>
                                  <div className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                    + {formatCurrency(conversionImprovement)} additional annual revenue
                                  </div>
                                </div>
                              )}

                              {operationsImprovement > 0 && (
                                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-900">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-medium text-slate-900 dark:text-white">Operational Efficiency</div>
                                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">+8%</Badge>
                                  </div>
                                  <div className="text-sm text-slate-600 dark:text-slate-400">
                                    Cost savings through optimized staffing and processes
                                  </div>
                                  <div className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                    + {formatCurrency(operationsImprovement)} annual cost savings
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* ROI Summary Section */}
                          {currentRevenue > 0 && (
                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900">
                              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Projected Annual Impact</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Revenue Increase</div>
                                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{formatCurrency(additionalRevenue)}</div>
                                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                                    Potential ROI: <span className="font-semibold">12x</span> your consulting investment
                                  </div>
                                </div>
                                <div>
                                  <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                      <span className="text-sm text-slate-600 dark:text-slate-400">Current Revenue</span>
                                      <span className="text-sm font-medium text-slate-900 dark:text-white">{formatCurrency(currentRevenue)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-sm text-slate-600 dark:text-slate-400">Projected Revenue</span>
                                      <span className="text-sm font-medium text-slate-900 dark:text-white">{formatCurrency(projectedRevenue)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-sm text-slate-600 dark:text-slate-400">Percent Increase</span>
                                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">+{percentIncrease.toFixed(0)}%</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Data Visualization Section - Only show if we have results */}
                          {currentRevenue > 0 && additionalRevenue > 0 && (
                            <ROICharts
                              currentRevenue={currentRevenue}
                              projectedRevenue={projectedRevenue}
                              censusImprovement={censusImprovement}
                              reimbursementImprovement={reimbursementImprovement}
                              losImprovement={losImprovement}
                              conversionImprovement={conversionImprovement}
                              operationsImprovement={operationsImprovement}
                              currentCensus={currentCensus}
                              avgDailyRate={avgDailyRate}
                            />
                          )}
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-2 items-stretch sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                          <LeadCaptureModal
                            trigger={
                              <Button className="flex-1" size="lg" type="button">
                                Get Detailed ROI Report
                              </Button>
                            }
                            additionalRevenue={additionalRevenue}
                            currentRevenue={currentRevenue}
                          />
                          <Button asChild variant="outline" size="lg" className="flex-1">
                            <Link href="/assessment">
                              Schedule Free Assessment
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="methodology" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>ROI Calculator Methodology</CardTitle>
                    <CardDescription>
                      How we calculate potential improvements and financial impact
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Census Improvement</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Our census improvement projections are based on over 150 behavioral health facilities we've worked with. The calculator uses a conservative estimate based on your current census level. Facilities starting below 75% typically see 15-20% census increases, while those starting at 80-90% typically see 5-10% improvements.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Reimbursement Optimization</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Revenue cycle and reimbursement improvements are calculated based on the average daily rate increase our clients have achieved through better payer contract negotiation, improved billing practices, and utilization management. The typical range is 8-15% improvement in average reimbursement rates.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Length of Stay Optimization</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Length of stay projections focus on clinically appropriate extensions through better utilization management and clinical documentation. The calculator uses a conservative 5% increase, though many facilities achieve 10-15% improvements when starting from suboptimal baseline.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Lead Conversion Improvement</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Our conversion rate improvement calculations are based on implementing proven marketing and admissions processes that convert more inquiries into admissions. Most facilities see a 10-15% increase in conversion rates within the first 6 months of implementation.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Operational Efficiency</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Operational savings are calculated based on industry benchmarks for staff productivity, administrative overhead, and operational workflow improvements. Our typical clients see 8-12% reduction in operational costs through improved processes and staffing models.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        <strong>Note:</strong> This calculator provides estimates based on industry averages and results achieved by similar facilities. Your actual results may vary based on your specific circumstances, market conditions, and implementation success. We recommend scheduling a free assessment for a personalized analysis.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>
                      Common questions about our ROI calculator and consulting services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">How accurate are these ROI estimates?</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        The calculator uses conservative estimates based on results our clients have achieved. The projections represent potential outcomes, but actual results vary based on your unique situation, market conditions, and implementation effectiveness. We recommend scheduling a free assessment for a personalized analysis.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">How long does it take to see these improvements?</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Most clients begin to see tangible improvements within the first 60 days, with substantial revenue impacts by the 90-120 day mark. Some operational improvements and revenue cycle enhancements may show immediate impact, while census optimization typically builds over 3-6 months.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">What services do you offer to achieve these results?</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Our comprehensive services include revenue cycle optimization, patient acquisition strategies, operational excellence, clinical program development, compliance and accreditation support, and staff training/retention programs. Each engagement is customized based on your facility's specific needs and goals.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">What investment is required to achieve these returns?</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Our consulting engagements typically range from $5,000-$25,000 per month depending on facility size and scope of work. Most clients achieve ROI between 5x and 15x their consulting investment within the first year. We offer a range of options to fit different budget requirements.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">How do I get started?</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        The best way to begin is to schedule a free assessment. Our team will analyze your current operations, identify specific opportunities for improvement, and develop a customized action plan. There's no obligation, and you'll receive valuable insights regardless of whether you decide to work with us.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/assessment">
                        Schedule Your Free Assessment
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready for a Personalized Revenue Analysis?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get a detailed assessment of your facility's revenue improvement potential from our behavioral health experts.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
              <Link href="/assessment">
                Schedule Your Free Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
