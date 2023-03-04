import React from 'react'
import { Paper,Stepper,StepLabel,Step,Typography,CircularProgress,Divider,Button  } from '@material-ui/core'
import { useState } from 'react';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm   from '../PaymentForm';
  const steps = ['shipping address','payment details']
export const Checkout = () => {
  const [activeStep,setactiveStep]=useState(0);
  const Confirmation = ()=>(
    <div>
      Confirmation
    </div>
  )

  
  const classes = useStyles();
 const Form = () => activeStep === 0?
 <AddressForm /> :<PaymentForm />

  return (
    <> 
    <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
          checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step)=>(
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>

            ))}
          </Stepper>
          {activeStep === steps.length?<Confirmation />:<Form />}
      </Paper>
      </main>

    
    
    </>
   

 )
}
