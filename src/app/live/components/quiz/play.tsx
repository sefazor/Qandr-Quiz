import { Center, Text, Image, UnstyledButton } from '@mantine/core';
import React, { useEffect, useState } from 'react';


interface Countdown {
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  onClick:() =>void;
}


const QuizPlay: React.FC<Props> = ({onClick}:Props) => {

  const [countdown, setCountdown] = useState<Countdown>({
    hours: 3,
    minutes: 33,
    seconds: 10,
  });


  useEffect(() => {
    const interval = setInterval(() => {
      // Zamanı her saniye azalt
      setCountdown((prevCountdown) => {
        const { hours, minutes, seconds } = prevCountdown;
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          // Geri sayım tamamlandığında yapılacak işlemleri buraya ekleyebilirsiniz.
          return prevCountdown; // Bu satırı ekleyin
        } else {
          // Zamanı azalt
          const newSeconds = seconds === 0 ? 59 : seconds - 1;
          const newMinutes = newSeconds === 59 ? minutes - 1 : minutes;
          const newHours = newMinutes === 59 ? hours - 1 : hours;

          return {
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        }
      });
    }, 1000);

    // Komponentin unmount edildiğinde interval'i temizle
    return () => clearInterval(interval);
  }, []); // Boş dependency array kullanarak sadece bir kere çalışmasını sağla




  return(<Center>
      <div style={{textAlign:'center'}}>
        <Text mt={132} mb={100} fz={64} fw={600} lh={'53px'} className={'grotesk-semibold'}>
          NEXT CHALLENGE:{' '}
          <b className={'grotesk-bold'}>
            {`${countdown.hours.toString().padStart(2, '0')}:${countdown.minutes
              .toString()
              .padStart(2, '0')}:${countdown.seconds.toString().padStart(2, '0')}`}
          </b>
        </Text>
        <UnstyledButton style={{cursor:'pointer'}} onClick={() => onClick()}>
          <Image style={{display:'inline-block'}} fit={"contain"} src={'/img/play.png'} width={249} height={249}/>
        </UnstyledButton>
      </div>
    </Center>)
}

export default QuizPlay;
