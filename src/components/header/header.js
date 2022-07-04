/** @jsx jsx */
import { jsx, Container, Flex, Image, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import  Logo1  from 'assets/pager.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import { useRouter } from 'next/router'
import jeanlogo from 'assets/jeanlogo.png';
export default function Header({ className }) {
  const router = useRouter()
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={Logo1} />
       <Image src={jeanlogo} />
         <Flex as="nav" sx={styles.nav}>
           {menuItems.map((menuItem, i) => (
             <Link
             activeClass='active'
             to={menuItem.path}
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}
             key={i}
             >
               {menuItem.label}
             </Link>
           ))} 
 
         </Flex>
         <Button  type="button" onClick={() => router.push('mailto:info@lawofficeofjeanamagsilallc.com')}>
      Contact Jean
         </Button>
         <MobileDrawer />
      </Container>

    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#F0F3F4',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
