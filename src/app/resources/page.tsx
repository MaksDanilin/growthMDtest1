import Link from "next/link";
import {
  FileText, Download, BookOpen, Filter, Search,
  TrendingUp, BarChart3, Users, Brain, Hospital, Building,
  FileSpreadsheet, FileBarChart, Clipboard, Calculator,
  Folder, Table, CheckSquare, BarChart2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "The Ultimate Guide to Revenue Cycle Management for Behavioral Health",
    description: "Comprehensive strategies to optimize your revenue cycle, from insurance verification to claims management and collections.",
    type: "guide",
    categories: ["revenue", "operations"],
    facilities: ["all"],
    downloadPath: "/resources/revenue-cycle-management-guide.pdf",
    thumbnail: "/resources/guide-revenue-cycle.jpg",
    featured: true,
  },
  {
    title: "2025 Behavioral Health Industry Outlook",
    description: "Expert analysis of emerging trends, regulatory changes, and market dynamics affecting the behavioral health industry.",
    type: "whitepaper",
    categories: ["strategy", "trends"],
    facilities: ["all"],
    downloadPath: "/resources/behavioral-health-outlook-2025.pdf",
    thumbnail: "/resources/whitepaper-industry-outlook.jpg",
    featured: true,
  },
  {
    title: "Optimizing Length of Stay: Best Practices for Treatment Centers",
    description: "Evidence-based strategies to optimize length of stay while improving clinical outcomes and patient satisfaction.",
    type: "guide",
    categories: ["clinical", "operations"],
    facilities: ["treatment-centers", "detox-centers"],
    downloadPath: "/resources/length-of-stay-optimization.pdf",
    thumbnail: "/resources/guide-length-of-stay.jpg",
    featured: false,
  },
  {
    title: "Marketing Strategies for Behavioral Health Providers",
    description: "Proven marketing techniques to increase referrals, build your brand, and grow your census.",
    type: "guide",
    categories: ["marketing", "growth"],
    facilities: ["all"],
    downloadPath: "/resources/behavioral-health-marketing.pdf",
    thumbnail: "/resources/guide-marketing.jpg",
    featured: true,
  },
  {
    title: "Staff Retention in Behavioral Healthcare",
    description: "Research-backed strategies to reduce turnover and build a stable, high-performing clinical team.",
    type: "whitepaper",
    categories: ["staffing", "operations"],
    facilities: ["all"],
    downloadPath: "/resources/staff-retention-whitepaper.pdf",
    thumbnail: "/resources/whitepaper-staff-retention.jpg",
    featured: false,
  },
  {
    title: "The ROI of EHR Implementation in Behavioral Health",
    description: "Calculating the return on investment for electronic health record systems in behavioral health settings.",
    type: "whitepaper",
    categories: ["technology", "operations"],
    facilities: ["all"],
    downloadPath: "/resources/ehr-roi-whitepaper.pdf",
    thumbnail: "/resources/whitepaper-ehr-roi.jpg",
    featured: false,
  },
  {
    title: "Building a Successful PHP/IOP Program",
    description: "Step-by-step guide to developing, launching, and scaling partial hospitalization and intensive outpatient programs.",
    type: "guide",
    categories: ["clinical", "growth"],
    facilities: ["php-iop-programs"],
    downloadPath: "/resources/php-iop-guide.pdf",
    thumbnail: "/resources/guide-php-iop.jpg",
    featured: false,
  },
  {
    title: "Insurance Verification & Authorization Playbook",
    description: "Streamline your insurance verification process and maximize authorization success with this comprehensive playbook.",
    type: "guide",
    categories: ["revenue", "operations"],
    facilities: ["all"],
    downloadPath: "/resources/insurance-verification-playbook.pdf",
    thumbnail: "/resources/guide-insurance.jpg",
    featured: false,
  },
  {
    title: "Private Equity in Behavioral Health: Trends & Opportunities",
    description: "Analysis of private equity investment trends in behavioral health and what it means for providers.",
    type: "whitepaper",
    categories: ["strategy", "trends"],
    facilities: ["all"],
    downloadPath: "/resources/private-equity-behavioral-health.pdf",
    thumbnail: "/resources/whitepaper-private-equity.jpg",
    featured: false,
  },
  {
    title: "Implementing Measurement-Based Care in Behavioral Health",
    description: "A practical guide to implementing measurement-based care to improve outcomes and demonstrate value.",
    type: "guide",
    categories: ["clinical", "technology"],
    facilities: ["all"],
    downloadPath: "/resources/measurement-based-care.pdf",
    thumbnail: "/resources/guide-measurement-based-care.jpg",
    featured: false,
  },
  // New templates and tools
  {
    title: "Behavioral Health KPI Dashboard Template",
    description: "Ready-to-use Excel dashboard template for tracking key performance indicators specific to behavioral health facilities.",
    type: "template",
    categories: ["operations", "revenue"],
    facilities: ["all"],
    downloadPath: "/resources/behavioral-health-kpi-dashboard.xlsx",
    thumbnail: "/resources/template-kpi-dashboard.jpg",
    featured: true,
  },
  {
    title: "Utilization Review Documentation Template",
    description: "Standardized documentation templates for utilization review to improve authorization success rates and reduce denials.",
    type: "template",
    categories: ["clinical", "revenue"],
    facilities: ["all"],
    downloadPath: "/resources/utilization-review-templates.docx",
    thumbnail: "/resources/template-utilization-review.jpg",
    featured: false,
  },
  {
    title: "Staff Satisfaction Survey Template",
    description: "Customizable survey template to measure staff satisfaction and identify areas for improvement in retention strategies.",
    type: "template",
    categories: ["staffing", "operations"],
    facilities: ["all"],
    downloadPath: "/resources/staff-satisfaction-survey.docx",
    thumbnail: "/resources/template-staff-survey.jpg",
    featured: false,
  },
  {
    title: "Insurance Contract Analysis Spreadsheet",
    description: "Excel tool to analyze and compare insurance contract terms, reimbursement rates, and profitability by payer.",
    type: "tool",
    categories: ["revenue", "operations"],
    facilities: ["all"],
    downloadPath: "/resources/insurance-contract-analysis.xlsx",
    thumbnail: "/resources/tool-contract-analysis.jpg",
    featured: true,
  },
  {
    title: "Treatment Center Financial Model",
    description: "Comprehensive financial projection model for residential treatment centers with built-in assumptions and growth scenarios.",
    type: "tool",
    categories: ["revenue", "strategy"],
    facilities: ["treatment-centers"],
    downloadPath: "/resources/treatment-center-financial-model.xlsx",
    thumbnail: "/resources/tool-financial-model.jpg",
    featured: true,
  },
  {
    title: "Referral Source Tracking Tool",
    description: "Track and analyze your referral sources, conversion rates, and marketing ROI with this customizable spreadsheet.",
    type: "tool",
    categories: ["marketing", "growth"],
    facilities: ["all"],
    downloadPath: "/resources/referral-tracking-tool.xlsx",
    thumbnail: "/resources/tool-referral-tracking.jpg",
    featured: false,
  },
  {
    title: "Clinical Documentation Audit Checklist",
    description: "Comprehensive checklist for auditing clinical documentation to ensure compliance and maximize reimbursement.",
    type: "template",
    categories: ["clinical", "revenue"],
    facilities: ["all"],
    downloadPath: "/resources/clinical-documentation-audit.pdf",
    thumbnail: "/resources/template-documentation-audit.jpg",
    featured: false,
  },
  {
    title: "Treatment Center Revenue Calculator",
    description: "Interactive spreadsheet to calculate potential revenue based on various scenarios of census, length of stay, and reimbursement rates.",
    type: "tool",
    categories: ["revenue", "strategy"],
    facilities: ["treatment-centers", "php-iop-programs"],
    downloadPath: "/resources/revenue-calculator.xlsx",
    thumbnail: "/resources/tool-revenue-calculator.jpg",
    featured: true,
  },
];

export default function ResourcesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950 dark:to-indigo-950 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Resources for Behavioral Health Leaders
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8">
              Free guides, whitepapers, templates, and tools to help you optimize operations, increase revenue, and improve clinical outcomes
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="outline" className="px-3 py-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                <BookOpen className="mr-1 h-3.5 w-3.5" />
                10+ Guides
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                <FileText className="mr-1 h-3.5 w-3.5" />
                8+ Whitepapers
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                <FileSpreadsheet className="mr-1 h-3.5 w-3.5" />
                8+ Templates
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                <Calculator className="mr-1 h-3.5 w-3.5" />
                5+ Tools
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                <Download className="mr-1 h-3.5 w-3.5" />
                Free Downloads
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white dark:bg-slate-950 py-8 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search resources..."
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="ghost" size="sm">Clear</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 lg:w-auto lg:inline-flex">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">All Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <ResourceCard key={resource.title} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter(resource => resource.type === "guide")
                  .map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="whitepapers" className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Whitepapers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter(resource => resource.type === "whitepaper")
                  .map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="templates" className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter(resource => resource.type === "template")
                  .map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter(resource => resource.type === "tool")
                  .map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="featured" className="mt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter(resource => resource.featured)
                  .map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-10">
            Browse Resources by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <CategoryCard
              title="Revenue Optimization"
              icon={TrendingUp}
              count={resources.filter(r => r.categories.includes("revenue")).length}
            />
            <CategoryCard
              title="Operations"
              icon={BarChart3}
              count={resources.filter(r => r.categories.includes("operations")).length}
            />
            <CategoryCard
              title="Clinical Excellence"
              icon={Brain}
              count={resources.filter(r => r.categories.includes("clinical")).length}
            />
            <CategoryCard
              title="Staffing & Leadership"
              icon={Users}
              count={resources.filter(r => r.categories.includes("staffing")).length}
            />
            <CategoryCard
              title="Strategy & Growth"
              icon={Building}
              count={resources.filter(r => r.categories.includes("strategy") || r.categories.includes("growth")).length}
            />
            <CategoryCard
              title="Technology"
              icon={Hospital}
              count={resources.filter(r => r.categories.includes("technology")).length}
            />
          </div>
        </div>
      </section>

      {/* Resource Types Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-10">
            Resource Types to Meet Your Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ResourceTypeCard
              title="Practical Guides"
              description="Step-by-step instructions and best practices for implementing effective strategies in your facility."
              icon={BookOpen}
              count={resources.filter(r => r.type === "guide").length}
              color="blue"
            />
            <ResourceTypeCard
              title="Research Whitepapers"
              description="In-depth analysis and research on industry trends, challenges, and opportunities."
              icon={FileText}
              count={resources.filter(r => r.type === "whitepaper").length}
              color="purple"
            />
            <ResourceTypeCard
              title="Ready-to-Use Templates"
              description="Customizable templates for documentation, tracking, analysis, and reporting."
              icon={Clipboard}
              count={resources.filter(r => r.type === "template").length}
              color="green"
            />
            <ResourceTypeCard
              title="Interactive Tools"
              description="Calculators, analyzers, and other interactive tools to help you make data-driven decisions."
              icon={Calculator}
              count={resources.filter(r => r.type === "tool").length}
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* Link to Benchmarking Tool */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gradient-to-br from-primary to-secondary p-6 md:p-8 flex items-center justify-center">
                <BarChart2 className="w-24 h-24 text-white" />
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Industry Benchmarking Tool</h2>
                <p className="text-muted-foreground mb-6">
                  Compare your facility's performance against industry benchmarks across key metrics including financials, operations, clinical outcomes, and more. Get personalized recommendations based on your results.
                </p>
                <Button asChild size="lg">
                  <Link href="/benchmarking-tool">
                    Try the Benchmarking Tool
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-800 dark:to-indigo-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Get New Resources in Your Inbox
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter and be the first to receive our latest guides, whitepapers, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-indigo-600 hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface Resource {
  title: string;
  description: string;
  type: string;  // Changed from union type to allow any string
  categories: string[];
  facilities: string[];
  downloadPath: string;
  thumbnail: string;
  featured: boolean;
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative">
        <div className="absolute top-2 right-2">
          <Badge className={
            resource.type === "guide" ? "bg-blue-500" :
            resource.type === "whitepaper" ? "bg-purple-500" :
            resource.type === "template" ? "bg-green-500" :
            "bg-orange-500"
          }>
            {resource.type === "guide" ? "Guide" :
             resource.type === "whitepaper" ? "Whitepaper" :
             resource.type === "template" ? "Template" : "Tool"}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
        <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {resource.categories.map((category: string) => (
            <Badge key={category} variant="outline" className="text-xs capitalize">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
}

interface CategoryCardProps {
  title: string;
  icon: React.ElementType;
  count: number;
}

function CategoryCard({ title, icon: Icon, count }: CategoryCardProps) {
  return (
    <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-full mx-auto flex items-center justify-center mb-2">
          <Icon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-base mb-1">{title}</CardTitle>
        <CardDescription>{count} resources</CardDescription>
      </CardContent>
    </Card>
  );
}

interface ResourceTypeCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  count: number;
  color: string;
}

function ResourceTypeCard({ title, description, icon: Icon, count, color }: ResourceTypeCardProps) {
  const colorClasses = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className={`w-16 h-16 rounded-full ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <p className="text-sm font-medium">{count} {title.toLowerCase()} available</p>
      </CardFooter>
    </Card>
  );
}
