import React from 'react';
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import InfoArea from '/components/InfoArea/InfoArea.js';

// @material-ui icons
import Apps from '@mui/icons-material/Apps';
import ViewDay from '@mui/icons-material/ViewDay';
import ViewCarousel from '@mui/icons-material/ViewCarousel';
import makeStyles from '@mui/styles/makeStyles';
// @material-ui/icons
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';


import descriptionStyle from '/styles/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js';
import useTranslation from 'next-translate/useTranslation';

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  const { t } = useTranslation('landing');

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justifyContent='center'>
          <GridItem md={8} sm={8}>
            <h2 className={classes.title}>
              {t('featuresTitle')}
            </h2>
            <h4 className={classes.description}>
              {t('featuresHeading')}
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('lotTitle')}
                description={t('lotDesc')}
                icon={AirportShuttleIcon}
                iconColor='rose'
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('electricityTitle')}
                description={t('electricityDesc')}
                icon={ElectricCarIcon}
                iconColor='danger'
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('monitorTitle')}
                description={t('monitorDesc')}
                icon={CameraOutdoorIcon}
                iconColor='primary'
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('washTitle')}
                description={t('washDesc')}
                icon={LocalCarWashIcon}
                iconColor='info'
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('snackTitle')}
                description={t('snackDesc')}
                icon={IcecreamIcon}
                iconColor='warning'
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={t('serviceTitle')}
                description={t('serviceDesc')}
                icon={SettingsIcon}
                iconColor='gray'
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
               <InfoArea
                title={t('timeTitle')}
                description={t('timeDesc')}
                icon={AlarmOnIcon}
                iconColor='success'
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
