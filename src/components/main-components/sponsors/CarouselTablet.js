import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { SPONSORS } from 'data';

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
/*       x: direction < 0 ? 1000 : -1000, */
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function CarouselTablet () {

  const images = SPONSORS.map(sponsor => sponsor.src_desktop);

  const [[page, direction], setPage] = useState([0, 0]);

  const [pages, setPages] = useState([]);

  const pageIndex = wrap(0, Math.ceil(images.length / 4), page);

  useEffect(() => {
    const pagesToSet = [];
    for (let i = 0; i < Math.ceil(images.length / 4); i++) {
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
            className="image-container"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "just", duration: 1 },
              opacity: { duration: 0 }
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
              src={images[pageIndex * 4]}
              alt='sponsor logo'
            />
            {
              images[pageIndex * 4 + 1]
              && <img
                  src={(images[pageIndex * 4 + 1]) ? (images[pageIndex * 4 + 1]) : null}
                  alt='sponsor logo'
                />
            }
            {
              images[pageIndex * 4 + 2]
              && <img
                  src={(images[pageIndex * 4 + 2]) ? (images[pageIndex * 4 + 2]) : null}
                  alt='sponsor logo'
                />
            }
            {
              images[pageIndex * 4 + 3]
              && <img
                  src={(images[pageIndex * 4 + 3]) ? (images[pageIndex * 4 + 3]) : null}
                  alt='sponsor logo'
                />
            }
          </motion.div>
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)} style={pageIndex === 3 ? {display: 'none'} : {display: 'flex'}}>
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
