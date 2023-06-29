/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
// core components
import Header from '/components/Header/Header.js';
import HeaderLinks from '/components/Header/HeaderLinks.js';
import Parallax from '/components/Parallax/Parallax.js';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
// sections for this page
import SectionPricing from '/pages-sections/pricing-page/SectionPricing.js';

import pricingStyle from '/styles/jss/nextjs-material-kit-pro/pages/pricingStyle.js';
import useTranslation from 'next-translate/useTranslation';

const useStyles = makeStyles(pricingStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const {t} = useTranslation('pricing')
  const classes = useStyles();
  return (
    <div>
      <Header
        brand='Camper Camp 🏕'
        links={<HeaderLinks dropdownHoverColor="info" />}
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
              <h1 className={classes.title}>{t('title')}</h1>
              <h4>{t('desc')}
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
        </div>
      </div>
    </div>
  );
}
