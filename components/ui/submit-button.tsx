"use client"
import { ArrowRight, Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

interface SubmitButtonProps {
  isLoading?: boolean;
}

export function SubmitButton({ isLoading }: SubmitButtonProps) {
  const { pending: formStatusPending } = useFormStatus();
  const isPending = isLoading !== undefined ? isLoading : formStatusPending;

  return (
    <button
      type="submit"
      disabled={isPending} 
      className="bg-gray-200 hover:bg-gray-300 text-black px-8 py-4 rounded-full text-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:hover:bg-gray-200 min-w-[180px] h-[60px] w-full sm:w-auto"
    >
      {isPending ? ( 
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
