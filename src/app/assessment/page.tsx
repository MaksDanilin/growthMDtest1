"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle2, CheckIcon, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  facilityName: z.string().min(2, { message: "Facility name is required" }),
  name: z.string().min(2, { message: "Your name is required" }),
  position: z.string().min(2, { message: "Your position is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  facilityType: z.string({ required_error: "Please select a facility type" }),
  currentCensus: z.string().optional(),
  capacity: z.string().optional(),
  challenges: z.object({
    patientAcquisition: z.boolean().optional(),
    insuranceReimbursement: z.boolean().optional(),
    staffRetention: z.boolean().optional(),
    operationalEfficiency: z.boolean().optional(),
    marketing: z.boolean().optional(),
    technology: z.boolean().optional(),
  }),
  goals: z.string().min(10, { message: "Please describe your growth goals" }),
});

// Define the form values type
type FormValues = z.infer<typeof formSchema>;

export default function AssessmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize the form with validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facilityName: "",
      name: "",
      position: "",
      email: "",
      phone: "",
      facilityType: "",
      currentCensus: "",
      capacity: "",
      challenges: {
        patientAcquisition: false,
        insuranceReimbursement: false,
        staffRetention: false,
        operationalEfficiency: false,
        marketing: false,
        technology: false,
      },
      goals: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Assessment form values:", values);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="container max-w-7xl py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-heading">
          Free Growth Assessment
        </h1>
        <p className="text-xl text-muted-foreground">
          Complete this short assessment to receive a personalized report on your facility's
          growth potential and opportunities for improvement.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        {!isSubmitted ? (
          <Card>
            <CardHeader>
              <CardTitle>Behavioral Health Facility Assessment</CardTitle>
              <CardDescription>
                Your information is confidential and will only be used to create your personalized growth report.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="facilityName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facility Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your facility name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Position</FormLabel>
                          <FormControl>
                            <Input placeholder="Executive Director" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="facilityType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facility Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select facility type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="treatment-center">Treatment Center</SelectItem>
                            <SelectItem value="detox-center">Detox Center</SelectItem>
                            <SelectItem value="php-iop">PHP/IOP Program</SelectItem>
                            <SelectItem value="outpatient">Outpatient Services</SelectItem>
                            <SelectItem value="specialty">Specialty Program</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="currentCensus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Census / Patient Count</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g. 35" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="capacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Maximum Capacity</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g. 50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-3">
                    <FormLabel>What are your biggest growth challenges? (Select all that apply)</FormLabel>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="challenges.patientAcquisition"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Patient Acquisition</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="challenges.insuranceReimbursement"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Insurance Reimbursement</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="challenges.staffRetention"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Staff Retention</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="challenges.operationalEfficiency"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Operational Efficiency</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="challenges.marketing"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Marketing/Outreach</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="challenges.technology"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Technology/EHR</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What are your primary growth goals for the next 12 months?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please describe your specific growth objectives..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <CardFooter className="flex-col space-y-4 px-0">
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Submit Assessment"
                      )}
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      After submission, you'll receive your personalized growth report within 2 business days.
                    </p>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl">Assessment Submitted Successfully!</CardTitle>
              <CardDescription>
                Thank you for completing your growth assessment. Our team will review your information and prepare your personalized report.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-center">
                <p>
                  We've sent a confirmation email to the address you provided. You can expect to receive your detailed growth assessment within 2 business days.
                </p>
                <p className="font-medium">
                  One of our behavioral health consultants will contact you soon to schedule your complimentary 30-minute consultation.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <a href="/resources">
                  Browse Our Resources While You Wait
                </a>
              </Button>
            </CardFooter>
          </Card>
        )}

        <div className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">What You'll Receive:</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <p>Detailed analysis of your current growth bottlenecks</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <p>Personalized recommendations based on your facility type and challenges</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <p>Benchmarking against industry standards and best practices</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <p>Actionable growth strategies you can implement immediately</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <p>A 30-minute consultation with one of our behavioral health growth specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
