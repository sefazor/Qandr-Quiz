import { Container, Grid, Text, Title, UnstyledButton } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import QuestionItem from '../live/components/quiz/questionItem';
import CounterItem from './components/counter';
import EggItem from './components/egg';
import MarqueeItem from './components/marquee';
import HomeSlide from './components/slide';


export const Home = () => {

  const [countData, setCountData] = useState([
    {
      count: 15,
      title: 'Partners'
    },
    {
      count: 1000,
      title: 'Gaming Capacity'
    },
    {
      count: 20,
      title: 'Utility'
    }
  ]);

  const [features, setFeatures] = useState([
    {
      img: {
        src: 'egg-1.png',
        width: 287.373,
        height: 287.373,
      },
      title: 'Connect',
      subTitle: 'Connect your wallet and join game',
      color: '#fff',
      bgColor: '#3D39FC'
    },
    {
      img: {
        src: 'egg-2.png',
        width: 413.2,
        height: 413.2,
      },
      title: 'Choose',
      subTitle: 'Choose the best room for you',
      color: '#fff',
      bgColor: 'rgba(0, 0, 0, 0.90)'

    },
    {
      img: {
        src: 'egg-2.png',
        width: 413.2,
        height: 413.2,
      },
      title: 'Collect',
      subTitle: 'Collect points by giving the most correct answers to the questions in the fastest way possible.',
      color: '#000',
      bgColor: '#DFFF67'

    },
    {
      img: {
        src: 'egg-2.png',
        width: 413.2,
        height: 413.2,
      },
      title: 'Enjoy',
      subTitle: 'Join the leaderboard and enjoy the most profitable form of entertainment',
      color: '#000',
      bgColor: 'transparent'


    }
  ]);

  useDocumentTitle('Qandr Live - Home');


  return (<>

    <div id={"home"}>
      <Container h={"100%"} size={"xl"} p={0}>
        <Grid m={0} h={"100%"}>
          <Grid.Col h={"100%"} span={12} lg={6} className={"home-left"}>
            <div>
              <Title mb={52} className={"home-title"} color={"#fff"} fz={84} fw={700} lh={"76px"}
                     order={1}>Learn, play <br/> and earn
                real rewards.</Title>
              <Text fz={36} lh={"40px"} fw={400} color={"#fff"}>Learn, play, and earn real
                rewards <br/> in over 20 trivia game modes.</Text>
              <Link to={'/live'}> <UnstyledButton mt={50} className={"join-btn"}>Join Now</UnstyledButton></Link>
            </div>
          </Grid.Col>
          <Grid.Col span={12} lg={6} className={"home-right"}>
            <div id={"question-row"}>
              <div className="question-content" style={{paddingLeft:76,paddingRight:69}}>
                <Text mb={13} mt={100} ta={"center"} fz={20} fw={700} color={"#000"} td={"underline"}>Question 1</Text>
                <Text mb={32} ta={"center"} fz={36} fw={700} color={"#000"} lh={"56px"}>What is the maximum supply of
                  Bitcoin?</Text>
                <Grid>
                  <Grid.Col lg={6}>
                    <QuestionItem small type={"A"} title={"10 Million"} onClick={() => console.log('clicked')}/>
                  </Grid.Col>
                    <Grid.Col lg={6}>
                        <QuestionItem small type={"B"} title={"21 Million"} onClick={() => console.log('clicked')}/>
                    </Grid.Col>
                    <Grid.Col lg={6}>
                        <QuestionItem small type={"C"} title={"50 Million"} onClick={() => console.log('clicked')}/>
                    </Grid.Col>
                    <Grid.Col lg={6}>
                        <QuestionItem small type={"D"} title={"100 Million"} onClick={() => console.log('clicked')}/>
                    </Grid.Col>
                </Grid>
              </div>
            </div>
          </Grid.Col>
        </Grid>

      </Container>
    </div>

    <div id="counter">
      <Container h={"100%"} size={1150}>
        <Grid h={"100%"}>
          {countData.map((item, index) => (
            <Grid.Col lg={4} key={`count-${index}`}>
              <CounterItem item={item}/>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>


    <Marquee className={"marquee-list"}>
      <MarqueeItem title={"WELCOME TO Q&R"}/>
      <MarqueeItem title={"WELCOME TO Q&R"}/>
      <MarqueeItem title={"WELCOME TO Q&R"}/>
      <MarqueeItem title={"WELCOME TO Q&R"}/>
    </Marquee>


    <div id="about">
      <Container size={"xl"}>
        <Text fz={50} fw={400} color={"#000"} lh={"64px"} mb={270} mt={70}>
          <b>Blockchain-powered GameFi platform that enables players to earn specific incomes according to their
            answers, activities, and creative ideas at different fictional functions.</b> Participate in more than
          20 trivia game modes and experience the gaming of a decentralized ecosystem.
        </Text>

        <Text className={"grotesk-bold"} align={"center"} color={"#000"} fz={64} lh={"64px"} fw={700} mb={170}>HOW TO
          PLAY</Text>

        <Grid>
          {features.map((item, index) => (
            <Grid.Col lg={3}>
              <EggItem item={item} index={index}/>
            </Grid.Col>
          ))}
        </Grid>

      </Container>


    </div>


    <HomeSlide/>


  </>)
}

export default Home;
