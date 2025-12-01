import { useState } from "react"
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import "./AnimatedTooltip.css"; // Make sure this path is correct

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0)

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth)
  }

  return (
    <div className="tooltip-container">
      {items.map((item) => (
        <div
          className="tooltip-item"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="tooltip-content"
              >
                <div className="gradient-line-1" />
                <div className="gradient-line-2" />
                <div className="tooltip-name">{item.name}</div>
                <div className="tooltip-designation">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="tooltip-avatar"
          />
        </div>
      ))}
    </div>
  );
};