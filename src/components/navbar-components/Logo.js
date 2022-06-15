import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export default function Logo ({open}) {
  return (
    <motion.li
    variants={variants}
    className="menu-logo"
    >
      <img src="/assets/logos/talentweek.svg" alt='talent week logo' className="menu-logo"/>
    </motion.li>
  )
}
