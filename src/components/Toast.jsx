import { useEffect } from "react"
import { CheckCircle, XCircle, X } from "lucide-react"
import { cn } from "../lib/utils"

export const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg animate-slide-up",
        type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
      )}
    >
      {type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-80 cursor-pointer">
        <X size={16} />
      </button>
    </div>
  )
}
