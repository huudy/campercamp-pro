import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import Button from '/components/CustomButtons/Button.js';
import { Store } from 'react-notifications-component';

import workStyle from '/styles/jss/nextjs-material-kit-pro/pages/landingPageSections/workStyle.js';
import useTranslation from 'next-translate/useTranslation';

const useStyles = makeStyles(workStyle);

export default function SectionWork() {
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
  const {name,email,message,phone} = formData
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
        'content-type': 'application/json',
      },
    })
      if (res.status === 200) {
        setFormData({name:'',email:'', phone:'',message:''})
        Store.addNotification({
          title: 'Success !',
          message: 'Message was sent successfully! Wait for a confirmation from us.',
          type: 'success',
          ...notification
        });

      }
    } catch (err) {
      console.error('Err', err)
    }
  };
  return (
    <div className={classes.section}>
      <GridContainer justifyContent='center'>
        <GridItem cs={12} sm={8} md={8}>
          <h2 className={classes.title}>{t('bookTitle')}</h2>
          <h4 className={classes.description}>
            {t('bookDesc')}
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText='Name'
                  id='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText='Email'
                  id='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText='Phone Number'
                  id='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText='Your Message'
                id='message'
                value={formData.message}
                onChange={handleInputChange}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={4} md={4} className={classes.mrAuto + ' ' + classes.mlAuto}>
                <Button color='primary' type='submit'>
                  {t('send')}
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
