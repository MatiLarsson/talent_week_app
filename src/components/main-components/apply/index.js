import useWindowSize from "components/hooks/useWindowSize";

export default function Apply () {
  const [width] = useWindowSize();
  return (
    <section className="apply">
      <div className="cyborg-container">
        <img className='cyborg-mujer' src={width >= 1024 ? "/assets/images/desktop/cyborg-desktop-mujer.png" : "/assets/images/mobile/cyborg-mobile-mujer.png"} alt="mujer cyborg" />
        <div className="gradient-canvas1" />
        <div className="gradient-canvas2" />
        <div className="gradient-canvas3" />
        <div className="gradient-canvas4" />
      </div>
      <div className="apply-container">
        <p className="apply-title">DATE A CONOCER</p>
        <p className="apply-text">Selecciona las empresas que te interesen para compartirles tu perfil y que puedan tenerte en cuenta para oportunidades laborales actuales y futuras.</p>
        <a href="https://coderhouse.typeform.com/to/tl6lJDae" target='_blank' rel='noreferrer'><button>Aplicar</button></a>
      </div>
    </section>
  )
}
