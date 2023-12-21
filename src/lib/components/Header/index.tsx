import { Container, Grid, Image,List,UnstyledButton } from "@mantine/core";
import { Link } from 'react-router-dom';

export const Header = () => {

  return (<header id={"header"}>
    <Container h={"100%"} pos={"relative"} size={"xl"} style={{zIndex:2}}>
      <Grid h={"100%"} style={{alignItems:'center'}}>
        <Grid.Col span={6} lg={3}>
          <Link to={'/'}>
            <Image src={'/img/logo.png'} width={133} height={103}/>
          </Link>
        </Grid.Col>
        <Grid.Col span={6} lg={9} style={{alignItems:'center',display:'flex'}}>
          <List className={"header-list"}>
            <List.Item>
              <Link to={'/'}>Home</Link>
            </List.Item>
            <List.Item>
              <Link to={'/live'}>How to Play</Link>
            </List.Item>
            <List.Item>
              <Link to={'/'}>NFT</Link>
            </List.Item>
            <List.Item>
              <Link to={'/'}>Partners</Link>
            </List.Item>
            <List.Item>
              <Link to={'/'}>Contact</Link>
            </List.Item>
          </List>

          <Link to={'/live'} style={{textDecoration:'none'}}>
            <UnstyledButton className={"join-btn"}>
              Join Now
            </UnstyledButton>
          </Link>

        </Grid.Col>

      </Grid>
    </Container>
  </header>)

}

export default Header;
