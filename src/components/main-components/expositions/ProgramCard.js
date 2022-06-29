import useWindowSize from "components/hooks/useWindowSize"

export default function ProgramCard ({props}) {
  const [width] = useWindowSize()

  return (
    <div className="program-card">
      <img src={width >= 1024 ? '/assets/images/desktop/circuito-epxosiciones-desktop.png' : "/assets/images/mobile/circuito-dorado-exposition-card-mobile.svg"} className="circuito" alt="circuito dorado"/>
      <div className="card-names-and-times">
        <p className="card-names">{props.name}</p>
        <div className="card-times">
          <p>{props.arg}</p>
          <p>{props.mex}</p>
        </div>
      </div>
      <p className="card-details">{props.position} EN <span className="company-color">{props.company}</span></p>
    </div>
  )
}