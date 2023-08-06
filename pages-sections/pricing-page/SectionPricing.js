import React from 'react';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import Button from '/components/CustomButtons/Button.js';
import makeStyles from '@mui/styles/makeStyles';

import pricingStyle from '/styles/jss/nextjs-material-kit-pro/pages/pricingSections/pricingStyle.js';

const useStyles = makeStyles(pricingStyle);
import useTranslation from 'next-translate/useTranslation';

export default function SectionPricing() {
  const classes = useStyles();
  const { t, lang } = useTranslation('pricing');
  console.log('Lang',lang);
  return (
    <div className={classes.pricingSection}>
      <h2 className={classes.title}>{t('cars')}</h2>
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
              <h6 className={classes.cardCategoryFullWhite}>{t('night')}</h6>
              <h1 className={classes.cardTitleWhite}>
                30 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>12</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                 <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('paid')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('paid')}
                </li>
              </ul>
              <Button color='warning'>{t('reserveBtn')}</Button>
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
              <h6 className={classes.cardCategoryFullWhite}>{t('day')}</h6>
              <h1 className={classes.cardTitleWhite}>
                30 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>12</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                 <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('paid')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('paid')}
                </li>
              </ul>
              <Button color='warning'>{t('reserveBtn')}</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color='primary'>
            <CardBody pricing>
              <h6 className={classes.cardCategory}>24h</h6>
              <h1 className={classes.cardTitleWhite}>
                50 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>24</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('free')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('free')}
                </li>
              </ul>
              <Button href='/' color='white' round>
                {t('reserveBtn')}
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <h2 className={classes.title}>{t('campers')}</h2>
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
              <h6 className={classes.cardCategoryFullWhite}>{t('night')}</h6>
              <h1 className={classes.cardTitleWhite}>
                40 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>12</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                 <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('paid')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('paid')}
                </li>
              </ul>
              <Button color='warning'>{t('reserveBtn')}</Button>
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
              <h6 className={classes.cardCategoryFullWhite}>{t('day')}</h6>
              <h1 className={classes.cardTitleWhite}>
                40 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>12</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                 <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('paid')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('paid')}
                </li>
              </ul>
              <Button color='warning'>{t('reserveBtn')}</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color='primary'>
              <h6 className={classes.cardCategory}>24h</h6>
            <CardBody pricing>
              <h1 className={classes.cardTitleWhite}>
                70 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>24</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('free')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('free')}
                </li>
              </ul>
              <Button href='/' color='white' round>
                {t('reserveBtn')}
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <h2 className={classes.title}>{t('buses')}</h2>
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
              <h6 className={classes.cardCategoryFullWhite}>{t('night')}</h6>
              <h1 className={classes.cardTitleWhite}>
                40 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>12</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                 <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('paid')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('paid')}
                </li>
              </ul>
              <Button color='warning'>{t('reserveBtn')}</Button>
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
              <h6 className={classes.cardCategoryFullWhite}>{t('day')}</h6>
              <h1 className={classes.cardTitleWhite}>
                40 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>12</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                 <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('paid')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('paid')}
                </li>
              </ul>
              <Button color='warning'>{t('reserveBtn')}</Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color='primary'>
              <h6 className={classes.cardCategory}>24h</h6>
            <CardBody pricing>
              <h1 className={classes.cardTitleWhite}>
                70 <small>PLN</small>
              </h1>
              <ul>
                <li>
                  <b>24</b> Hours
                </li>
                <li>
                  <b>DC power</b> included
                </li>
                <li>
                  {t('access')} <b>{t('vaccum')}</b> {t('free')}
                </li>
                <li>
                  {t('access')} <b>{t('wash')}</b> {t('free')}
                </li>
              </ul>
              <Button href='/' color='white' round>
                {t('reserveBtn')}
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
