import { Container, Grid, Text, Title,Image } from "@mantine/core";
import React, { useCallback, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


export const HomeSlide = () => {

  const swiperRef = useRef<SwiperProps>();
  const [activeIndex,setActiveIndex] = useState(0);


  return (<div id={"home-slide"}>

    <Title className={"grotesk-bold"} mb={115} ta={"center"} fw={700} fz={64} lh={"64px"}
           style={{ letterSpacing: -1.92 }}
           color={"#fff"} order={3}>NFT MAGICS</Title>

    <Container size={"xl"}>
      <Grid>
        <Grid.Col lg={4}>
          <Text fz={36} color={"#fff"} lh={"53px"} fw={700} style={{ letterSpacing: -1 }}>
            Get Ahead in Competitions with Unique Magic NFTs Participate in Special Events Take part in the governance
            mechanism and Increase Your Earnings!
          </Text>
        </Grid.Col>
        <Grid.Col lg={8} pl={100} pos={"relative"}>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper: SwiperProps) => {
              swiperRef.current = swiper;
            }}
            className={"swiper-home"}
            spaceBetween={44}
            slidesPerView={2}
            speed={1000}
            onSlideChange={(item:any) => setActiveIndex(item.activeIndex)}
          >
            <SwiperSlide>
              <Image src={'/img/slide-1.png'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={'/img/slide-2.png'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={'/img/slide-1.png'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={'/img/slide-2.png'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={'/img/slide-1.png'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={'/img/slide-2.png'}/>
            </SwiperSlide>
          </Swiper>
          <div className={`swip-item swiper-button-prev ${!activeIndex ? 'hide' : ''}`} onClick={() => swiperRef.current?.slidePrev()}></div>
          <div className="swip-item swiper-button-next" onClick={() => swiperRef.current?.slideNext()}></div>
        </Grid.Col>

      </Grid>
    </Container>


  </div>)

}

export default HomeSlide;
