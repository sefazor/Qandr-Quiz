import { Container, Grid,Center, Image, Text, UnstyledButton } from "@mantine/core";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import QuestionItem from './questionItem';
import 'swiper/css/navigation';


interface Props {
  onClick: () => void;
}


const QuizQuestion: React.FC<Props> = ({ onClick }: Props) => {
  const swiperRef = useRef<SwiperProps>();

  const [checkedList, setCheckedList] = useState<Array<string>>([]);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [timer, setTimer] = useState({ minutes: 1, seconds: 20 });
  const [question, setQuestion] = useState([
    {
      title: 'What is the maximum supply of Bitcoin?',
      logo: '/img/tunncay.png',
      answers: {
        a: '10 Million',
        b: '21 Million',
        c: '50 Million',
        d: '100 Million'
      }
    },
    {
      title: 'Question 2?',
      logo: '/img/tunncay.png',
      answers: {
        a: '10 Million',
        b: '21 Million',
        c: '50 Million',
        d: '100 Million'
      }
    }
  ]);



  useEffect(() => {
    // Reset timer when selected question changes
    setTimer({ minutes: 1, seconds: 20 });
  }, [selectedQuestion]);

  useEffect(() => {
    // Update timer every second
    const timerInterval = setInterval(() => {
      if (timer.minutes === 0 && timer.seconds === 0) {
        // If timer reaches 0, handle it here (e.g., move to the next question or submit)
      } else {
        setTimer((prevTimer) => {
          const newSeconds = prevTimer.seconds === 0 ? 59 : prevTimer.seconds - 1;
          const newMinutes = prevTimer.seconds === 0 ? prevTimer.minutes - 1 : prevTimer.minutes;
          return { minutes: newMinutes, seconds: newSeconds };
        });
      }

    }, 1000);
    return () => clearInterval(timerInterval);
  }, [timer, selectedQuestion]);


  const setChecked = (index: number, answer: string) => {

    const arr = [...checkedList];

    if (index >= 0 && index < checkedList.length) {
      arr[index] = answer;
    } else {
      arr.push(answer);
    }

    setCheckedList(arr);

  };

  const checkControl = (index: number, answer: string) => {
    if (index >= 0 && index < checkedList.length) {
      return checkedList[index] === answer;
    }
    return false;
  }

  const checkIndexControl = (index: number) => {
    if (index >= 0 && index < checkedList.length) {
      return true;
    }
    return false;
  }


  return (<div className={"question-item"}>

    <div className="question-top">
      <Text style={{ flex: 1 }} fz={30} lh={"53px"} fw={700} className={"grotesk-bold"} color={"#000"} lts={-0.9}>ETH
        QUIZ COMPETITON</Text>
      <div className={"question-image"}>
        <Image src={'/img/logo.png'} width={86.73} height={65.359}/>
      </div>
      <Text fz={30} lh={"53px"} fw={700} className={"grotesk-bold"} color={"#000"} lts={-0.9}>
        {`${timer.minutes}:${timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}`}
      </Text>    </div>


    <Swiper
      onBeforeInit={(swiper: SwiperProps) => {
        swiperRef.current = swiper;
      }}
      allowTouchMove={false}
      className={""}
      spaceBetween={15}
      slidesPerView={1}
      speed={500}
      onSlideChange={(item: any) => setSelectedQuestion(item.activeIndex)}
    >

      {question.map((item, index) => (
        <SwiperSlide key={`question-${index}`}>
          <Text ta={"center"} fz={40} fw={700} color={"#000"} lh={"55px"} mt={90} mb={45}>{item.title}</Text>

          <Container size={1100}>
            <Grid gutter={26}>
              <Grid.Col lg={6}>
                <QuestionItem type={"A"} title={item.answers.a} onClick={() => setChecked(index, 'a')}
                              checked={checkControl(index, 'a')}/>
              </Grid.Col>
              <Grid.Col lg={6}>
                <QuestionItem type={"B"} title={item.answers.b} onClick={() => setChecked(index, 'b')}
                              checked={checkControl(index, 'b')}/>
              </Grid.Col>
              <Grid.Col lg={6}>
                <QuestionItem type={"C"} title={item.answers.c} onClick={() => setChecked(index, 'c')}
                              checked={checkControl(index, 'c')}/>
              </Grid.Col>
              <Grid.Col lg={6}>
                <QuestionItem type={"D"} title={item.answers.d} onClick={() => setChecked(index, 'd')}
                              checked={checkControl(index, 'd')}/>
              </Grid.Col>
            </Grid>
          </Container>

        </SwiperSlide>
      ))}

    </Swiper>


    {!checkIndexControl(selectedQuestion) &&
      <Center mt={80}>
      <Image src={question[selectedQuestion].logo}  width={332} height={108} fit={"contain"}/>
      </Center>
    }


    {checkIndexControl(selectedQuestion) &&
      <Center mt={75}>
        <UnstyledButton onClick={() => swiperRef.current.slideNext()} className={'join-btn'}>
          {(selectedQuestion+1) === question.length ? 'SUBMIT' : 'NEXT QUESTION'}
        </UnstyledButton>
      </Center>
    }

    <div className={"active-slide"}>{selectedQuestion+1}/{question.length}</div>


  </div>);

}

export default QuizQuestion;
