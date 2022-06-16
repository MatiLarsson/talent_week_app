import Welcome from "components/main-components/welcome"
import About from "components/main-components/about"
import Speakers from "components/main-components/speakers"
import Activities from "components/main-components/activities"
import Agenda from "components/main-components/agenda"
import Apply from "components/main-components/apply"
import Sponsors from "components/main-components/sponsors"

export default function Main () {
  return (
    <div className="main">
      <Welcome />
      <About />
      <Speakers />
      <Activities />
      <Agenda />
      <Apply />
      <Sponsors />
    </div>
  )
}
