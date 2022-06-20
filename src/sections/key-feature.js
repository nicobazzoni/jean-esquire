/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
const Performance = require('assets/key-feature/performance.svg');
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Our clients are our priority.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Expertise',
    title: 'Expertise',
    text:
      'Legal expertise matters when you need it the most.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Value',
    title: 'Value',
    text:
      'Know that we value you as a client and your concerns are ours.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Client Support',
    title: 'Client Support',
    text:
      'Always there to answer your questions and concerns.',
  },
];

export default function KeyFeature() {
  return (
  <section sx={{ variant: 'section.keyFeature' }} id="feature">
    <Container>
      <SectionHeader 
       slogan="The right representation matters"
       title="Commitment and Dedication"
      />
     <Grid sx={styles.grid}>
       
       {data.map((item) => (
       
       <FeatureCardColumn  
       key={item.id}
       src={item.imgSrc}
       alt={item.altText}
       title={item.title}
       text={item.text}
       />
       ))}
     </Grid>
     </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    bg:'whitesmoke ',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
