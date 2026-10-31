"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import SectionHeading from "../ui/section-heading";
import { ContactInput, contactSchema } from "@/app/lib/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../ui/button";
import { SendHorizontal } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { label: "Github", link: "https://github.com/" },
  { label: "LinkedIn", link: "https://linkedin.com/" },
  { label: "X/Twitter", link: "https://x.com/" },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullname: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactInput> = async (data) => {
    console.log("Form data:", data);
    reset(); // reset the form after a successful submit.
  };

  return (
    <section id="contact" className="mt-25 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* heading */}
      <SectionHeading index={5} title="Initiate Transmission" />

      {/* content */}
      <div className="flex flew-row gap-8 flex-wrap mt-15">
        {/* form container */}
        <div className="p-5 rounded-md bg-muted/10">
          <div className="flex flex-col gap-3">
            {/* header */}
            <div className="flex flex-row gap-5 justify-between items-center border-b border-muted/30 py-2">
              <p className="text-xs text-tertiary uppercase">
                &gt; Transmit_Payload{"()"}
              </p>
              <p className="text-xs text-muted uppercase">
                Secure Channel // tls 1.3
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              {/* fullname & email */}
              <div className="w-full flex flex-row gap-2 flex-wrap">
                {/* fullname input */}
                <div className="min-w-90 flex flex-col gap-1">
                  <label
                    htmlFor="fullname"
                    className="text-muted text-[11px] uppercase"
                  >
                    Fullname / Alias
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("fullname")}
                    className="w-full bg-background placeholder:text-muted/10 text-sm p-2"
                  />
                  {errors?.fullname && (
                    <span className="text-xs text-red-400">
                      {errors?.fullname?.message}
                    </span>
                  )}
                </div>

                {/* email input */}
                <div className="min-w-90 flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-muted text-[11px] uppercase"
                  >
                    Direct Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@gmail.com"
                    {...register("email")}
                    className="w-full bg-background placeholder:text-muted/10 text-sm p-2"
                  />
                  {errors?.email && (
                    <span className="text-xs text-red-400">
                      {errors?.email?.message}
                    </span>
                  )}
                </div>
              </div>

              {/* message */}
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="text-muted text-[11px] uppercase"
                >
                  Payload / Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Online project deliverable, stack requirements..."
                  {...register("message")}
                  className="w-full bg-background placeholder:text-muted/10 text-sm p-2"
                />
                {errors?.message && (
                  <span className="text-xs text-red-400">
                    {errors?.message?.message}
                  </span>
                )}
              </div>

              {/* submit button */}
              <Button
                style="primary"
                Icon={SendHorizontal}
                className="justify-center mt-5"
              >
                Transmit Message
              </Button>
            </form>
          </div>
        </div>
        {/* quick links */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="p-5 rounded-md bg-muted/10">
            <div className="flex flex-col gap-3">
              {/* header */}
              <div className="flex flex-row justify-between gap-2 items-center rounded-md bg-background p-2">
                <div className="flex flex-row gap-1 items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <p className="text-xs text-foreground">
                    Available for new challenges
                  </p>
                </div>

                <p className="text-[11px] text-secondary uppercase">
                  Take a Slot
                </p>
              </div>

              {/* contact info */}
              <div className="flex flex-col">
                <span className="text-[10px] text-muted uppercase">
                  Primary Terminal Mail
                </span>
                <p className="text-primary text-sm">essaidbusiness@gmail.com</p>
              </div>

              {/* based in */}
              <div className="flex flex-col">
                <span className="text-[10px] text-muted uppercase">
                  Based In
                </span>
                <p className="text-foreground text-sm">
                  Morocco, Kasba Tadla // Remote Worldwide
                </p>
              </div>

              {/* response latency */}
              <div className="flex flex-col">
                <span className="text-[10px] text-muted uppercase">
                  Response Latency
                </span>
                <p className="text-secondary text-sm">
                  &lt; 12 Hours Guarantee
                </p>
              </div>

              {/* separator */}
              <div className="w-full h-px bg-muted/30 mt-6" />

              {/* external networks */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-muted uppercase">
                  External Networks
                </span>
                <div className="flex flex-row gap-1 items-center">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.link}
                      className="w-full text-sm text-muted px-3 py-1 rounded-md bg-muted/15 text-center hover:text-primary hover:bg-muted/20 transition-colors "
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* terminal */}
          <div className="bg-muted/5 rounded-md p-5">
            <p className="text-xs text-muted">
              <span className="text-secondary">$</span> ping -c 0x0061.internal
            </p>
            <p className="text-xs text-foreground/80">
              64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.042 ms
            </p>
            <p className="text-xs text-tertiary">
              // 0% packet loss. Systems 100% nominal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
