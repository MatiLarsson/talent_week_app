
export default function SpeakerCard ({speaker}) {
  return (
    <div className="speaker-card">
      <img className="speaker-image" src={ speaker.speakerPhoto } alt={speaker.name}/>
      <img className="linkedInCard" alt="linked in logo" src="/assets/logos/linkedincard.svg" />
      <div className="info-layer">
        <p className="speaker-name">{speaker.name}</p>
        <p className="speaker-position">{speaker.position}</p>
        <p className="speaker-company">{speaker.company}</p>
      </div>
    </div>
  )
}
