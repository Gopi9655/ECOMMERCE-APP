import React from 'react'
import { Paper,Stepper,StepLabel,Step,Typography,CircularProgress,Divider,Button  } from '@material-ui/core'
import { useState,useEffect } from 'react';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm   from '../PaymentForm';
import { commerce } from '../../../lib/commerce';
  const steps = ['shipping address','payment details']
export const Checkout = ({ cart }) => {
  const [activeStep,setactiveStep]=useState(0);
  const [checkoutToken,setcheckoutToken] = useState(null)
  const [shippingData,setshippingData]=useState({})
  const classes = useStyles();

  useEffect(()=>{
    const generateToken = async () => {
      try {
            const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});
            console.log(token)
            setcheckoutToken(token)
      } catch (error) {
        
      }
    }
    generateToken()
  },[cart])
const nextStep = () => setactiveStep((prevActiveStep) => prevActiveStep+1)
const backStep = () => setactiveStep((prevActiveStep) => prevActiveStep-1)


const next = (data) => {
  setshippingData(data)
  nextStep()
}

  const Confirmation = ()=>(
    <div>
      Confirmation
    </div>
  )
  
 const Form = () => activeStep === 0
 ? <AddressForm checkoutToken={checkoutToken} next={next} /> 
 : <PaymentForm shippingData={shippingData}  checkoutToken={checkoutToken} backStep={backStep}/>

    console.log(shippingData)
    console.log(activeStep)

  return (
    <> 
    <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography className={classes.ctext} variant="h4" align="center" >
         CHECKOUT
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step)=>(
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length?<Confirmation />:checkoutToken&&<Form />}
      </Paper>
      </main>
    
    </>

 )
}
