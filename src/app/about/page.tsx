import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About | The Growth MD",
  description: "Learn about The Growth MD - specialized growth consultancy for behavioral health facilities.",
};

const team = [
  {
    name: "Dr. Emily Chen",
    position: "Founder & CEO",
    bio: "Former executive director of a multi-state behavioral health network with 15+ years of experience in healthcare management.",
    avatar: "/team/avatar-1.jpg",
    initials: "EC",
  },
  {
    name: "Michael Johnson",
    position: "Chief Growth Officer",
    bio: "Healthcare industry veteran with expertise in helping treatment centers scale their operations while maintaining clinical excellence.",
    avatar: "/team/avatar-2.jpg",
    initials: "MJ",
  },
  {
    name: "Sarah Rodriguez",
    position: "Revenue Operations Lead",
    bio: "Certified Revenue Cycle Manager with deep expertise in behavioral health billing, insurance verification, and financial operations.",
    avatar: "/team/avatar-3.jpg",
    initials: "SR",
  },
  {
    name: "David Thompson",
    position: "Patient Acquisition Strategist",
    bio: "Former marketing director for a national treatment center network, specializing in ethical and effective growth strategies.",
    avatar: "/team/avatar-4.jpg",
    initials: "DT",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
          Our Mission
        </h1>
        <p className="text-xl text-muted-foreground">
          Helping behavioral health facilities grow sustainably, so they can help more people
          on their journey to recovery and wellness.
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
              Our Story
            </h2>
            <div className="space-y-4">
              <p>
                The Growth MD was founded by Dr. Emily Chen, who experienced firsthand the challenges of scaling
                behavioral health facilities while maintaining clinical excellence. After growing her own network
                of treatment centers, she recognized the unique growth challenges facing the behavioral health sector.
              </p>
              <p>
                Unlike traditional healthcare, behavioral health programs require specialized approaches to patient
                acquisition, revenue management, and operational design. Generic business consulting rarely addresses
                the unique regulatory, clinical, and market dynamics of this sector.
              </p>
              <p>
                Today, our team of behavioral health industry veterans works with treatment centers, detox facilities,
                PHPs, IOPs, and outpatient programs to optimize their growth while improving patient care.
              </p>
            </div>
          </div>
          <div className="order-first md:order-last">
            <div className="aspect-video overflow-hidden rounded-lg bg-muted" />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl font-heading">
          Our Core Values
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">Patient-Centric Growth</h3>
              <p className="text-muted-foreground">
                We believe sustainable growth comes from delivering exceptional patient experiences
                and clinical outcomes. Profits follow excellence.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">Data-Driven Decisions</h3>
              <p className="text-muted-foreground">
                Our strategies are built on comprehensive analysis and industry benchmarks,
                not hunches or generic best practices.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">Ethical Practices</h3>
              <p className="text-muted-foreground">
                We only recommend strategies that prioritize patient wellbeing and adhere to
                the highest ethical standards in behavioral healthcare.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl font-heading">
          Our Leadership Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="mx-auto mb-4 h-24 w-24">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="text-lg">{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="mb-2 text-primary">{member.position}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
          Ready to Accelerate Your Facility's Growth?
        </h2>
        <p className="mb-6 text-white/80">
          Book a free consultation with our team to discuss your growth goals.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
