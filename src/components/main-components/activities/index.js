
export default function Activities () {
  return (
    <section className="activities">
      <img src="/assets/images/mobile/circuito-morado-activities-mobile.png" className="circuito-activities" alt='circuito activities'/>
      <div className="activities-title">
        DURANTE ESTOS DÍAS PODRÁS:
      </div>
      <div className="activities-container">
      <div className="activities-exposiciones">
          <p className="exposiciones-title titles"><img src="/assets/logos/webcam.svg" alt='webcam'/>EXPOSICIONES</p>
          <p className="entrevistas-text text">Asiste a los webinars de todas las empresas participantes</p>
        </div>
        <div className="activities-entrevistas">
          <p className="entrevistas-title titles"><img src="/assets/logos/message-bubble.svg" alt='bubble'/>ENTREVISTAS</p>
          <p className="entrevistas-text text">Participa de entrevistas grupales con las empresas y candidatos preseleccionados</p>
        </div>
        <div className="activities-tips">
          <p className="tips-title titles"><img src="/assets/logos/lightbulb.svg" alt='lightbulb'/>TIPS</p>
          <p className="tips-text text">Conoce tips que te ayudarán en tu búsqueda laboral</p>
        </div>
      </div>
    </section>
  )
}
