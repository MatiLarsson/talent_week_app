import { Link } from 'react-scroll';
import useWindowSize from 'components/hooks/useWindowSize';

export default function Welcome () {
  const [width] = useWindowSize();

  return (
    <section className="welcome">
      <div className="structure-container">
        <div className="cyborg-container">
          <img src={width >= 1024 ? "/assets/images/desktop/cyborg-desktop.png" : "/assets/images/mobile/cyborg-mobile.png"} className="cyborg" alt='cyborg' />
          <div className="gradient-canvas1" />
          <div className="gradient-canvas2" />
          <div className="gradient-canvas3" />
        </div>
        <div className="bannerContainer">
          <p className="banner banner--1">DESCUBRE TU FUTURO</p>
          <p className="banner banner--2">PROFESIONAL</p>
          <p className="banner banner--3">DESDE EL LUNES 25 AL JUEVES 28 DE JULIO</p>
        </div>
      </div>
      <div className="buttonContainer">
        <Link
          to='form'
          spy={true}
          smooth={true}
          offset={-48}
          duration={500}
        >
          <button className="button button--reservar">Reservar mi lugar</button>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={-48}
          duration={500}
          to="agenda"
        >
          <button className="button button--agenda">Ver agenda</button>
        </Link>
      </div>
    </section>
  )
}
