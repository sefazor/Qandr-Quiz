import { Container, Grid, Image,Text } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterList from './components/list';


export const Footer = () => {

  const [data,setData] = useState([
    {
      title:'Q&R',
      isTarget:false,
      data:[
        {
          title:'About Us',
          link:'/about-us'
        },
        {
          title:'Help Center',
          link:'/help-center'
        },
        {
          title:'Join Now',
          link:'/join-now'
        },
      ]
    },
    {
      title:'Company',
      isTarget:false,
      data:[
        {
          title:'Media',
          link:'#'
        },
        {
          title:'Jobs',
          link:'#'
        },
        {
          title:'Privacy Policy',
          link:'#'
        },
        {
          title:'Terms of Service',
          link:'#'
        },
      ]
    },
    {
      title:'Resources',
      isTarget:false,
      data:[
        {
          title:'Press Kit',
          link:'#'
        },
        {
          title:'Co-marketing Guide',
          link:'#'
        },
      ]
    },
    {
      title:'Social',
      isTarget:true,
      data:[
        {
          title:'Telegram',
          link:'/'
        },
        {
          title:'Twitter',
          link:'/'
        },
        {
          title:'Binance',
          link:'/'
        },
      ]
    }
  ])

  return (<footer id={"footer"}>
    <Container size={"xl"}>
      <Grid>
        <Grid.Col lg={3}>
          <Link to={'/'}>
            <Image src={'/img/logo.png'} width={148} height={104} fit={"contain"}/>
          </Link>
          <Text mt={24} fz={14} fw={400} color={"#fff"} lh={"18px"}>Q&R is a Web3 gaming platform that offers users a unique gameplay experience.</Text>
          <Text fz={13.48} fw={500} color={"#fff"} mt={60}>Ⓒ Q&R WEB3 GAMING - ALL RIGHTS RESERVED.</Text>
        </Grid.Col>
        <Grid.Col lg={9} pl={90} >
          <Grid>
            {data.map((item,index) => (
              <Grid.Col lg={3}>
                <FooterList isTarget={item.isTarget} title={item.title} data={item.data}  />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  </footer>)

}

export default Footer;
