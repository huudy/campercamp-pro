/*eslint-disable*/
import React from 'react';
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import Header from '/components/Header/Header.js';
import HeaderLinks from '/components/Header/HeaderLinks.js';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Parallax from '/components/Parallax/Parallax.js';
import SectionProducts from '/pages-sections/ecommerce/SectionProducts.js';

import styles from '/styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js';

const useStyles = makeStyles(styles);

export default function EcommercePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand='Camper Wash 💦 '
        links={<HeaderLinks dropdownHoverColor='info' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: 'info'
        }}
      />
      <Parallax image='/img/carwash.jpeg' filter='dark' small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>All-round camper washer</h1>
                <h4>
                  We provde professional cleaning services for the inside and outside of your camper van, car, or a bus.
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionProducts />
      </div>
    </div>
  );
}
