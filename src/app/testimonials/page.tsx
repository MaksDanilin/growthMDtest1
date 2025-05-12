import Link from "next/link";
import { Quote, Play, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: "highland-recovery",
    name: "Highland Recovery Center",
    role: "48-bed Residential Treatment Center",
    image: "/testimonials/highland.jpg",
    quote: "The Growth MD's strategic approach to revenue cycle management and census optimization has been transformative for our facility. We've seen a 42% increase in revenue and maintained consistent 90%+ occupancy since implementing their recommendations.",
    person: "Michael Rodriguez",
    personRole: "CEO",
    results: [
      { metric: "Revenue Increase", value: "42%" },
      { metric: "Census Improvement", value: "18%" },
      { metric: "Staff Retention", value: "35% higher" },
    ],
    tags: ["Revenue Optimization", "Census Improvement", "Operational Excellence"],
    featured: true,
    hasVideo: true,
  },
  {
    id: "serenity-detox",
    name: "Serenity Detox Services",
    role: "32-bed Medical Detox Facility",
    image: "/testimonials/serenity.jpg",
    quote: "Working with The Growth MD helped us streamline our utilization review process and strengthen our relationships with insurance providers. The result was a 28% increase in reimbursement rates and a significant improvement in our ability to transition clients to the next level of care.",
    person: "Jennifer Wallace",
    personRole: "Executive Director",
    results: [
      { metric: "Reimbursement Increase", value: "28%" },
      { metric: "Successful Placement Rate", value: "94%" },
      { metric: "Insurance Denials", value: "Reduced by 65%" },
    ],
    tags: ["Revenue Optimization", "Payer Relations", "Clinical Excellence"],
    featured: true,
    hasVideo: false,
  },
  {
    id: "mindful-healing",
    name: "Mindful Healing Center",
    role: "PHP/IOP Program",
    image: "/testimonials/mindful.jpg",
    quote: "Our PHP/IOP program was struggling with client retention and inconsistent referrals. The Growth MD implemented a comprehensive patient acquisition strategy and improved our clinical programming. Within three months, our average census doubled and our completion rates improved dramatically.",
    person: "Dr. Sarah Johnson",
    personRole: "Clinical Director",
    results: [
      { metric: "Census Increase", value: "105%" },
      { metric: "Program Completion Rate", value: "Improved by 48%" },
      { metric: "Revenue per Client", value: "Increased by 23%" },
    ],
    tags: ["Patient Acquisition", "Clinical Programming", "Revenue Growth"],
    featured: false,
    hasVideo: true,
  },
  {
    id: "wellness-recovery",
    name: "Wellness Recovery Partners",
    role: "Multi-location Outpatient Clinics",
    image: "/testimonials/wellness.jpg",
    quote: "With five outpatient locations, we were facing challenges with standardizing operations while maintaining quality care. The Growth MD helped us develop a scalable operational model that improved efficiency and client satisfaction across all locations.",
    person: "David Chen",
    personRole: "Operations Director",
    results: [
      { metric: "Operational Costs", value: "Reduced by 22%" },
      { metric: "Client Satisfaction", value: "Increased to 96%" },
      { metric: "Staff Productivity", value: "Improved by 34%" },
    ],
    tags: ["Operational Excellence", "Multi-site Management", "Staff Development"],
    featured: false,
    hasVideo: false,
  },
  {
    id: "horizon-behavioral",
    name: "Horizon Behavioral Health",
    role: "Specialized Trauma Treatment Program",
    image: "/testimonials/horizon.jpg",
    quote: "The Growth MD worked with us to develop a specialized trauma treatment program that differentiated our services in a competitive market. Their approach to clinical program development and marketing strategy has completely transformed our facility.",
    person: "Maria Gonzalez",
    personRole: "Program Director",
    results: [
      { metric: "New Client Admissions", value: "Increased by 67%" },
      { metric: "Private Pay Clients", value: "Increased by 42%" },
      { metric: "Average Length of Stay", value: "Extended by 18%" },
    ],
    tags: ["Program Development", "Specialization", "Marketing Strategy"],
    featured: true,
    hasVideo: true,
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-sky-50 dark:from-teal-950 dark:to-sky-950 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Client Success Stories
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8">
              Real results from behavioral health facilities that partnered with The Growth MD
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                <Link href="/assessment">
                  Get Your Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Client Testimonials
              </h2>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="videos">With Videos</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="featured">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials
                  .filter((t) => t.featured)
                  .map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials
                  .filter((t) => t.hasVideo)
                  .map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Featured Success Story
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-xl" />
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-10">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-sm text-white font-medium">
                  3:42
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mr-3">
                    <Quote className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Highland Recovery Center</h3>
                    <p className="text-slate-500 dark:text-slate-400">48-bed Residential Treatment Center</p>
                  </div>
                </div>
                <blockquote className="text-xl italic font-medium text-slate-700 dark:text-slate-300 my-6">
                  "The Growth MD's strategic approach to revenue cycle management and census optimization has been transformative for our facility. We've seen a 42% increase in revenue and maintained consistent 90%+ occupancy since implementing their recommendations."
                </blockquote>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full mr-3" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Michael Rodriguez</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">CEO, Highland Recovery Center</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Results:</h4>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300"><span className="font-semibold">42% Revenue Increase</span> within 6 months of implementation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300"><span className="font-semibold">18% Census Improvement</span> from 76% to 94% average occupancy</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300"><span className="font-semibold">35% Improvement in Staff Retention</span> through optimized staffing models</span>
                  </div>
                </div>
                <Button asChild className="flex items-center">
                  <Link href="/case-studies/highland-recovery">
                    Read Full Case Study <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Our Impact By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$42M+</div>
              <div className="text-slate-600 dark:text-slate-400">Additional Annual Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">15,000+</div>
              <div className="text-slate-600 dark:text-slate-400">Additional Patients Served</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">96%</div>
              <div className="text-slate-600 dark:text-slate-400">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 4 12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">98%</div>
              <div className="text-slate-600 dark:text-slate-400">Client Renewal Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-800 dark:to-sky-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Behavioral Health Facility?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join our growing list of success stories. Schedule a free assessment today to discover how we can help you achieve similar results.
            </p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-100">
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

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  person: string;
  personRole: string;
  results: { metric: string; value: string }[];
  tags: string[];
  featured: boolean;
  hasVideo: boolean;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{testimonial.name}</CardTitle>
            <CardDescription>{testimonial.role}</CardDescription>
          </div>
          {testimonial.hasVideo && (
            <div className="w-9 h-9 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
              <Play className="h-5 w-5 text-teal-600 dark:text-teal-400 ml-0.5" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <blockquote className="italic text-slate-600 dark:text-slate-400 mb-4">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full mr-3" />
          <div>
            <p className="font-medium text-slate-900 dark:text-white">{testimonial.person}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.personRole}</p>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          {testimonial.results.map((result) => (
            <div key={result.metric} className="flex justify-between items-center text-sm">
              <span className="text-slate-600 dark:text-slate-400">{result.metric}</span>
              <span className="font-medium text-teal-600 dark:text-teal-400">{result.value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {testimonial.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="ghost" className="w-full flex items-center justify-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
          <Link href={`/case-studies/${testimonial.id}`}>
            Read Full Case Study <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
