import { AnimatedTooltip } from "./AnimatedTooltip.jsx"
import "./AnimatedTooltip.css"; // Make sure this is imported here too
import user1 from '../assets/user1.jpeg'
import user2 from '../assets/user2.jpeg'
import user3 from '../assets/user3.jpeg'
import user4 from '../assets/user4.jpeg'
import user5 from '../assets/user5.jpeg'
import user6 from '../assets/user6.jpeg'
import user7 from '../assets/user7.jpeg'


const people = [
  {
    id: 1,
    name: "Sonam",
    designation: "Easy ticket booking",
    image: user6,
  },
  {
    id: 2,
    name: "Akansha",
    designation: "Real-time bus tracking",
    image: user5,
  },
  {
    id: 3,
    name: "Arushi",
    designation: "Accurate arrival times",
    image: user4,
  },
  {
    id: 4,
    name: "Preet",
    designation: "Helpful route suggestions",
    image: user1,
  },
  {
    id: 5,
    name: "Akshat",
    designation: "Best transit app experience",
    image: user2,
  },
  {
    id: 6,
    name: "Vinayak",
    designation: "User-friendly interface",
    image: user3,
  },
]

export default function AnimatedTooltipPreview() {
  return (
    <div className="tooltip-wrapper">
      <AnimatedTooltip items={people} />
    </div>
  )
}