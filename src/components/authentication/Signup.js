import { Checkbox, Grid, TextField, FormControlLabel, Paper, Button } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../firebase";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const register = () => {
		if (!name) alert("Please enter name");
		registerWithEmailAndPassword(name, email, password);
	};
	useEffect(() => {
	    if (loading) return;
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
	            <TextField label="Full name" type="text" value={name} onChange={(e) => setName(e.target.value)}></TextField>
	          </Grid>
	          <Grid item xs={12}>
	            <TextField label="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
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
	            <Button fullWidth variant="contained" onClick={register}>Register</Button>
	          </Grid>
	          <Grid item xs={12}>
	            <p>Already have an account? <a href="/">Login</a></p>
	          </Grid>
	        </Grid>
	    </Paper>
	)
}

export default SignUp
