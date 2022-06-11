import Menu from 'components/navbar-components/Menu';

export default function NavBar () {
  return (
    <div className="navBar">
      <img className="coderhouse" src="/assets/logos/coderhouse.svg" alt="coderhouse logo" />
      <Menu />
    </div>
  )
}
