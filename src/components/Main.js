import Welcome from "components/main-components/welcome"
import About from "components/main-components/about"
import Speakers from "components/main-components/speakers"
import Activities from "components/main-components/activities"
import Agenda from "components/main-components/agenda"
import Expositions from "components/main-components/expositions"
import Apply from "components/main-components/apply"
import Form from "components/main-components/form"
import Sponsors from "components/main-components/sponsors"

export default function Main () {
  return (
    <div className="main">
      <Welcome />
      <About />
      <Speakers />
      <Activities />
      <Agenda />
      <Expositions />
      <Apply />
      <Form />
      <Sponsors />
    </div>
  )
}
