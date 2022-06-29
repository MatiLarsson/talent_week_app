import { MENU_OPTIONS } from "data"
import { CODERHOUSE_OPTIONS } from "data"
import { Link } from "react-scroll"
import useWindowSize from "./hooks/useWindowSize"

export default function Footer () {
  const [width] = useWindowSize()

  return (
    <div className="footer">
      <div className="footer-menu">
        <a href="/">
          <img className="footer-menu-logo" src="/assets/logos/talentweek.svg" alt='talentweek logo'/>
        </a>
        {
          MENU_OPTIONS.map(option => (
            <Link
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
              to={option.to}
              className="footer-menu-item"
              key={option.name}
            >
              {option.name}
            </Link>
          ))
        }
      </div>
      <div className="footer-coderhouse">
        <a href='https://www.coderhouse.com/' target='_blank' rel='noreferrer'>
          <img className="footer-coderhouse-logo" src="/assets/logos/coderhouse.svg" alt='coderhouse logo'/>
        </a>
        {
          CODERHOUSE_OPTIONS.map(option => (
            <a href={option.to} className="footer-coderhouse-item" key={option.name}>{option.image ? <img src={option.image} alt='' style={{filter: 'invert(100%)', width: '20px', height: '20px', marginRight: '5px', marginBottom: '3px'}}/> : null}{option.name}</a>
          ))
        }
      </div>
      <div className="seguinos">
        <p>Seguinos en</p>
        <div className="media">
          <a href='https://www.facebook.com/Coderhouse/' className="media-item" target='_blank' rel='noreferrer'>
            <img src="/assets/logos/facebook.svg" alt='facebook logo'/>
          </a>
          <a href='https://www.instagram.com/coderhouse/' className="media-item" target='_blank' rel='noreferrer'>
            <img src="/assets/logos/instagram.svg" alt='instagram logo'/>
          </a>
          <a href='https://www.youtube.com/channel/UCeFRG6700bzqYI0M_9vyelw/videos' className="media-item" target='_blank' rel='noreferrer'>
            <img src="/assets/logos/youtube.svg" alt='youtube logo'/>
          </a>
          <a href='https://twitter.com/coderhouse' className="media-item" target='_blank' rel='noreferrer'>
            <img src="/assets/logos/twitter.svg" alt='twitter logo'/>
          </a>
          <a href='https://www.linkedin.com/school/coderhouse/' className="media-item" target='_blank' rel='noreferrer'>
            <img src="/assets/logos/linkedin.svg" alt='linkedin logo'/>
          </a>
        </div>
      </div>
      <div className="copyright">
        <div style={{display: width >= 1024 ? 'block' : 'none'}} className="line" />
        <p>© Copyright 2022 - Todos los derechos reservados</p>
      </div>
    </div>
  )
}
