"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart3,
  Calculator,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  FileBarChart,
  FileText,
  Gauge,
  Home,
  LayersIcon,
  LogOut,
  Menu,
  Presentation,
  Settings,
  Users,
  Search,
  Activity,
  Calendar,
  Award,
  Database
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Dashboard navigation links
const dashboardNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Growth Toolkit",
    items: [
      {
        title: "Treatment Cost Calculator",
        href: "/dashboard/tools/cost-calculator",
        icon: Calculator,
      },
      {
        title: "Staffing Optimizer",
        href: "/dashboard/tools/staffing-optimizer",
        icon: Users,
      },
      {
        title: "Network Gap Analyzer",
        href: "/dashboard/tools/network-analyzer",
        icon: LayersIcon,
      },
      {
        title: "Mock Accreditation Audit",
        href: "/dashboard/tools/accreditation-audit",
        icon: ClipboardCheck,
      },
      {
        title: "Payer Contract Analyzer",
        href: "/dashboard/tools/payer-analyzer",
        icon: FileText,
      },
      {
        title: "Revenue Leakage Detector",
        href: "/dashboard/tools/revenue-detector",
        icon: BarChart3,
      },
      {
        title: "Outcomes Framework Builder",
        href: "/dashboard/tools/outcomes-framework",
        icon: Activity,
      },
      {
        title: "Staff Retention Diagnostic",
        href: "/dashboard/tools/staff-retention",
        icon: Award,
      },
    ],
  },
  {
    title: "Public Tools",
    items: [
      {
        title: "ROI Calculator",
        href: "/roi-calculator",
        icon: Calculator,
        external: true,
      },
      {
        title: "Benchmarking Tool",
        href: "/benchmarking-tool",
        icon: BarChart3,
        external: true,
      },
      {
        title: "Facility Health Scorecard",
        href: "/facility-health-scorecard",
        icon: Gauge,
        external: true,
      },
    ],
  },
  {
    title: "Saved Work",
    items: [
      {
        title: "My Reports",
        href: "/dashboard/saved/reports",
        icon: FileBarChart,
      },
      {
        title: "Saved Analyses",
        href: "/dashboard/saved/analyses",
        icon: Database,
      },
      {
        title: "Bookmarked Resources",
        href: "/dashboard/saved/resources",
        icon: Presentation,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Profile Settings",
        href: "/dashboard/settings/profile",
        icon: Settings,
      },
      {
        title: "Subscription",
        href: "/dashboard/settings/subscription",
        icon: CreditCard,
      },
    ],
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // For this version, we're simulating authentication
  // In a real app, this would be connected to an auth provider
  const mockUser = {
    fullName: "Jane Smith",
    email: "jane@example.com",
    subscriptionTier: "premium",
    avatar: null,
  };

  // Protected route to a temporary simulation
  return (
    <DashboardLayoutContent user={mockUser}>{children}</DashboardLayoutContent>
  );
}

function DashboardLayoutContent({ children, user }: { children: React.ReactNode; user: any }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check window width on mount and resize
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial value
    checkWindowSize();

    // Add event listener
    window.addEventListener("resize", checkWindowSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  // Get initials for avatar
  const getInitials = (name: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const handleLogout = () => {
    // In a real app, this would call an auth service logout method
    window.location.href = "/";
  };

  const subscriptionBadge = () => {
    if (!user) return null;

    switch (user.subscriptionTier) {
      case "premium":
        return <Badge className="ml-auto bg-gradient-to-r from-amber-500 to-yellow-300 text-white">Premium</Badge>;
      case "enterprise":
        return <Badge className="ml-auto bg-gradient-to-r from-indigo-600 to-blue-500 text-white">Enterprise</Badge>;
      default:
        return <Badge className="ml-auto" variant="outline">Free</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Mobile sidebar */}
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden fixed top-4 left-4 z-40"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 pt-10 w-72">
            <DashboardSidebar
              pathname={pathname}
              user={user}
              logout={handleLogout}
              onNavigate={() => setIsOpen(false)}
            />
          </SheetContent>
        </Sheet>
      ) : (
        <aside className="hidden lg:block w-72 border-r bg-card sticky top-0 h-screen overflow-hidden">
          <DashboardSidebar pathname={pathname} user={user} logout={handleLogout} />
        </aside>
      )}

      {/* Main content */}
      <div className="flex-1">
        {/* Top navigation for mobile */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <div className="flex flex-1 items-center">
            {/* Mobile hamburger already handled above */}
            <div className="lg:hidden w-6 h-6" /> {/* Spacer for mobile */}

            <Link href="/dashboard" className="flex items-center lg:hidden ml-2">
              <span className="font-heading text-xl font-bold">Growth MD</span>
              <span className="sr-only">Dashboard</span>
            </Link>

            <div className="relative ml-auto flex-1 max-w-md lg:ml-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search tools and resources..."
                className="w-full pl-8 lg:w-[300px] bg-background"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user ? getInitials(user.fullName) : "U"}</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.fullName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                    {subscriptionBadge()}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings/profile">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings/subscription">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Subscription</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 dark:text-red-400 cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

interface SidebarProps {
  pathname: string;
  user: any;
  logout: () => void;
  onNavigate?: () => void;
}

function DashboardSidebar({ pathname, user, logout, onNavigate }: SidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-6 py-5 flex items-center border-b">
        <Link href="/dashboard" className="flex items-center" onClick={onNavigate}>
          <span className="font-heading text-2xl font-bold">The Growth MD</span>
          <span className="sr-only">Dashboard</span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-10">
          {dashboardNavItems.map((section, i) => (
            <div key={i} className="space-y-2">
              <h3 className="px-4 text-sm font-medium text-muted-foreground">
                {section.title}
              </h3>

              {section.items ? (
                <nav className="grid gap-1">
                  {section.items.map((item, j) => (
                    <Link
                      key={j}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={onNavigate}
                      className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      )}
                    >
                      <item.icon className="mr-2 h-5 w-5 shrink-0" />
                      <span>{item.title}</span>
                      {item.external && <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />}
                    </Link>
                  ))}
                </nav>
              ) : (
                <Link
                  href={section.href!}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                    pathname === section.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <section.icon className="mr-2 h-5 w-5" />
                  <span>{section.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-auto border-t">
        <div className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback>
                {user ? user.fullName.split(" ").map((n: string) => n[0]).join("").toUpperCase().substring(0, 2) : "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-sm font-medium">{user?.fullName}</span>
              <span className="truncate text-xs text-muted-foreground">
                {user?.email}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto"
              onClick={logout}
            >
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
