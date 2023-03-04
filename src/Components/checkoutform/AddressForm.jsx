import React from 'react'
import { useState } from 'react';
import { InputLabel,Button,Select,MenuItem,Grid,Typography} from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form';
import Forminput from './CustomTextField';
const AddressForm = () => {
 

  
  const methods = useForm()


  return (
      <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
          <FormProvider {...methods}>
            <form onSubmit=''>
              <Grid>
                <Forminput required name='First Name' label='First Name' />
                <Forminput required name='Last Name' label='Last Name' />
                <Forminput required name='Email' label='Email' />
                <Forminput required name='Address1' label='Address1 ' />
                <Forminput required name='City' label='City' />
                <Forminput required name='Zip' label='ZIP/POSTAL' />


                </Grid>
            </form>
          </FormProvider>
      </>

    )
}

export default AddressForm