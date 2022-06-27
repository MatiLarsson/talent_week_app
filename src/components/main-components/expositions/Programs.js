import { CRONOGRAMA_MIE, CRONOGRAMA_JUE } from 'data'
import ProgramCard from './ProgramCard'

function ProgramMiercoles () {
  return (
    <>
      {
        CRONOGRAMA_MIE.map((talk) =>
          <ProgramCard
          key={talk.id}
            props={talk}
          />
        )
      }
    </>
  )
}

function ProgramJueves () {
  return (
    <>
      {
        CRONOGRAMA_JUE.map((talk) =>
          <ProgramCard
            key={talk.id}
            props={talk}
          />
        )
      }
    </>
  )
}

export const ProgramTabs = [
  { label: "MIÉRCOLES 27", program: ProgramMiercoles()},
  { label: "JUEVES 28", program: ProgramJueves()},
];