import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Layout from '../components/layout/Home-Layout'
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';

const ForgotPassword = () => {

	const onSubmit = async ({ username, password }) => {
		try {
			
		} catch (error) {
			console.log(error)
		}
	};

	const onFinish = values => {
      console.log('Received values of form: ', values);
    };

    const [checked, setChecked] = React.useState(true);
    
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

	return (
		<Paper>
	        <Grid
	          container
	          spacing={3}
	          direction={'column'}
	          justify={'center'}
	          alignItems={'center'}
	        >
	          <Grid item xs={12}>
	            <TextField label="Username"></TextField>
	          </Grid>
	          <Grid item xs={12}>
	            <TextField label="Password" type={'password'}></TextField>
	          </Grid>
	          <Grid item xs={12}>
	            <FormControlLabel
	              control={
	                <Checkbox
	                  checked={checked}
	                  onChange={handleChange}
	                  label={'Keep me logged in'}
	                  inputProps={{ 'aria-label': 'primary checkbox' }}
	                />
	              }
	              label="Keep me logged in"
	            />
	          </Grid>
	          <Grid item xs={12}>
	            <Button fullWidth variant="contained">Login</Button>
	          </Grid>
	        </Grid>
      	</Paper>
	)
}

export default ForgotPassword
