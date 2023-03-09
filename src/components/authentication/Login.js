import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Checkbox, Grid, TextField, FormControlLabel, Paper, Button } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/home");
    }, [user, loading]);

	const onSubmit = async ({ username, password }) => {
		try {
			
		} catch (error) {
			console.log(error)
		}
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
	            <TextField type="text" label="Username" value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
	          </Grid>
	          <Grid item xs={12}>
	            <TextField label="Password" type={'password'} value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
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
	            <Button fullWidth variant="contained" onClick={() => logInWithEmailAndPassword(email, password)}>Login</Button>
	          </Grid>
	          <Grid item xs={12}>
		          <Button fullWidth variant="contained" onClick={() => signInWithGoogle()}>
			          Login with Google
			        </Button>
		        </Grid>
	          <Grid item xs={12}>
	            <p>Don't have an account? <a href="/signup">Register</a></p>
	          </Grid>
	        </Grid>
	    </Paper>
	)
}

export default Login
