/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
// core components
import Header from '/components/Header/Header.js';
import Parallax from '/components/Parallax/Parallax.js';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
// sections for this page
import SectionPricing from '/pages-sections/pricing-page/SectionPricing.js';
import SectionFeatures from '/pages-sections/pricing-page/SectionFeatures.js';

import pricingStyle from '/styles/jss/nextjs-material-kit-pro/pages/pricingStyle.js';

const useStyles = makeStyles(pricingStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand='Camper Camp 🏕'
        // links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: 'warning'
        }}
      />

      <Parallax image='/img/grand.jpeg' filter='dark' small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
            >
              <h1 className={classes.title}> Check out our prices </h1>
              <h4>
                We offer all kinds of fares for your stay with us. We also have a lot of extra
                services that you can use in bundle or seperately. Get familiar with our fares
                below:
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
          <hr />
          {/* <SectionFeatures /> */}
        </div>
      </div>
    </div>
  );
}
