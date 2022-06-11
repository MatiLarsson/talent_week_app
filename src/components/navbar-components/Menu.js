import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: () => ({
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      type: "spring",
      stiffness: 40,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


export default function Menu ({options}) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="menu-background" variants={sidebar} />
      <Navigation options={options}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};