import { MENU_OPTIONS } from "data"
import { CODERHOUSE_OPTIONS } from "data"

export default function Footer () {
  return (
    <div className="footer">
      <div className="footer-menu">
        <a href="/">
          <img className="footer-menu-logo" src="/assets/logos/talentweek.svg" alt='talentweek logo'/>
        </a>
        {
          MENU_OPTIONS.map(option => (
            <a href={option.to} className="footer-menu-item">{option.name}</a>
          ))
        }
      </div>
      <div className="footer-coderhouse">
        <a href='https://www.coderhouse.com/' target='_blank' rel='noreferrer'>
          <img className="footer-coderhouse-logo" src="/assets/logos/coderhouse.svg" alt='coderhouse logo'/>
        </a>
        {
          CODERHOUSE_OPTIONS.map(option => (
            <a href={option.to} className="footer-coderhouse-item">{option.name}</a>
          ))
        }
      </div>
      <div className="seguinos">
        <p>Seguinos en</p>
        <div className="media">
          <a href='/' className="media-item">
            <img src="/assets/logos/facebook.svg" alt='facebook logo'/>
          </a>
          <a href='/' className="media-item">
            <img src="/assets/logos/instagram.svg" alt='instagram logo'/>
          </a>
          <a href='/' className="media-item">
            <img src="/assets/logos/youtube.svg" alt='youtube logo'/>
          </a>
          <a href='/' className="media-item">
            <img src="/assets/logos/twitter.svg" alt='twitter logo'/>
          </a>
          <a href='/' className="media-item">
            <img src="/assets/logos/linkedin.svg" alt='linkedin logo'/>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright 2022 - Todos los derechos reservados</p>
      </div>
    </div>
  )
}
