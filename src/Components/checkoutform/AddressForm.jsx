import React from 'react'
import { useState,useEffect } from 'react';
import { InputLabel,Button,Select,MenuItem,Grid,Typography} from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form';
import Forminput from './CustomTextField';
import { commerce } from '../../lib/commerce';
import useStyles from './checkout/styles'
import { Link } from 'react-router-dom';
const AddressForm = ({checkoutToken , next }) => {
  const [shippingcountries,setShippingCountries] = useState([])
  const [shippingcountry,setShippingCountry] = useState('')
  const [shippingsubdivisions,setshippingsubdivisions] = useState([])
  const [shippingsubdivision,setshippingsubdivision] = useState('')
  const [shippongoptions,setshippingoptions] = useState([])
  const [shippingoption,setshippingoption] = useState('')
  const methods = useForm();
  const classes = useStyles();

  
  const countries = Object.entries(shippingcountries).map(([code,name])=>({id:code,label:name}))
  const subdivisions = Object.entries(shippingsubdivisions).map(([code,name])=>({id:code,label:name}))
  const options = shippongoptions.map((so) =>({id:so.id,label:`${so.description} -  (${so.price.formatted_with_symbol})`}))
   console.log(options)
  const fetchShippingCountries = async (checkoutTokenId) => {
    const {countries} = await commerce.services.localeListCountries(checkoutTokenId)
    console.log(countries)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
 }
 
 const fetchsubdivision = async (countrycode) =>{
  const {subdivisions} = await commerce.services.localeListSubdivisions(countrycode)
  setshippingsubdivisions(subdivisions)
  setshippingsubdivision(Object.keys(subdivisions)[0])
 }

 const fetchShippingoptions =  async (checkoutTokenId,country,region=null) =>{
  const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country,region})
  setshippingoptions(options)
  setshippingoption(options[0].id)

 }
useEffect (()=>{
  fetchShippingCountries(checkoutToken.id)
},[]) 
useEffect (()=>{
  if(shippingcountry) fetchsubdivision(shippingcountry)
},[shippingcountry])

useEffect(()=>{
  if(shippingsubdivision) fetchShippingoptions(checkoutToken.id ,shippingcountry,shippingsubdivision)
},[shippingsubdivision])

  return (
      <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
          <FormProvider { ...methods }>
            <form onSubmit={methods.handleSubmit((data)=>next({ ...data, shippingcountry,shippingsubdivision,shippingoption}))}>
            <Grid container spacing={3}>
                <Forminput className={classes.input} required name='First Name' label='First Name' />
                <Forminput className={classes.input} required name='Last Name' label='Last Name' />
                <Forminput className={classes.input} required name='Email' label='Email' />
                <Forminput className={classes.input} required name='Address1' label='Address1 ' />
                <Forminput className={classes.input} required name='City' label='City' />
                <Forminput className={classes.input} required name='Zip' label='ZIP/POSTAL' />
                
              <Grid xs={12} sm={6} >
                  <InputLabel>Shipping countries</InputLabel>
                    
                  <Select value={shippingcountry} fullWidth onChange={(e)=>setShippingCountry(e.target.value)}>
                    {countries.map((country)=>(
                       <MenuItem key={country.id} value={country.id}>
                         {country.label}
                         </MenuItem>
                    ))}
                  </Select> 
              </Grid>
                 

              <Grid xs={12} sm={6}>
                  <InputLabel>Subdivision</InputLabel>
                    <Select value={shippingsubdivision} fullWidth onChange={(e)=>setshippingsubdivision(e.target.value)}>
                      {subdivisions.map((subdivision)=>(                                             
                      <MenuItem key={subdivision.id} value={subdivision.id}>{subdivision.label}</MenuItem>
                          
                      ))}
                    </Select>
              </Grid>

              <Grid xs={12} sm={6}>
                  <InputLabel>Shipping options</InputLabel>
                    <Select value={shippingoption} fullWidth onChange={(e)=>setshippingoption(e.target.value)}>
                    {options.map((option)=>(
                        <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>

                    ))}
                    </Select>                    
                </Grid>

            </Grid>
            <br />
            <div style = {{display:'flex',justifyContent:'space-between'}}>
                <Button component={Link} to = "/cart" variant="outlined">back to cart</Button>
                <Button type="submit" variant="contained" color='primary'>Next</Button>


            </div>
            </form>
          </FormProvider>
      </>

    )
}

export default AddressForm