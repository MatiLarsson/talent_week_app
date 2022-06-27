import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { SPONSORS } from 'data';
import useWindowSize from "components/hooks/useWindowSize";





const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Carousel () {

  const [width] = useWindowSize();
  const images = SPONSORS.map(sponsor => (width >= 1024 ? sponsor.src_desktop : sponsor.src_mobile));

  const [[page, direction], setPage] = useState([0, 0]);
  const [pages, setPages] = useState([]);
  const pageIndex = wrap(0, Math.ceil(images.length / 2), page);

  useEffect(() => {
    const pagesToSet = [];
    for (let i = 0; i < Math.ceil(images.length / 2); i++) {
      pagesToSet.push(i);
    }
    setPages(pagesToSet);
  }, [images.length]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="sponsors-carousel-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="two-image-container"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 1000 },
              opacity: { duration: .1 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <img
              src={images[pageIndex * 2]}
              alt='sponsor logo'
            />
            <img
              src={(images[pageIndex * 2 + 1]) ? (images[pageIndex * 2 + 1]) : null}
              alt='sponsor logo'
            />
          </motion.div>
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)}>
          <img src="assets/logos/right_arrow.svg" alt="right arrow" />
        </div>
        <div className="prev" onClick={() => paginate(-1)} style={pageIndex === 0 ? {display: 'none'} : {display: 'flex'}}>
          <img src="assets/logos/left_arrow.svg" alt="right arrow" />
        </div>
      </div>
      <div className="index">
          {
            pages.map(p => (
              <div className={`index-item ${p === pageIndex ? "active" : ""}`} key={p} />
            ))
          }
      </div>
    </>
  );
};
