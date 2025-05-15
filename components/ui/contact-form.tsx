"use client"
import { useState, useEffect, useRef, FormEvent } from "react"
import Image from "next/image"
import { SubmitButton } from "./submit-button";
import emailjs from '@emailjs/browser';

import { toast } from "@/hooks/use-toast"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "EmailJS credentials are not set up correctly.",
      });
      setIsLoading(false);
      return;
    }

    const templateParams = {
      from_name: formData.email,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: "Success!",
        description: "Your message has been sent. I'll get back to you soon!",
      });
      formRef.current?.reset();
      setFormData({ email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
      <div className="space-y-4 mt-10">
        <label htmlFor="email" className="block text-xl font-quantico text-white-100">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#111] rounded-xl p-4 text-xl border-0 focus:ring-1 focus:ring-gray-400 font-quantico placeholder:text-gray-600"
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="message" className="block text-xl font-quantico text-white-100">
          Message 
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#111] rounded-xl font-quantico p-4 text-xl border-0 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-600 resize-none"
        />
      </div>

      <div className="flex w-full justify-center sm:flex-row font-quantico items-center space-y-4 sm:space-y-0">
        <SubmitButton isLoading={isLoading} /> 
      </div>

    </form>
  )
}
