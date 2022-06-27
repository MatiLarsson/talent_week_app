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
          : <a className="boton-reservar" href="https://coderhouse.typeform.com/to/saYxC4o3" target='_blank' rel='noreferrer' key={option.name}>Reservar mi lugar</a>
        ))
      }
    </div>
  )
}
