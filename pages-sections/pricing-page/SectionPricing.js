import React from 'react';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import Button from '/components/CustomButtons/Button.js';
import makeStyles from '@mui/styles/makeStyles';

import pricingStyle from '/styles/jss/nextjs-material-kit-pro/pages/pricingSections/pricingStyle.js';

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <div className={classes.pricingSection}>
      <h2 className={classes.title}>Cars</h2>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card
            pricing
            background
            style={{
              backgroundImage: "url('/img/volvo.jpeg')"
            }}
          >
            <CardBody pricing background>
              <h6 className={classes.cardCategoryFullWhite}>Night</h6>
              <h1 className={classes.cardTitleWhite}>
                40 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  From <b>21-9</b>
                </li>
                <li>
                  <b>12</b> Hours
                </li>
                 <li>
                  Access to <b>Vaccum</b> paid
                </li>
                <li>
                  Access to <b>Car Wash</b> paid
                </li>
              </ul>
              <Button color='warning'>Reserve</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card
            pricing
            background
            style={{
              backgroundImage: "url('/img/merc.jpeg')"
            }}
          >
            <CardBody pricing background>
              <h6 className={classes.cardCategoryFullWhite}>Day</h6>
              <h1 className={classes.cardTitleWhite}>
                40 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  From <b>9-21</b>
                </li>
                <li>
                  <b>12</b> Hours
                </li>
                 <li>
                  Access to <b>Vaccum</b> paid
                </li>
                <li>
                  Access to <b>Car Wash</b> paid
                </li>
              </ul>
              <Button color='warning'>Reserve</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color='primary'>
            <CardBody pricing>
              <h6 className={classes.cardCategory}>24h</h6>
              <h1 className={classes.cardTitleWhite}>
                70 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>24</b> Hours
                </li>
                <li>
                  Access to <b>Vaccum</b> free
                </li>
                <li>
                  Access to <b>Car Wash</b> free
                </li>
              </ul>
              <Button href='#pablo' color='white' round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <h2 className={classes.title}>Camper</h2>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card
            pricing
            background
            style={{
              backgroundImage: "url('/img/van.jpeg')"
            }}
          >
            <CardBody pricing background>
              <h6 className={classes.cardCategoryFullWhite}>Night</h6>
              <h1 className={classes.cardTitleWhite}>
                50 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  From <b>21-9</b>
                </li>
                <li>
                  <b>12</b> Hours
                </li>
                 <li>
                  Access to <b>Vaccum</b> paid
                </li>
                <li>
                  Access to <b>Car Wash</b> paid
                </li>
              </ul>
              <Button color='warning'>Reserve</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card
            pricing
            background
            style={{
              backgroundImage: "url('/img/day.jpeg')"
            }}
          >
            <CardBody pricing background>
              <h6 className={classes.cardCategoryFullWhite}>Day</h6>
              <h1 className={classes.cardTitleWhite}>
                50 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  From <b>9-21</b>
                </li>
                <li>
                  <b>12</b> Hours
                </li>
                 <li>
                  Access to <b>Vaccum</b> paid
                </li>
                <li>
                  Access to <b>Car Wash</b> paid
                </li>
              </ul>
              <Button color='warning'>Reserve</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color='primary'>
            <CardBody pricing>
              <h6 className={classes.cardCategory}>24h</h6>
              <h1 className={classes.cardTitleWhite}>
                80 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>24</b> Hours
                </li>
                <li>
                  Access to <b>Vaccum</b> free
                </li>
                <li>
                  Access to <b>Car Wash</b> free
                </li>
              </ul>
              <Button href='#pablo' color='white' round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
