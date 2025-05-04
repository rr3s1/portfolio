"use client"
import { ArrowRight, Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-gray-200 hover:bg-gray-300 text-black px-8 py-4 rounded-full text-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:hover:bg-gray-200 min-w-[180px] h-[60px] w-full sm:w-auto"
    >
      {pending ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : (
        <>
          <span>Send Message</span>
          <ArrowRight className="w-6 h-6" />
        </>
      )}
    </button>
  )
}
