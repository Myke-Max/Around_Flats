import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// FIREBASE
import firebase from 'firebase';
// MATERIAL UI
import { Link, TextField, Typography, Box, Button, Grid } from '@mui/material/';
// FORMIK
import { useFormik } from 'formik';
import registrationSchema from '../../../validationSchema/registrationSchema';
import { UIContext } from '../../Unknown/UIContext';
import PasswordInput from '../Password Input';

const SignUpScreen: React.FC = () => {
  const [load, setLoad] = useState(false);
  const { setAlert } = useContext(UIContext);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registrationSchema,

    onSubmit: async ({ email, password, fullName }, { resetForm }) => {
      setLoad(true);
      try {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const { user } = userCredential;

        await user?.updateProfile({ displayName: fullName });
        setAlert({
          show: true,
          severity: 'success',
          message: `Welcome on board 🚀`,
        });
        setLoad(false);
        resetForm();
      } catch (error) {
        let message;
        if (error instanceof Error) {
          message = error.message;
          setAlert({
            show: true,
            severity: 'error',
            message,
          });
        }
      }
    },
  });

  return (
    <Grid container>
      <Box textAlign="center" width="100%">
        <Typography color="common.black" gutterBottom variant="h1">
          Register
        </Typography>
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ mb: 6 }}
          fullWidth
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
        <TextField
          sx={{ mb: 6 }}
          fullWidth
          color="warning"
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
          required
        />
        <PasswordInput
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touchedPassword={formik.touched.password}
          errorPassword={formik.errors.password}
        />
        <PasswordInput
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          value={formik.values.confirmPassword}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touchedPassword={formik.touched.confirmPassword}
          errorPassword={formik.errors.confirmPassword}
        />
        <Grid item xs={12}>
          <Button
            disabled={!(formik.isValid && formik.dirty)}
            fullWidth
            type="submit"
            color="secondary"
          >
            Sign up
          </Button>
        </Grid>
        <Grid sx={{ mt: 10 }}>
          <Typography color="common.black" variant="h4">
            Already have account?
          </Typography>
          <Link color="primary" component={RouterLink} to="/login">
            Sing in
          </Link>
        </Grid>
      </form>
    </Grid>
  );
};

export default SignUpScreen;
