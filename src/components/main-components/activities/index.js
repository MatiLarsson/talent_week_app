import useWindowSize from 'components/hooks/useWindowSize';

export default function Activities () {
  const [width] = useWindowSize();

  return (
    <section className="activities">
      <img src={width >= 1024 ? "/assets/images/desktop/circuito-morado-activities-desktop.png" : "/assets/images/mobile/circuito-morado-activities-mobile.png"} className="circuito-activities" alt='circuito activities'/>
      <div className="activities-title">
        DURANTE ESTOS DÍAS PODRÁS:
      </div>
      <div className="activities-container">
        <img src={width >= 1024 ? "/assets/images/desktop/vectores-activities-desktop.svg" : "/assets/images/mobile/vectores-activities-mobile.svg"} className="vector-activities" alt='vector activities'/>
        <div className="activities-exposiciones">
          <p className="exposiciones-title titles"><img src="/assets/logos/webcam.svg" className='activities-logos' alt='webcam'/>EXPOSICIONES</p>
          <p className="entrevistas-text text">Asistir a las exposiciones de todas las empresas participantes</p>
        </div>
        <div className="activities-entrevistas">
          <p className="entrevistas-title titles"><img src="/assets/logos/message-bubble.svg" className='activities-logos' alt='bubble'/>ENTREVISTAS</p>
          <p className="entrevistas-text text">Participa de entrevistas grupales con las empresas y candidatos preseleccionados</p>
        </div>
        <div className="activities-tips">
          <p className="tips-title titles"><img src="/assets/logos/lightbulb.svg" className='activities-logos' alt='lightbulb'/>TIPS</p>
          <p className="tips-text text">Conoce tips que te ayudarán en tu búsqueda laboral</p>
        </div>
      </div>
    </section>
  )
}
