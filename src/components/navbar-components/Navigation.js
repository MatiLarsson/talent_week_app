import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Logo from "./Logo";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const MENU_OPTIONS = [
  {
    name:'Speakers',
    to: '/'
  },
  {
    name: 'Agenda',
    to: '/'
  },
  {
    name: 'Sponsors',
    to: '/'
  },
  {
    name: 'Inscripción',
    to: '/'
  }
];

export const Navigation = ({ options }) => (
  <motion.ul variants={variants}>
    <Logo />
    {
      MENU_OPTIONS.map(option => (
        <MenuItem option={option} key={option.name} />
      ))
    }
  </motion.ul>
);

