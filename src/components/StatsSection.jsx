import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../lib/language-context"
import { staggerContainer, fadeUp } from "../lib/animations"

const stats = [
  { key: "years", value: 4, suffix: "+", labelKey: "stats.years" },
  { key: "technologies", value: 20, suffix: "+", labelKey: "stats.technologies" },
  { key: "projects", value: 8, suffix: "+", labelKey: "stats.projects" },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export const StatsSection = () => {
  const { t } = useLanguage()

  return (
    <section id="stats" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 max-w-2xl mx-auto gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.key}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
