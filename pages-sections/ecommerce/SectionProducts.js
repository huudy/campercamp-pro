import React from 'react';
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import Subject from '@mui/icons-material/Subject';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import Button from '/components/CustomButtons/Button.js';
import useTranslation from 'next-translate/useTranslation';


import styles from '/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js';

const useStyles = makeStyles(styles);

export default function SectionProducts() {
  const classes = useStyles();
  const { t } = useTranslation('wash');

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>{t('cleaning')}</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: "url('/img/examples/color1.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>
                  CAMPER
                </h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>
                    {t('camperTitle')}
                  </h3>
                </a>
                <p className={classes.description}>
                  {t('')}
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: "url('/img/examples/color3.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>FASHION NEWS</h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>Kanye joins the Yeezy team at Adidas</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the human foundation
                  in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                  the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: "url('/img/examples/color2.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>
                  Car Cleaning
                </h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>
                    Learn how to use the new colors of {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the human foundation
                  in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                  the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg3.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>Tutorials</h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>
                    Coach
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the human foundation
                  in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                  the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg1.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>
                  Productivity Style
                </h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>Fashion & Style {new Date().getFullYear()}</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the human foundation
                  in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                  the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <h2>{t('ozonation')}</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: "url('/img/examples/color1.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>
                  CAMPER
                </h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>
                    {t('camperTitle')}
                  </h3>
                </a>
                <p className={classes.description}>
                  {t('')}
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: "url('/img/examples/color3.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>FASHION NEWS</h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>Kanye joins the Yeezy team at Adidas</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the human foundation
                  in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                  the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: "url('/img/examples/color2.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>
                  Car Cleaning
                </h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>
                    Learn how to use the new colors of {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the human foundation
                  in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                  the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg3.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>Tutorials</h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>
                    Coach
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the human foundation
                  in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                  the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg1.jpg')" }}>
              <CardBody background>
                <h6 className={classNames(classes.cardCategory, classes.textInfo)}>
                  Productivity Style
                </h6>
                <a href='/'>
                  <h3 className={classes.cardTitle}>Fashion & Style {new Date().getFullYear()}</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the human foundation
                  in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                  the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
