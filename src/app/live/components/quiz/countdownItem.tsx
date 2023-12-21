import { Text } from '@mantine/core';
import React from 'react';

interface Props{
  value: number | string;
  title: string
}

export const CountDownItem = ({value,title}:Props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Text fz={126} fw={700} className={"grotesk-bold"} lh={"127px"} lts={-3.7} color={"#000"} mb={17}>{value}</Text>
      <Text fz={41} fw={400} lts={-1.2} className={"grotesk-regular"}>{title}</Text>
    </div>
  )
}

export default CountDownItem;


