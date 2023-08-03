"use client";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { motion } from "framer-motion";
import { Label } from "./ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowRightIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import { useForm, useWatch } from "react-hook-form";
import { registerSchema } from "../validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../lib/utils";

import { Textarea } from "./ui/textarea";

async function sendEmailAPI(data) {
  try {
    const res = await fetch("/api/send-email", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed to send email.");
    }

    return await res.json();
  } catch (error) {
    throw new Error("Error while sending email.");
  }
}

export default function ContactForm() {
  const [shouldValidateForm, setShouldValidateForm] = useState(true);
  const serviceOptions = [
    "Maintenance",
    "Fabrication",
    "Shutdown",
    "Rigging",
    "Piping",
    "Millwright",
  ];
  const handleServiceOptionClick = (option) => {
    const selectedOptions = form.getValues("serviceInterested") || [];
    if (selectedOptions.includes(option)) {
      form.setValue(
        "serviceInterested",
        selectedOptions.filter((item) => item !== option)
      );
    } else {
      form.setValue("serviceInterested", [...selectedOptions, option]);
    }
  };
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceInterested: [], // Empty array for multi-select options
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Make the API request to send the email
      const response = await sendEmailAPI(data);
      console.log("API response:", response);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to send email. Please try again later.");
    }
  };
  const service = form.watch("serviceInterested");
  return (
    <div className="pt-20 bg-inherit">
      <div className="max-w-md">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center space-y-5 overflow-x-hidden"
            >
              <di>
                <p>Contact info</p>
              </di>
              <div className="flex flex-col justify-between gap-10">
                <div className="flex flex-col w-full gap-10 lg:flex-row">
                  <div className="flex-1">
                    {/* First name */}
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    {/* Last name */}
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-10 lg:flex-row">
                  <div className="flex-1">
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    {/* Phone number */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Example 000-000-0000"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Service interested */}
                <FormItem>
                  <FormLabel>Service you're interested in</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((option) => (
                        <Button
                          key={option}
                          variant="secondary"
                          size="default"
                          onClick={() => handleServiceOptionClick(option)}
                          className={`py-2 px-4 rounded-lg text-black ${
                            form
                              .getValues("serviceInterested")
                              ?.includes(option)
                              ? "bg-yellow-300"
                              : "bg-white"
                          }`}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your message..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full text-white bg-black lg:w-fit "
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
