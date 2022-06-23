
export default function Welcome () {
  return (
    <section className="welcome">
      <div className="cyborg-container">
        <img src="/assets/images/mobile/cyborg-mobile.png" className="cyborg" alt='cyborg' />
        <div className="gradient-canvas1" />
        <div className="gradient-canvas2" />
      </div>
      <div className="bannerContainer">
        <p className="banner banner--1">DESCUBRE TU FUTURO</p>
        <p className="banner banner--2">PROFESIONAL</p>
        <p className="banner banner--3">DESDE EL LUNES 25 AL JUEVES 28 DE JULIO</p>
      </div>
      <div className="buttonContainer">
        <a href="https://coderhouse.typeform.com/to/saYxC4o3" target='_blank' rel='noreferrer'><button className="button button--reservar">Reservar mi lugar</button></a>
        <a href="/"><button className="button button--agenda">Ver agenda</button></a>
      </div>
    </section>
  )
}
