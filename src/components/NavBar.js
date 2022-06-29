import Menu from 'components/navbar-components/Menu';
import DesktopMenu from 'components/navbar-components/DesktopMenu';
import useWindowSize from './hooks/useWindowSize';
import ProgressBar from 'components/navbar-components/ProgressBar';

export default function NavBar () {
  const [width] = useWindowSize();
  return (
    <div className='navBar'>
      <div className="relative-container">
        <a href='https://www.coderhouse.com/' target='_blank' rel='noreferrer'>
          <img className="coderhouse" src="/assets/logos/coderhouse.svg" alt="coderhouse logo" />
        </a>
        {
          (width < 1024)
            ? <Menu />
            : <DesktopMenu />
        }
        <ProgressBar />
      </div>
    </div>
  )
}
