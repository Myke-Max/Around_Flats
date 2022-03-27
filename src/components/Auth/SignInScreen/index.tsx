import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// FIREBASE
import firebase from 'firebase';

// MATERIAL UI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link, TextField, Typography } from '@mui/material/';

// FORMIK
import { useFormik } from 'formik';
import loginSchema from '../../../validationSchema/loginSchema';
import { UIContext } from '../../Unknown/UIContext';
import PasswordInput from '../Password Input';

const SignInScreen: React.FC = () => {
  const { setAlert } = useContext(UIContext);
  const [load, setLoad] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: async ({ email, password }) => {
      try {
        setLoad(true);
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        setLoad(false);
        const { user } = userCredential;
        setAlert({
          show: true,
          severity: 'success',
          message: `Login Success with ${user?.email}`,
        });
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        setAlert({
          show: true,
          severity: 'error',
          message,
        });
      }
    },
  });

  return (
    <Grid container>
      <Box textAlign="center" width="100%">
        <Typography color="common.black" gutterBottom variant="h1">
          Login
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ mb: 6 }}
          fullWidth
          margin="normal"
          color="warning"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
        />
        <PasswordInput
          id="password"
          name="password"
          label="password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touchedPassword={formik.touched.password}
          errorPassword={formik.errors.password}
        />
        <Grid item xs={12}>
          <Button
            disabled={!(formik.isValid && formik.dirty) || load}
            fullWidth
            type="submit"
            color="secondary"
          >
            Sign in
          </Button>
        </Grid>
        <Grid sx={{ mt: 30 }}>
          <Typography color="common.black" variant="h4">
            Don’t have an account?
          </Typography>
          <Link color="primary" component={RouterLink} to="/registration">
            Register
          </Link>
        </Grid>
      </form>
    </Grid>
  );
};

export default SignInScreen;
