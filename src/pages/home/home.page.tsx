import { Helmet } from 'react-helmet';
import { NetflixLogo, Button } from '@components';
import { Page, Section, SectionOne, SectionOnePartOne, SectionOnePartTwo } from './home.styled';

import TvImage from '../../assets/tv.png';
import Mobile from '../../assets/mobile.jpg';
import StrangerThings from '../../assets/stranger-things.png';

function Home() {
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
      </Helmet>

      <SectionOne>
        <SectionOnePartOne>
          <NetflixLogo width="150px" height="50px" />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button onClick={(e) => console.log(e.target)}>Sign Up</Button>
            <Button onClick={(e) => console.log(e.target)}>Sign In</Button>
          </div>
        </SectionOnePartOne>
        <SectionOnePartTwo>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
        </SectionOnePartTwo>
      </SectionOne>

      <Section flexDirection="column">
        <h1>Enjoy on your TV.</h1>
        <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        <img src={TvImage} alt="tv" style={{ position: 'relative', zIndex: 2 }} />
        <div>
          <video autoPlay playsInline muted loop>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
          </video>
        </div>
      </Section>

      <Section> 
        <h1>Download your shows to watch offline.</h1>
        <h2>Save your favorites easily and always have something to watch.</h2>
        <div>
          <img src={Mobile} alt="" />
          <div>
            <img src={StrangerThings} alt="" />
            <div>Stranger Things</div>
            <div>Downloading...</div>
            <div></div>
          </div>
        </div>
      </Section>
      


    </Page>
  );
}

export default Home;
