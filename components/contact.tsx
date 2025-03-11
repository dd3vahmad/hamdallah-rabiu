"use client";

import { Mail, Send } from "lucide-react";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { GlassShadow } from "./ui/ui";
import Animate from "./providers/animate";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  tel: z.string().optional(),
  work: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

// Define the form data type from the schema
type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  // Initialize the form with useForm hook
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      work: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Form submitted:", data);
      // Add your form submission logic here (e.g., API call)
      form.reset();
      // You might want to show a success message
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors appropriately
    }
  };

  return (
    <div
      id="contact"
      className="w-full md:w-[60vw] mx-auto mb-28 relative flex flex-col pt-30"
    >
      <GlassShadow />
      <h2 className="text-3xl font-semibold w-full text-center my-5">
        Let's <span className="text-primary">Collaborate</span>
      </h2>

      <div className="flex flex-col gap-5 justify-center items-center">
        <Animate animationType="slideUp">
          <p className="text-sm text-center max-w-lg font-semibold mb-5">
            I'm currently available for freelance projects and professional
            collaborations. If you have a project that could benefit from my
            expertise, I'd be delighted to discuss it.
          </p>

          <div className="flex flex-col md:flex-row gap-5 w-full justify-center items-center mb-8">
            <div className="flex flex-col items-center">
              <p className="text-base font-semibold">
                Reach out directly or use the form below:
              </p>
              <a
                href="mailto:hamdallahrabiu@gmail.com"
                className="flex items-center gap-2 text-primary text-lg font-semibold mt-2 hover:underline"
              >
                <Mail size={20} className="text-primary" />{" "}
                hamdallahrabiu@gmail.com
              </a>
            </div>
          </div>
        </Animate>

        <Animate animationType="slideUp">
          <Card className="w-full max-w-2xl bg-white/5 backdrop-blur-sm">
            <CardContent className="pt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              className="outline-none"
                              style={{ outline: "none" }}
                              placeholder="Your name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="work"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Type</FormLabel>
                          <FormControl>
                            <Input placeholder="Type of project" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project"
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full md:w-auto cursor-pointer text-white"
                  >
                    <Send />
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </Animate>
      </div>
    </div>
  );
};

export default Contact;
