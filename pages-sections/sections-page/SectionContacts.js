import React, { useState }  from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import PinDrop from '@mui/icons-material/PinDrop';
import Phone from '@mui/icons-material/Phone';
import Check from '@mui/icons-material/Check';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import InfoArea from '/components/InfoArea/InfoArea.js';
import Card from '/components/Card/Card.js';
import CardHeader from '/components/Card/CardHeader.js';
import CardBody from '/components/Card/CardBody.js';
import CardFooter from '/components/Card/CardFooter.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import Button from '/components/CustomButtons/Button.js';
import contactsStyle from '/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle.js';
import useTranslation from 'next-translate/useTranslation';
const useStyles = makeStyles(contactsStyle);

export default function SectionContacts({ ...rest }) {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const notification = {
    container: 'bottom-center',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
      showIcon: true
    }
  };
  const { t } = useTranslation('landing');
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, email, message, phone } = formData;
      console.log('Sending ', formData);
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
          phone
        }),
        headers: {
          'content-type': 'application/json'
        }
      });
      if (res.status === 200) {
        setFormData({ name: '', email: '', phone: '', message: '' });
        Store.addNotification({
          title: 'Success !',
          message: 'Message was sent successfully! Wait for a confirmation from us.',
          type: 'success',
          ...notification
        });
      }
    } catch (err) {
      console.error('Err', err);
    }
  };

  return (
    <div className='cd-section' {...rest}>
      <div
        className={classes.contacts + ' ' + classes.section}
        style={{ backgroundImage: "url('/img/tent22.jpeg')" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <h2 className={classes.title}>{t('bookTitle')}</h2>
              <h5 className={classes.description}>
                {t('bookDesc')}
              </h5>
              <InfoArea
                className={classes.infoArea}
                title={t('bookTitle')}
                description={
                  <span>
                    Leszczyńskiej 10b
                    <br /> 32-600 Oświęcim,
                    <br /> Poland
                  </span>
                }
                icon={PinDrop}
              />
              <InfoArea
                className={classes.infoArea}
                title='Give us a ring'
                description={
                  <span>
                    Camper Camp
                    <br /> +48 508 147 171
                    <br /> Mon - Sun, 7:00-21:00
                  </span>
                }
                icon={Phone}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card className={classes.card1}>
                <form>
                  <CardHeader contact color='primary' className={classes.textCenter}>
                    <h4 className={classes.cardTitle}>Contact Us</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText='First Name'
                          id='first'
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText='Last Name'
                          id='last'
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText='Email Address'
                      id='email-address'
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText='Your Message'
                      id='message'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={<Check className={classes.checkedIcon} />}
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      }
                      classes={{ label: classes.label }}
                      label="I'm not a robot"
                    />
                    <Button color='primary' className={classes.pullRight}>
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
