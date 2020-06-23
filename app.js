var hour = document.getElementById('hour')
var min = document.getElementById('min')
var sec = document.getElementById('sec')


function setClockTime() {
  const day = new Date()
  const hh = day.getHours()
  const mm = day.getMinutes()
  const ss = day.getSeconds()


  const hourDeg = (hh * 30) + (mm * 0.5)
  const minDeg = (mm * 6) + (ss * 0.1)
  const secDeg = (ss * 6)

  hour.style.transform = `rotateZ(${hourDeg}deg)`
  min.style.transform = `rotateZ(${minDeg}deg)`
  sec.style.transform = `rotateZ(${secDeg}deg)`
}

setClockTime()

setInterval(setClockTime, 1000)