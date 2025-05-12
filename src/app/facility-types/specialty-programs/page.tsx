import Link from "next/link";
import { Tablet, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SpecialtyProgramsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/facility-types" className="hover:text-blue-600 dark:hover:text-blue-400">Facility Types</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Specialty Programs</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/facility-types">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Facility Types
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
              <Tablet className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Specialty Programs Growth Solutions
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Custom growth approaches for specialized behavioral health services including trauma, eating disorders, and dual diagnosis programs
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
              <h2>Specialty Programs Solutions</h2>
              <p>
                This page is under development. Please check back soon for detailed information about our specialized growth solutions for specialty behavioral health programs like trauma treatment, eating disorders, dual diagnosis, and more.
              </p>
              <p>
                In the meantime, you can <Link href="/assessment" className="text-amber-600 dark:text-amber-400 hover:underline">schedule a free consultation</Link> to discuss your specialty program's needs.
              </p>
              <Button asChild className="mt-4 bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/facility-types">
                  Return to All Facility Types
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
