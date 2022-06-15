import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Logo from "./Logo";
import { MENU_OPTIONS } from "data";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({open}) => (
  <motion.ul variants={variants}>
    <Logo />
    {
      MENU_OPTIONS.map(option => (
        <MenuItem option={option} open={open} key={option.name} />
      ))
    }
  </motion.ul>
);

