import { Container, Grid,Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useState } from 'react';
import Quiz from './components/quiz';
import Reward from './components/reward';
import Banner from "./components/banner";
import Challenge from './components/challenge';


export const Live = () => {


  useDocumentTitle('Qandr Live - Live');

  const [data,setData] = useState([
    {
      title:'Last Challange Results',
      isIcon:false,
      data:[
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },
        {
          user:'sef**012***azor',
          value:'512 $'
        },

      ]
    },
    {
      title:'Highest Winner of All Time',
      isIcon:true,
      data:[
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
        {
          user:'sef**012***azor',
          value:'5.433 Point'
        },
      ]
    }
  ]);


  return (<>

    <Quiz/>

    <Reward/>

    <Container size={"xl"}>
      <Title mt={129} mb={166} ta={"center"} className={"grotesk-bold"} order={2} fz={64} lh={"64px"} color={"#000"} fw={700} style={{letterSpacing:-1.92}}>CHALLANGE RESULTS</Title>

      <Grid gutter={45}>
        {data.map((item,index) => (
          <Grid.Col lg={6} key={`challenge-${index}`}>
            <Challenge {...item}/>
          </Grid.Col>
        ))}

      </Grid>
    </Container>

    <Banner img={'/img/banner.png'}/>

  </>);
}

export default Live;
