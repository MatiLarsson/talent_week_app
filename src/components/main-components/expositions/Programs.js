

function ProgramMiercoles () {
  return (
    <div>Programa del Miércoles</div>
  )
}

function ProgramJueves () {
  return (
    <div>Programa del Jueves</div>
  )
}

export const ProgramTabs = [
  { label: "MIE 27", program: ProgramMiercoles()},
  { label: "JUE 28", program: ProgramJueves()},
];