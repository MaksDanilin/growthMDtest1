"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  ChevronRight,
  Clock,
  DollarSign,
  FileBarChart,
  Info,
  LayoutDashboard,
  TrendingUp,
  Users
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Simulated data for the dashboard
const activityData = [
  {
    id: 1,
    title: "Revenue optimization analysis completed",
    date: "Today at 10:30 AM",
    status: "completed",
  },
  {
    id: 2,
    title: "ROI calculator assessment saved",
    date: "Yesterday at 3:45 PM",
    status: "completed",
  },
  {
    id: 3,
    title: "Network gap analysis in progress",
    date: "May 5, 2025",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Mock accreditation audit scheduled",
    date: "May 10, 2025 at 2:00 PM",
    status: "scheduled",
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back, Jane! Here's your growth analytics overview.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Calendar className="mr-2 h-4 w-4" />
            Select date range
          </Button>
          <Button size="sm" className="h-9">
            <FileBarChart className="mr-2 h-4 w-4" />
            Download report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Last updated: 5 min ago</span>
          </div>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
                <Progress value={65} className="h-1 mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Patient Admissions
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  +10.4% from last month
                </p>
                <Progress value={45} className="h-1 mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Bed Utilization
                </CardTitle>
                <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">84.5%</div>
                <p className="text-xs text-muted-foreground">
                  +4.3% from last month
                </p>
                <Progress value={84} className="h-1 mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Growth Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.3%</div>
                <p className="text-xs text-muted-foreground">
                  +12.8% from last month
                </p>
                <Progress value={76} className="h-1 mt-3" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <Card className="col-span-1 md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>
                  Monthly revenue breakdown by service type
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full flex items-center justify-center">
                  <BarChart3 className="h-60 w-60 text-muted-foreground" />
                  <p className="text-muted-foreground">Revenue chart visualization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-between">
                  <span>Run ROI Analysis</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Schedule Staff Training</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Review Payer Contracts</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Check Facility Metrics</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default">
                  View All Actions
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Facility Performance Analysis</CardTitle>
              <CardDescription>
                Track and compare key performance indicators across your facilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center">
                <p className="text-muted-foreground">Performance metrics visualization will appear here</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Filter Metrics</Button>
              <Button>Export Data</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Tools Tab */}
        <TabsContent value="tools" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">ROI Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Calculate return on investment for different growth strategies.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/tools/cost-calculator" className="w-full">
                  <Button variant="default" className="w-full">
                    Launch Tool
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Staffing Optimizer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Optimize staffing levels based on patient census and acuity.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/tools/staffing-optimizer" className="w-full">
                  <Button variant="default" className="w-full">
                    Launch Tool
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Network Gap Analyzer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Identify network opportunities and maximize payer relationships.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/tools/network-analyzer" className="w-full">
                  <Button variant="default" className="w-full">
                    Launch Tool
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mock Accreditation Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Prepare for accreditation with a comprehensive mock audit.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/tools/accreditation-audit" className="w-full">
                  <Button variant="default" className="w-full">
                    Launch Tool
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Revenue Leakage Detector</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Identify and address revenue leakage points in your operations.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/tools/revenue-detector" className="w-full">
                  <Button variant="default" className="w-full">
                    Launch Tool
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Staff Retention Diagnostic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Diagnose retention issues and develop targeted improvement strategies.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/tools/staff-retention" className="w-full">
                  <Button variant="default" className="w-full">
                    Launch Tool
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest tool usage and analyses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activityData.map((item) => (
                <div key={item.id} className="flex items-start gap-4 rounded-md border p-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {item.date}
                    </div>
                  </div>
                  <div>
                    {item.status === "completed" && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
                    )}
                    {item.status === "in-progress" && (
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200">In progress</Badge>
                    )}
                    {item.status === "scheduled" && (
                      <Badge variant="outline" className="bg-orange-100 text-orange-800 hover:bg-orange-200">Scheduled</Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="border rounded-md p-4 bg-muted/20">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-blue-500" />
          <h3 className="text-sm font-medium">Getting Started</h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          This dashboard provides an overview of your facility's growth metrics.
          Use the tools section to access specialized growth tools for your facility.
          Need help? <Link href="/contact" className="text-primary underline hover:text-primary/80">Schedule a consultation</Link> with our growth experts.
        </p>
      </div>
    </div>
  );
}
