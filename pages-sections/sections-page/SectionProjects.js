/* eslint-disable */
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Subject from '@mui/icons-material/Subject';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import Button from '/components/CustomButtons/Button.js';
import useTranslation from 'next-translate/useTranslation';

import projectsStyle from '/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle.js';

const useStyles = makeStyles(projectsStyle);

export default function SectionProjects({ ...rest }) {
  const classes = useStyles();
  const { t } = useTranslation('landing');

  return (
    <div className='cd-section' {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter}
            >
              <h2 className={classes.title}>{t('cleaningTitle')}</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card
                raised
                background
                style={{
                  backgroundImage: "url('/img/wash.jpeg')"
                }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>{t('cleaningSubtitle')}</h6>
                  <h3 className={classes.cardTitleWhite}>{t('cleaningHeading')}</h3>
                  <p className={classes.cardDescription}>
                    {t('cleaningDesc')}
                  </p>
                  <Button round color='warning' href='#'>
                    <Subject /> {t('cleaningBtn')}
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
