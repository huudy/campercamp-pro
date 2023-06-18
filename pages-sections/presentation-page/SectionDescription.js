import React from "react";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@mui/icons-material/Apps";
import ViewDay from "@mui/icons-material/ViewDay";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import makeStyles from "@mui/styles/makeStyles";
// @material-ui/icons
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';

import descriptionStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justifyContent="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              A nice and safe place for your camper or a car. You can stay for couple of hours, entire day or event the entire night. 
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          {/* <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Huge Number of Components"
                description="Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour."
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Multi-Purpose Sections"
                description="Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages."
                icon={ViewDay}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Example Pages"
                description="If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages."
                icon={ViewCarousel}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
          </GridContainer> */}
          <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Camper Parking Lot"
              description="A parking lot where you can park your camper van as well as do the entire service."
              icon={AirportShuttleIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="No Time Limit"
              description="You can stay as long as you want. No time limit just let us know"
              icon={AlarmOnIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Monitored 24/7"
              description="The parking lot is fully monitored for the entire stay of yours."
              icon={CameraOutdoorIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Car/Camper Wash"
              description="For extra pay we can offer you a full car wash service while you are stayig."
              icon={LocalCarWashIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Snack"
              description="There will be always opportunity to grab a snack while being on the go."
              icon={IcecreamIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Service"
              description="The parking lot is adapted to camper vans, meaning you will be able to empty and refill you tanks :)"
              icon={SettingsIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
        </div>
      </div>
    </div>
  );
}
