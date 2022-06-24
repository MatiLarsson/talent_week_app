
export default function Agenda () {
  return (
    <section className="agenda" id='agenda'>
      <div className="background-image-container-1">
        <img className="circuito-azul-1" src="/assets/images/mobile/circuito-azul-agenda-1-mobile.png" alt="circuito azul" />
        <div className="canvas canvas-1"></div>
        <div className="canvas canvas-2" />
        <div className="canvas canvas-3" />
        <div className="canvas canvas-4" />
        <div className="canvas canvas-5" />
        <div className="canvas canvas-6" />
        <div className="canvas canvas-7" />
      </div>
      <div className="background-image-container-2">
        <img className="circuito-azul-2" src="/assets/images/mobile/circuito-azul-agenda-2-mobile.png" alt="circuito azul" />
        <div className="canvas canvas-1" />
        <div className="canvas canvas-2" />
        <div className="canvas canvas-3" />
        <div className="canvas canvas-4" />
        <div className="canvas canvas-5" />
        <div className="canvas canvas-6" />
        <div className="canvas canvas-7" />
      </div>
      <p className="title">AGENDA</p>
      <div className="card-border">
        <div className="card">
          <div className="card-header">
            <div className="card-date-container"><p className="card-date-text">DEL 11 AL 20 DE JULIO</p></div>
            <p className="card-title">INSCRIPCIÓN DE NUESTRA COMUNIDAD</p>
          </div>
          <div className="card-text">Se realizará a través de un formulario en el que se pedirán datos de contacto, CV, LinkedIn, portfolio, manejo de tecnologías y herramientas,y empresas de interés.</div>
        </div>
      </div>
      <div className="card-border">
        <div className="card">
          <div className="card-header">
            <div className="card-date-container"><p className="card-date-text">DEL 25 AL 26 DE JULIO</p></div>
            <p className="card-title">FOCUS GROUP</p>
          </div>
          <div className="card-text">El equipo de Outcome del área de Talento de Coderhouse dictará talleres donde se abordarán técnicas como elevator pitch, tips a tener en cuenta en CV y perfil de LinkedIn, entre otros.</div>
        </div>
      </div>
      <div className="card-border">
        <div className="card">
          <div className="card-header">
            <div className="card-date-container"><p className="card-date-text">DEL 27 AL 28 DE JULIO</p></div>
            <p className="card-title">EMPLOYER BRANDING</p>
          </div>
          <div className="card-text">Las empresas tendrán un espacio de 20 a 25 min para presentarse, comentar los tipos de perfiles que les interesan, tecnologías y lenguajes que utilizan y habilidades blandas relevantes para aplicar. La transmisión será a través de YouTube.</div>
        </div>
      </div>
      <div className="card-border">
        <div className="card">
          <div className="card-header">
            <div className="card-date-container"><p className="card-date-text">DEL 08 AL 12 DE AGOSTO</p></div>
            <p className="card-title">ASSESSMENT GRUPAL</p>
          </div>
          <div className="card-text">Se realizará una única entrevista o Assessment grupal con todas las personas pre seleccionadas y cada una de las empresas participantes.</div>
        </div>
      </div>
    </section>
  )
}
