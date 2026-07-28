import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const Typewriter = ({ texts, speed = 50, deleteSpeed = 30, pause = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    const currentText = texts[textIndex] || ""

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
          if (charIndex >= currentText.length) {
            setTimeout(() => setIsDeleting(true), pause)
          }
        } else {
          setDisplayText(currentText.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
          if (charIndex <= 0) {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pause])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
      />
    </span>
  )
}
