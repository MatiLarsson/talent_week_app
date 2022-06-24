import { SPEAKERS } from 'data';
import SpeakerCard from './SpeakerCard';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Speakers () {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="speakers" id='speakers'>
      <div className="speakers-title">Speakers</div>
      <motion.div
        ref={carousel}
        className="speakers-carousel"
        whileTap={{cursor: 'grabbing'}}
      >
        <motion.div
          drag='x'
          dragConstraints={{right: 0, left: -width}}
          className='speakers-inner-carousel'
        >
          {
            SPEAKERS.map(speaker => (
              <motion.div className='speaker-card-item' key={speaker.id}>
                <SpeakerCard
                  speaker={speaker}
                />
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </section>
  )
}
