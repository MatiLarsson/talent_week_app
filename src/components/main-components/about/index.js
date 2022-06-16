import Timer from "./Timer"
import { useState, useEffect } from "react"
export default function About () {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const eventDay = new Date("July 4 2022 12:05")
    const countDownDate = eventDay.getTime();

    interval = setInterval(() => {
      const today = new Date()
      const now = today.getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance/(24*60*60*1000));

      const hours = Math.floor((distance%(24*60*60*1000))/(60*60*1000));

      const minutes = Math.floor((distance%(60*60*1000))/(60*1000));

      const seconds = Math.floor((distance%(60*1000))/(1000));

      if(distance < 0){
        clearInterval(interval)
      }else{
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer();
  })

  return (
    <section className="about">
      <img src="/assets/images/mobile/circuito-morado-derecha-mobile.png" className="circuito-derecha" alt='circuito derecha' />
      <img src="/assets/images/mobile/circuito-morado-izq-mobile.png" className="circuito-izq" alt='circuito izquierda' />
      <div className="titleContainer">
        <p className="title">TALENTWEEK</p>
      </div>
      <div className="textContainer">
        <p className="about-text1">¡Súmate a nuestro primer evento sobre talento digital y empleabilidad 100% online para la comunidad de Coderhouse en Latinoamérica!</p>
        <p className="about-text2">Si eres estudiante o graduado de Coderhouse, podrás entrar en contacto con más de 15 empresas líderes en tecnología.</p>
        <pgit  className="about-text3">¡Completa tu perfil de CoderTalent y prepárate para dar un gran paso profesional!</p>
      </div>
        <Timer 
          timerDays={timerDays} 
          timerHours={timerHours} 
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
    </section>

  )
}