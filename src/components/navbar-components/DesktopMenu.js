import { MENU_OPTIONS } from "data"
import { Link } from "react-scroll"


export default function DesktopMenu () {

  return (
    <div className="desktop-menu">
      {
        MENU_OPTIONS.map(option => (
          option.to !== 'inscripcion'
          ? <Link
              spy={true}
              smooth={true}
              offset={-115}
              duration={500}
              to={option.to}
              activeClass="active"
              className="desktop-menu-item"
              key={option.name}
            >
              {option.name}
            </Link>
          : <Link
              className="boton-reservar"
              key={option.name}
              spy={true}
              smooth={true}
              offset={-115}
              duration={500}
              to='inscripcion'
              activeClass="active"
            >
              Reservar mi lugar
            </Link>
        ))
      }
    </div>
  )
}
