import * as Yup from 'yup';

const fullNameRegExp = new RegExp("([A-Z][a-z-']{1,50})|([А-Я][а-я-']{1,50})");
const registrationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full Name is required field')
    .matches(
      fullNameRegExp,
      'Full Name field has to contain at least 2 words, each of which has to start from a capital letter',
    ),
  email: Yup.string()
    .email('Email is invalid,please try again')
    .required('Email address is required'),
  password: Yup.string()
    .min(12, 'Password must be 12 characters or more ')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required'),
});

export default registrationSchema;
