import React, { useEffect, useState } from 'react';
import { Center, Text, UnstyledButton } from '@mantine/core';
import CountDownItem from './countdownItem';

interface Props {
  onClick: () => void;
}

const QuizCountDown: React.FC<Props> = ({ onClick }: Props) => {
  const initialCountdown = {
    days: 1,
    hours: 6,
    minutes: 29,
    seconds: 48,
  };

  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { days, hours, minutes, seconds } = prevCountdown;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          // Geri sayım tamamlandığında yapılacak işlemleri buraya ekleyebilirsiniz.
          onClick();
          return prevCountdown;
        } else {
          const newSeconds = seconds === 0 ? 59 : seconds - 1;
          const newMinutes = newSeconds === 59 ? minutes - 1 : minutes;
          const newHours = newMinutes === 59 ? hours - 1 : hours;
          const newDays = newHours === 23 && newMinutes === 59 && newSeconds === 59 ? days - 1 : days;

          return {
            days: newDays,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onClick]);

  return (
    <Center>
      <div style={{ textAlign: 'center' }}>
        <Text mt={127} mb={95} fz={64} fw={600} lh={'53px'} className={'grotesk-semibold'}>
          # ETH QUIZ COMPETITION #
        </Text>

        <div className={'center-item-days'}>
          <CountDownItem value={countdown.days} title={'DAYS'} />

          <CountDownItem value={countdown.hours} title={'HOURS'} />

          <CountDownItem value={countdown.minutes} title={'MINUTES'} />

          <CountDownItem value={countdown.seconds} title={'SECONDS'} />
        </div>

        <div style={{ display: 'inline-block' }}>
          <UnstyledButton onClick={() => onClick()} className={'join-btn'}>Join Now</UnstyledButton>
        </div>
      </div>
    </Center>
  );
};

export default QuizCountDown;
