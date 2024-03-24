import React, { useEffect, useState } from 'react'
import './Pages.css'
function CountDown() {
    const [timeLeft, setTimeLeft] = useState({ hours:10, minutes: 59, seconds: 59 });
    const updateTimeLeft = () => {
        if (timeLeft.seconds > 0) {
            setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
        } else if (timeLeft.minutes > 0) {
            setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 });
        } else if (timeLeft.hours > 0) {
            setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
        }

    }
    useEffect(() => {
        const timer = setInterval(()=>updateTimeLeft(), 1000);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <span className='timer'>{("0" + timeLeft.hours).slice(-2)} Hrs  {("0" + timeLeft.minutes).slice(-2)} minutes</span>
  )
}

export default CountDown