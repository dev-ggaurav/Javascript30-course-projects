const secHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

//   for second hand

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; //converting seconds into deg for sec hand
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;


//for minute hand

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; //converting seconds into deg for min hand
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;


//for hour hand
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90; //converting seconds into deg for hour hand
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();