const Timer = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
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
            </section> */}
            {/* <div className="about-timer-blurred">
                <section>
                    <p>{timerDays}</p>
                    <small>D</small>
                </section>
                <section>
                    <p>{timerHours}</p>
                    <small>H</small>
                </section>
                <section>
                    <p>{timerMinutes}</p>
                    <small>M</small>
                </section>
                <section>
                    <p>{timerSeconds}</p>
                    <small>S</small>
                </section>
            </div> */}
        </div>
        
        <div className="about-mano-cyborg">
            <img src="/assets/images/mobile/halos-mobile.png" className="halos-mobile" alt='halos mobile' />
            <img src="/assets/images/mobile/mano-cyborg-mobile.png" className="mano-cyborg" alt='mano cyborg' />
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