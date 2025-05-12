import Link from "next/link";
import { BadgePercent, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PayerContractingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Payer Contracting</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
              <BadgePercent className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Payer Contracting
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Negotiate favorable contracts with insurance providers and optimize your revenue cycle management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate dark:prose-invert">
              <h2>Payer Contracting Service</h2>
              <p>
                This page is under development. Please check back soon for detailed information about our Payer Contracting services.
              </p>
              <p>
                In the meantime, you can <Link href="/assessment" className="text-blue-600 dark:text-blue-400 hover:underline">schedule a free consultation</Link> to discuss your payer contracting needs.
              </p>
              <Button asChild className="mt-4 bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/services">
                  Return to All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
