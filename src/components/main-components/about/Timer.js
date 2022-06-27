import useWindowSize from 'components/hooks/useWindowSize';

const Timer = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  const [width] = useWindowSize();
  
  return (
    <div className='timerContainer'>
        <div className="about-faltan">
            <p>FALTAN</p>
        </div>
        <div className="about-timer">
            <section>
                <p>{timerDays}</p>
                <small>D</small>
                <section className='blurred'>
                    <p>{timerDays}</p>
                    D
                </section>
            </section>
            <section>
                <p>{timerHours}</p>
                <small>H</small>
                <section className='blurred'>
                    <p>{timerHours}</p>
                    H
                </section>
            </section>
            <section>
                <p>{timerMinutes}</p>
                <small>M</small>
                <section className='blurred'>
                    <p>{timerMinutes}</p>
                    M
                </section>
            </section>
            {/* <section>
                <p>{timerSeconds}</p>
                <small>S</small>
                <section className='blurred'>
                    <p>{timerSeconds}</p>
                    S
                </section>
            </section> */}
        </div>
        
        <div className="about-mano-cyborg">
            <img src={width >= 1024 ? "/assets/images/desktop/halos-desktop.png" : "/assets/images/mobile/halos-mobile.png"} className="halos" alt='halos' />
            <img src={width >=1024 ? "/assets/images/desktop/mano-cyborg-desktop.png" : "/assets/images/mobile/mano-cyborg-mobile.png"} className="mano-cyborg" alt='mano cyborg' />
        </div>
    </div>
  )
}

Timer.defaultProps = {
    timerDays: '00',
    timerHours: '00',
    timerMinutes: '00',
    timerSeconds: '00'
}

export default Timer