import { motion } from "framer-motion";
import { Link } from 'react-scroll'

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

export const MenuItem = ({ option, open, toggle }) => {

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={open ? { pointerEvents: "auto" } : { pointerEvents: "none" }}
    >
      <Link
        to={option.to}
        spy={true}
        smooth={true}
        offset={-48}
        duration={500}
        onClick={toggle}
        style={open ? { pointerEvents: "auto" } : { pointerEvents: "none" }}
      ><div className="menu-option">{option.name}</div></Link>
    </motion.li>
  );
};