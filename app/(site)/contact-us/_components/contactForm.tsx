"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MessageCircleHeartIcon } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ContactPageQueryResult } from "@/sanity.types";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Required").nonempty("Required"),
  lastName: z.string().min(1, "Required").nonempty("Required"),
  email: z.email("Please enter valid email.").nonempty("Required"),
  contactNo: z
    .string()
    .regex(/^\d+$/, "Please enter valid number")
    .min(10, "Must be 10 digit long")
    .max(10, "Must be 10 digit long"),
  message: z.string(),
});

const ContactForm = ({
  contactPage,
}: {
  contactPage: NonNullable<ContactPageQueryResult>;
}) => {
  const [submitMessage, setSubmitMessage] = useState<{
    success: boolean;
    msg: string;
  } | null>();
  const submitMsgTimeoutRef = useRef<NodeJS.Timeout>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: FieldValues) => {
    try {
      if (submitMsgTimeoutRef.current) {
        clearTimeout(submitMsgTimeoutRef.current);
      }
      setIsSubmitting(true);
      const res = await fetch("/api/send-email", {
        body: JSON.stringify(data),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const response = await res.json();
      if (!response.success) {
        console.error(response.message);
        setSubmitMessage({
          success: false,
          msg: "Error Sending email, please try again later",
        });
      }
      setSubmitMessage({ success: true, msg: "Email sent Successfully." });
    } catch (error) {
      console.error(error);
      setSubmitMessage({
        success: false,
        msg: "Error Sending email, please try again later",
      });
    } finally {
      setIsSubmitting(false);
      reset();
      submitMsgTimeoutRef.current = setTimeout(
        () => setSubmitMessage(null),
        5000,
      );
    }
  };

  return (
    <div className="max-width-container padding-container py-0! -translate-y-20">
      <div className="flex flex-col gap-6 p-8 bg-white shadow-2xl rounded-2xl text-tuatara">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-deep-bright-red">
          <MessageCircleHeartIcon />
          <span>{contactPage.formTitle}</span>
        </h2>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <FormField
              name="firstName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="contactNo"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact No.</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="message"
              control={control}
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input
                      as="textarea"
                      {...field}
                      className="max-h-30 min-h-15"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-4 md:col-span-2">
              <Button
                className={cn("cursor-pointer w-fit")}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting...." : "Submit"}
              </Button>
              {submitMessage && (
                <p
                  className={cn(
                    "text-sm",
                    submitMessage.success ? "text-green-600" : "text-red-600",
                  )}
                >
                  {submitMessage.msg}
                </p>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
