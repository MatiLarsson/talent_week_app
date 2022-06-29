import CarouselDesktop from "./CarouselDesktop";
import CarouselTablet from "./CarouselTablet";
import CarouselMobile from "./CarouselMobile";
import useWindowSize from "components/hooks/useWindowSize";

export default function Carousel () {
  const [width] = useWindowSize();

  return (
    <>
      {
        width >= 1920
        ? <CarouselDesktop />
        : width >= 1024
          ? <CarouselTablet />
          : <CarouselMobile />
      }
    </>
  )
};
