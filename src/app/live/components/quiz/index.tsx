import { Container } from '@mantine/core';
import { useState } from 'react';
import QuizPlay from './play';
import QuizCountDown from './countdown';
import QuizQuestion from './question';

export const Quiz = () => {

  const [step, setStep] = useState(0);

  const updateQuiz = () => {

    switch (step) {
      case 0:
        setStep(1);
        break;
      case 1:
        setStep(2);
        break;
    }

  }

  return (<Container size={"xl"} mt={78} mb={54}>
    <div id={"quiz-screen"}>
      {step === 0 &&
        <QuizPlay onClick={() => updateQuiz()}/>
      }
      {step === 1 &&
        <QuizCountDown onClick={() => updateQuiz()}/>
      }
      {step === 2 &&
        <QuizQuestion onClick={() => updateQuiz()}/>
      }
    </div>
  </Container>)
}

export default Quiz;
