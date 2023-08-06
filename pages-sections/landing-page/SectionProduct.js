import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import Chat from '@mui/icons-material/Chat';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import Fingerprint from '@mui/icons-material/Fingerprint';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import InfoArea from '/components/InfoArea/InfoArea.js';

import productStyle from '/styles/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent='center'>
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            TWe offer more than just a plain old parking lot. A place where you could do anything
            else as well.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title='Free Chat'
              description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
              icon={Chat}
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title='Verified Users'
              description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
              icon={VerifiedUser}
              iconColor='success'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title='Fingerprint'
              description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
              icon={Fingerprint}
              iconColor='danger'
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
