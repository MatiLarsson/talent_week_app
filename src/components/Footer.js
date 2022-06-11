
export default function Footer () {
  return (
    <div className="footer">
      <div className="footer-menu">
        <img className="footer-menu-logo" src="/assets/logos/talentweek.svg" alt='talentweek logo'/>
        <a href='/' className="footer-menu-item">Speakers</a>
        <a href='/' className="footer-menu-item">Agenda</a>
        <a href='/' className="footer-menu-item">Sponsors</a>
        <a href='/' className="footer-menu-item">Inscripción</a>
      </div>
      <div className="footer-coderhouse">
        <img className="footer-coderhouse-logo" src="/assets/logos/coderhouse.svg" alt='coderhouse logo'/>
        <a href='/' className="footer-coderhouse-item">Nosotros</a>
        <a href='/' className="footer-coderhouse-item">Testimonios</a>
        <a href='/' className="footer-coderhouse-item">Contacto</a>
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
