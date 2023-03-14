import React from 'react'
import { Container } from 'react-bootstrap';

const Counter = () => {
  const { month, day, hour } = timeRemaining();

  return (
   <Container fluid className='counter-container'>
     <Container >
      <div className='counter'>
        <p className='counter-title px-2'>COUNTDOWN TO RWC 2023</p>
        <p><span>{month}</span> Months <span>{day}</span> Days <span>{hour}</span> hours</p>
      </div>
    </Container>
   </Container>
  )
}

export default Counter


const timeRemaining = (endDate = '09/08/2023') => {
  const endTime = new Date(endDate);
  const currentTime = new Date();
  const remaining = endTime - currentTime;

  return ms(remaining)
}


// This function taken from: https://gist.github.com/PantheraRed/2e65c48cdfa6fba49473913300cc8b12
// Would not work if time left is more then 1 year
function ms(t) {
  let year,
    month,
    day,
    hour,
    minute,
    second;

  second = Math.floor(t / 1000);
  minute = Math.floor(second / 60);
  second = second % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  month = Math.floor(day / 30);
  day = day % 30;
  year = Math.floor(month / 12);
  month = month % 12;

  return { year, month, day, hour, minute, second };
}
