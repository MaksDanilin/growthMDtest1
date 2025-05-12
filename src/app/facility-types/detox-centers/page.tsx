import Link from "next/link";
import { Hospital, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DetoxCentersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/facility-types" className="hover:text-blue-600 dark:hover:text-blue-400">Facility Types</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">Detox Centers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Link href="/facility-types">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Facility Types
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Hospital className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Detox Center Growth Solutions
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mt-2">
                Specialized strategies for medical detoxification facilities focusing on patient safety, clinical excellence, and operational efficiency
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
              <h2>Detox Centers Solutions</h2>
              <p>
                This page is under development. Please check back soon for detailed information about our specialized growth solutions for detox centers.
              </p>
              <p>
                In the meantime, you can <Link href="/assessment" className="text-blue-600 dark:text-blue-400 hover:underline">schedule a free consultation</Link> to discuss your detox center's needs.
              </p>
              <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
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
