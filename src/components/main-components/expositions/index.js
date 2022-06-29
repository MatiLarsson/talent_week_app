import Tabs from './Tabs';
import useWindowSize from 'components/hooks/useWindowSize';

export default function Expositions () {
  const [width] = useWindowSize();

  return (
    <section className="expositions" id='exposiciones'>
      <div className="background-image-container-1">
        <img className="circuito-azul-1" src={width >= 1024 ? "/assets/images/desktop/circuito-exposiciones-derecha-desktop.png" : "/assets/images/mobile/circuito-azul-expositions-1-mobile.png"} alt="circuito azul" />
        <div className="canvas canvas-1"></div>
        <div className="canvas canvas-2" />
        <div className="canvas canvas-3" />
        <div className="canvas canvas-4" />
        <div className="canvas canvas-5" />
        <div className="canvas canvas-6" />
        <div className="canvas canvas-7" />
      </div>
      <div className="background-image-container-2">
        <img className="circuito-azul-2" src={width >= 1024 ? "/assets/images/desktop/circuito-exposiciones-izquierda-desktop.png" : "/assets/images/mobile/circuito-azul-expositions-2-mobile.png"} alt="circuito azul" />
        <div className="canvas canvas-1" />
        <div className="canvas canvas-2" />
        <div className="canvas canvas-3" />
        <div className="canvas canvas-4" />
        <div className="canvas canvas-5" />
        <div className="canvas canvas-6" />
        <div className="canvas canvas-7" />
      </div>
      <div className="background-image-container-3">
        <img className="circuito-azul-1" src={width >= 1024 ? "/assets/images/desktop/circuito-exposiciones-derecha-desktop.png" : "/assets/images/mobile/circuito-azul-expositions-1-mobile.png"} alt="circuito azul" />
        <div className="canvas canvas-1"></div>
        <div className="canvas canvas-2" />
        <div className="canvas canvas-3" />
        <div className="canvas canvas-4" />
        <div className="canvas canvas-5" />
        <div className="canvas canvas-6" />
        <div className="canvas canvas-7" />
      </div>
      {width < 1024 && (
        <div className="background-image-container-4">
          <img className="circuito-azul-2" src={width >= 1024 ? "/assets/images/desktop/circuito-exposiciones-izquierda-desktop.png" : "/assets/images/mobile/circuito-azul-expositions-2-mobile.png"} alt="circuito azul" />
          <div className="canvas canvas-1" />
          <div className="canvas canvas-2" />
          <div className="canvas canvas-3" />
          <div className="canvas canvas-4" />
          <div className="canvas canvas-5" />
          <div className="canvas canvas-6" />
          <div className="canvas canvas-7" />
        </div>
      )}
      {width < 1024 && (
        <div className="background-image-container-5">
          <img className="circuito-azul-1" src={width >= 1024 ? "/assets/images/desktop/circuito-exposiciones-derecha-desktop.png" : "/assets/images/mobile/circuito-azul-expositions-1-mobile.png"} alt="circuito azul" />
          <div className="canvas canvas-1"></div>
          <div className="canvas canvas-2" />
          <div className="canvas canvas-3" />
          <div className="canvas canvas-4" />
          <div className="canvas canvas-5" />
          <div className="canvas canvas-6" />
          <div className="canvas canvas-7" />
        </div>
      )}
      <p className="title">EXPOSICIONES</p>
      <div className='tabs-container'>
        <Tabs />
      </div>
    </section>
  )
}
