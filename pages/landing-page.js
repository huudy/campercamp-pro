/*eslint-disable*/ import React from 'react';
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

// core components
import Header from '/components/Header/Header.js';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Button from '/components/CustomButtons/Button.js';
import Parallax from '/components/Parallax/Parallax.js';

import landingPageStyle from '/styles/jss/nextjs-material-kit-pro/pages/landingPageStyle.js';

// Sections for this page
import SectionWork from '/pages-sections/landing-page/SectionWork.js';
import SectionDescription from '/pages-sections/presentation-page/SectionDescription.js';

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  

  const classes = useStyles();
  return (
    <div>
      <Header
        color='transparent'
        brand='Camper Camp 🏕'
        fixed
        changeColorOnScroll={{
          height: 300,
          color: 'info'
        }}
        {...rest}
      />
      <Parallax image='/img/camp.jpeg' filter='dark'>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Camper Camp.</h1>
              <h4>It is not quite just a parking lot.</h4>
              <br />
              <Button color='danger' size='lg' href='/pricing'>
                <i className='fas fa-play' />
                See the prices
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionWork />
        </div>
      </div>
    </div>
  );
}
