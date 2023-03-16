import { Box, Container, Typography } from '@mui/material';
import { Button } from "react-bootstrap"
import shopImg from './images/shop.png'
import jumper from './images/jumper.webp'
import logoWhite from './images/rwcLogoWhite.svg'
import shopMob from './images/shopMob.png'

const styles = {
  container: {
    padding: '40px 0',
    background: '#2D3CFF',
    width: '100%',
    position: 'relative',
    '&:after': {
      content: '""',
      backgroundImage: { xs: `url(${shopMob})`, md: `url(${shopImg})` },
      width: "100%",
      height: "100%",
      display: 'block',
      position: "absolute",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: '100%',
      bottom: '-1px'
    }
  },
  inner: {
    display: 'flex',
    flexDirection: { xs: "column", md: 'row' },
  },
  left: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: "flex-start" },
    textAlign: { xs: 'center', md: "start" },
    position: "relative",
    zIndex: 10,
    color: '#fff'
  },
  title: {
    paddingTop: "16px",
    fontSize: { xs: '1.7rem', sm: '2rem', md: '2.5rem' }
  },
  right: {
    paddingTop: '30px',
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    zIndex: 10
  },
  imgWrapper: {
    width: { xs: "40%", md: "60%", lg: '80%' },
    minWidth: '230px'
  }
}


const Shop = () => {
  return (
    <section>
      <Box
        sx={styles.container}
      >
        <Container sx={styles.inner} maxWidth={'lg'}>
          <Box sx={styles.left}>
            <img src={logoWhite} width="15%" alt="logo" />
            <Typography variant="h3" sx={styles.title}>
              SHOP THE LATEST OFFICIAL CLOTHING AND MERCHANDISE
            </Typography>
            <a
              className='pt-4'
              href="https://shop2023.rugbyworldcup.com/"
              target="_blank"
              rel='noreferrer'>
              <Button style={{ background: "var(--bg-darkblue)" }}>SHOP NOW</Button>
            </a>
          </Box>
          <Box sx={styles.right}>
            <Box sx={styles.imgWrapper}>
              <img
                src={jumper}
                alt='RWC 2023 jumper'
                width="100%"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  )
}

export default Shop