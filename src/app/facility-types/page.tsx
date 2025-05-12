import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Building, Hospital, Activity, HeartPulse, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const facilityTypes = [
  {
    icon: Building,
    title: "Treatment Centers",
    description: "Strategic growth solutions for residential and inpatient treatment facilities focusing on long-term recovery programs.",
    link: "/facility-types/treatment-centers",
    color: "bg-emerald-100 dark:bg-emerald-950",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Hospital,
    title: "Detox Centers",
    description: "Specialized support for medical detoxification facilities focusing on patient safety, clinical excellence, and operational efficiency.",
    link: "/facility-types/detox-centers",
    color: "bg-blue-100 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Activity,
    title: "PHP/IOP Programs",
    description: "Growth strategies for partial hospitalization and intensive outpatient programs to optimize census and clinical outcomes.",
    link: "/facility-types/php-iop-programs",
    color: "bg-purple-100 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: HeartPulse,
    title: "Outpatient Services",
    description: "Revenue optimization and operational excellence for traditional outpatient behavioral health practices.",
    link: "/facility-types/outpatient-services",
    color: "bg-indigo-100 dark:bg-indigo-950",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Tablet,
    title: "Specialty Programs",
    description: "Custom growth approaches for specialized behavioral health services including trauma, eating disorders, and dual diagnosis programs.",
    link: "/facility-types/specialty-programs",
    color: "bg-amber-100 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
];

export default function FacilityTypesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Specialized Solutions for Every Behavioral Health Setting
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8">
              Growth strategies tailored to your facility's unique needs, challenges, and opportunities
            </p>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="/assessment">
                Get Your Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facility Types Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Our Facility-Specific Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityTypes.map((facility) => (
              <Card key={facility.title} className="border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${facility.color} flex items-center justify-center mb-4`}>
                    <facility.icon className={`h-6 w-6 ${facility.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">{facility.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {facility.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-emerald-600 dark:text-emerald-400 p-0 hover:bg-transparent hover:text-emerald-700 dark:hover:text-emerald-300">
                    <Link href={facility.link} className="flex items-center">
                      Learn more <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
              Why Choose Facility-Specific Consulting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Industry-Specific Expertise</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Each type of behavioral health facility faces unique regulatory, operational, and market challenges. Our consultants specialize in your specific facility type, bringing relevant experience and solutions.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Targeted Growth Strategies</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  From detox center admission processes to IOP marketing strategies, we develop and implement growth plans that align with your specific care model and patient journey.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Benchmark-Based Improvements</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  We benchmark your performance against similar facilities, identifying specific opportunities for improvement in operations, revenue cycle, and clinical outcomes.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Integrated Care Models</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  For organizations with multiple types of care settings, we design integrated growth strategies that optimize patient flow through your complete continuum of care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center mr-4">
                  <Building className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">Summit Recovery Center</h3>
                  <p className="text-slate-600 dark:text-slate-400">48-bed Residential Treatment Facility</p>
                </div>
              </div>
              <blockquote className="text-lg italic text-slate-700 dark:text-slate-300 mb-6">
                "The Growth MD's understanding of residential treatment center operations transformed our facility. Their team implemented systems tailored specifically to our unique clinical model, resulting in a 32% revenue increase while improving our clinical outcomes."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 mr-3" />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Michael Rodriguez</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">CEO, Summit Recovery Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-800 dark:to-teal-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Behavioral Health Facility?
            </h2>
            <p className="text-lg text-white mb-8">
              Let's discuss your facility's unique needs and develop a customized growth strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-slate-100">
                <Link href="/assessment">
                  Start Your Free Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700/20">
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
