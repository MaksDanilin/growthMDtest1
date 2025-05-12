import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronRight, BarChart2, Users, LineChart, Settings, TrendingUp, Building, Wallet, HeartPulse, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const metadata = {
  title: "Case Studies | The Growth MD",
  description: "Real growth results from our behavioral health clients. See how we've helped treatment centers, detox facilities, and outpatient programs achieve sustainable growth.",
};

const caseStudies = [
  {
    id: "highland-recovery",
    title: "Highland Recovery Center",
    subtitle: "Residential Treatment Center",
    description: "How we helped a struggling residential facility increase census by 40% and improve insurance reimbursement rates in just 6 months.",
    image: "https://source.unsplash.com/hIgeoQjS_iE",
    icon: <BarChart2 className="h-10 w-10 text-primary" />,
    metrics: [
      { id: "census", label: "Census Increase", value: "40%" },
      { id: "revenue", label: "Revenue Growth", value: "65%" },
      { id: "reimbursement", label: "Insurance Reimbursement Rate", value: "+28%" },
    ],
    tag: "Revenue",
    slug: "/case-studies/highland-recovery",
    featured: true,
  },
  {
    id: "serenity-detox",
    title: "Serenity Detox Solutions",
    subtitle: "Medical Detoxification Center",
    description: "Transforming operations and referral networks to help this detox facility achieve consistent 90% occupancy while reducing staff turnover.",
    image: "https://source.unsplash.com/YI_9SivVt_s",
    icon: <Users className="h-10 w-10 text-primary" />,
    metrics: [
      { id: "occupancy", label: "Occupancy Rate", value: "90%" },
      { id: "retention", label: "Staff Retention", value: "+45%" },
      { id: "referral", label: "Referral Growth", value: "3x" },
    ],
    tag: "Operations",
    slug: "/case-studies/serenity-detox",
    featured: true,
  },
  {
    id: "mindwell-iop",
    title: "MindWell Intensive Outpatient",
    subtitle: "PHP/IOP Program",
    description: "Using data-driven patient acquisition strategies to help this PHP/IOP program scale to multiple locations while maintaining clinical excellence.",
    image: "https://source.unsplash.com/-uHVRvDr7pg",
    icon: <LineChart className="h-10 w-10 text-primary" />,
    metrics: [
      { id: "patient-volume", label: "Patient Volume", value: "+125%" },
      { id: "new-locations", label: "New Locations", value: "3" },
      { id: "marketing-roi", label: "Marketing ROI", value: "4.2x" },
    ],
    tag: "Growth",
    slug: "/case-studies/mindwell-iop",
    featured: false,
  },
  {
    id: "clarity-health",
    title: "Clarity Mental Health",
    subtitle: "Outpatient Behavioral Health",
    description: "Modernizing operations and implementing telehealth solutions to transform this traditional practice into a high-growth behavioral health provider.",
    image: "https://source.unsplash.com/6-s_43yzQWQ",
    icon: <Settings className="h-10 w-10 text-primary" />,
    metrics: [
      { id: "patient-growth", label: "Patient Growth", value: "85%" },
      { id: "digital-transformation", label: "Digital Transformation", value: "100%" },
      { id: "claim-processing", label: "Insurance Claim Processing Time", value: "-60%" },
    ],
    tag: "Digital",
    slug: "/case-studies/clarity-health",
    featured: false,
  },
  {
    id: "sunrise-behavioral",
    title: "Sunrise Behavioral Health",
    subtitle: "Multi-Location Treatment Provider",
    description: "Implementing a comprehensive growth strategy to optimize financial performance across 5 facilities while enhancing clinical outcomes.",
    image: "https://source.unsplash.com/NFvdKIhxYlU",
    icon: <Wallet className="h-10 w-10 text-primary" />,
    metrics: [
      { id: "revenue-per-patient", label: "Revenue Per Patient", value: "+42%" },
      { id: "admission-rate", label: "Admission Rate", value: "+33%" },
      { id: "profit-margin", label: "Profit Margin", value: "32%" },
    ],
    tag: "Multi-Site",
    slug: "/case-studies/sunrise-behavioral",
    featured: false,
  },
  {
    id: "tranquility-house",
    title: "Tranquility House",
    subtitle: "Dual Diagnosis Treatment Center",
    description: "Revitalizing a struggling dual diagnosis facility through clinical program development, staff training, and operational efficiencies.",
    image: "https://source.unsplash.com/k0KxM_YlCL8",
    icon: <Brain className="h-10 w-10 text-primary" />,
    metrics: [
      { id: "clinical-outcomes", label: "Clinical Outcomes", value: "+52%" },
      { id: "census", label: "Census", value: "95%" },
      { id: "length-of-stay", label: "Length of Stay", value: "+21%" },
    ],
    tag: "Clinical",
    slug: "/case-studies/tranquility-house",
    featured: false,
  },
  {
    id: "pinnacle-recovery",
    title: "Pinnacle Recovery Network",
    subtitle: "Integrated Treatment Ecosystem",
    description: "Creating a seamless continuum of care across detox, residential, and outpatient services to maximize patient retention and outcomes.",
    image: "https://source.unsplash.com/vGu08RYjO-s",
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    metrics: [
      { id: "patient-retention", label: "Patient Retention", value: "87%" },
      { id: "completion-rate", label: "Program Completion Rate", value: "+64%" },
      { id: "revenue-growth", label: "Annual Revenue Growth", value: "73%" },
    ],
    tag: "Integration",
    slug: "/case-studies/pinnacle-recovery",
    featured: false,
  },
  {
    id: "horizon-wellness",
    title: "Horizon Wellness Group",
    subtitle: "Behavioral Health Startup",
    description: "Guiding a startup behavioral health organization from concept to successful launch with robust systems and scalable infrastructure.",
    image: "https://source.unsplash.com/SYTO3xs06fU",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    metrics: [
      { id: "launch-time", label: "Launch Time", value: "90 days" },
      { id: "break-even", label: "Break-Even Point", value: "8 months" },
      { id: "first-year-growth", label: "First Year Growth", value: "210%" },
    ],
    tag: "Startup",
    slug: "/case-studies/horizon-wellness",
    featured: false,
  },
];

export default function CaseStudiesPage() {
  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const otherCaseStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
          Success Stories
        </h1>
        <p className="text-xl text-muted-foreground">
          Real results from our behavioral health clients. See how our specialized growth strategies
          have transformed treatment centers, detox facilities, and outpatient programs.
        </p>
      </div>

      {/* Featured Case Studies */}
      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl font-heading">
          Featured Case Studies
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {featuredCaseStudies.map((study) => (
            <Card key={study.id} className="flex h-full flex-col overflow-hidden border-2">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
                <Badge className="absolute top-4 right-4 bg-primary/90 hover:bg-primary">{study.tag}</Badge>
              </div>
              <CardHeader>
                <div className="mb-4">{study.icon}</div>
                <CardTitle className="text-2xl">{study.title}</CardTitle>
                <CardDescription className="text-md font-medium text-primary">
                  {study.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-6">{study.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.id} className="text-center">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={study.slug} className="w-full">
                  <Button className="w-full" size="lg">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Other Case Studies */}
      <div>
        <h2 className="mb-8 text-2xl font-bold md:text-3xl font-heading">
          More Success Stories
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {otherCaseStudies.map((study) => (
            <Card key={study.id} className="h-full transition-all hover:shadow-md overflow-hidden">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
                <Badge className="absolute top-4 right-4 bg-primary/90 hover:bg-primary">{study.tag}</Badge>
              </div>
              <CardHeader>
                <div className="mb-2">{study.icon}</div>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription className="text-primary">
                  {study.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{study.description}</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.id} className="text-center">
                      <div className="text-xl font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={study.slug} className="w-full group">
                  <Button variant="outline" className="w-full">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Industry Breakdown Section */}
      <div className="mt-20 mb-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl font-heading">
          Results By Facility Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Residential Treatment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium">Average Census Increase</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">38%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium">Average Revenue Growth</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">52%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium">ROI on Our Services</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">4.8x</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HeartPulse className="mr-2 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                Detox Centers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium">Average Occupancy Rate</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">85%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium">Referral Network Growth</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">127%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium">ROI on Our Services</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">3.9x</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5 text-amber-600 dark:text-amber-400" />
                PHP/IOP Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium">Patient Volume Growth</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">72%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium">Program Expansion</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">2.5x</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium">ROI on Our Services</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">5.2x</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5 text-purple-600 dark:text-purple-400" />
                Outpatient Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium">Client Base Growth</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">93%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium">Digital Transformation</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">100%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium">ROI on Our Services</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">6.1x</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Ready to become our next success story?</h2>
            <p className="text-muted-foreground">
              Book a free consultation to discuss your facility's growth challenges and opportunities.
            </p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="mt-16 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span>Case Studies</span>
      </div>
    </div>
  );
}
