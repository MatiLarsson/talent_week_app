import Menu from 'components/navbar-components/Menu';
import useWindowSize from './hooks/useWindowSize';

export default function NavBar () {
  const [width] = useWindowSize();
  console.log(width <= 1024);
  return (
    <div className="navBar">
      <a href='https://www.coderhouse.com/' target='_blank' rel='noreferrer'>
        <img className="coderhouse" src="/assets/logos/coderhouse.svg" alt="coderhouse logo" />
      </a>
      {
        (width <= 1024)
          && <Menu />
      }
    </div>
  )
}
