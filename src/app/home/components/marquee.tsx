import {Text} from "@mantine/core";


interface Props{
  title:string;
}


export const MarqueeItem = ({title}:Props) => {
    return(
      <Text mr={150} className={"grotesk-regular"} color={"#000"} fz={60} lh={"47px"} fw={400} >{title}</Text>
    )
}

export default MarqueeItem;
