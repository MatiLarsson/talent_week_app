
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useWindowSize from "components/hooks/useWindowSize";

export default function ProgressBar () {
  const [width] = useWindowSize()
  const { scrollYProgress } = useViewportScroll();
  const widthToSet = useTransform(scrollYProgress, [0, 1], [0, width]);
  return (
    <motion.div
      className="progress-bar"
      style={{
            width: widthToSet,
          }}
    >
    </motion.div>
  )
}
