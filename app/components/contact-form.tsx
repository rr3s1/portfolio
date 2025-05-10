"use client"
import { useActionState, useEffect } from "react"
import Image from "next/image"
import { SubmitButton } from "./submit-button"

import { toast } from "@/hooks/use-toast"
import { sendEmail } from "../actions/send-email"

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)

    if (result.success) {
      toast({
        title: "Success",
        description: result.success,
      })
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      })
    }
  }

  return (
    <form action={handleSubmit} className="space-y-12">
      <div className="space-y-4 mt-10">
        <label htmlFor="email" className="block text-xl text-white-100">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full bg-[#111] rounded-xl p-4 text-xl border-0 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-600"
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="message" className="block text-xl text-white-100">
          This 🌊 is yours, let's 🚀  
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required
          rows={6}
          className="w-full bg-[#111] rounded-xl p-4 text-xl border-0 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-600 resize-none"
        />
      </div>

      <div className="flex w-full justify-center sm:flex-row items-center space-y-4 sm:space-y-0">
  <SubmitButton />
</div>

    </form>
  )
}
