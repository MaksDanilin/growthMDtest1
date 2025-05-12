import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, BarChart3, Users, TrendingUp, Brain, ClipboardCheck, FileText, HeartPulse, Building, Microscope, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Increase your facility's revenue through strategic pricing, payer mix optimization, and billing process improvements.",
    link: "/services/revenue-optimization",
    color: "bg-blue-100 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Users,
    title: "Patient Acquisition",
    description: "Build a robust referral network and marketing strategy to maintain optimal census and consistent growth.",
    link: "/services/patient-acquisition",
    color: "bg-green-100 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: BarChart3,
    title: "Operational Excellence",
    description: "Streamline operations, optimize staffing models, and implement efficiency measures to reduce costs.",
    link: "/services/operational-excellence",
    color: "bg-purple-100 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Brain,
    title: "Clinical Program Development",
    description: "Design and implement evidence-based treatment programs to improve outcomes and differentiate your facility.",
    link: "/services/clinical-program-development",
    color: "bg-pink-100 dark:bg-pink-950",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Accreditation",
    description: "Navigate regulatory requirements and achieve accreditation standards with confidence and efficiency.",
    link: "/services/compliance-accreditation",
    color: "bg-amber-100 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: FileText,
    title: "Documentation Systems",
    description: "Implement robust clinical documentation practices that satisfy payer requirements and protect your business.",
    link: "/services/documentation-systems",
    color: "bg-indigo-100 dark:bg-indigo-950",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: HeartPulse,
    title: "Staff Training & Retention",
    description: "Develop training protocols and retention strategies to build and maintain a high-performing clinical team.",
    link: "/services/staff-training-retention",
    color: "bg-rose-100 dark:bg-rose-950",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: Building,
    title: "Facility Growth Planning",
    description: "Strategic planning for expansion, new location development, and multi-site management optimization.",
    link: "/services/facility-growth-planning",
    color: "bg-teal-100 dark:bg-teal-950",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: Microscope,
    title: "Outcomes Measurement",
    description: "Implement systems to track and analyze treatment outcomes for continuous improvement and marketing advantage.",
    link: "/services/outcomes-measurement",
    color: "bg-cyan-100 dark:bg-cyan-950",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: BadgePercent,
    title: "Payer Contracting",
    description: "Negotiate favorable contracts with insurance providers and optimize your revenue cycle management.",
    link: "/services/payer-contracting",
    color: "bg-orange-100 dark:bg-orange-950",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Comprehensive Consulting Services for Behavioral Health
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8">
              Expert solutions to grow your practice, optimize operations, and improve patient outcomes
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/assessment">
                Get Your Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Our Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-blue-600 dark:text-blue-400 p-0 hover:bg-transparent hover:text-blue-700 dark:hover:text-blue-300">
                    <Link href={service.link} className="flex items-center">
                      Learn more <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Don't See What You Need?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Our team of behavioral health experts can create custom solutions tailored to your facility's unique challenges and goals. Contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                <Link href="/assessment">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
              <p className="text-slate-700 dark:text-slate-300">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$2.3M+</div>
              <p className="text-slate-700 dark:text-slate-300">Average Revenue Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
              <p className="text-slate-700 dark:text-slate-300">Facilities Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
              <p className="text-slate-700 dark:text-slate-300">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-800 dark:to-teal-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Behavioral Health Facility?
            </h2>
            <p className="text-lg text-white mb-8">
              Our team of experts is ready to help you optimize your operations, increase revenue, and improve patient outcomes.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              <Link href="/assessment">
                Start Your Free Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
