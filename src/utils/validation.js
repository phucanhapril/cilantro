import * as Yup from 'yup';

export const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export const BasicsSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  dobDay: Yup.number().required('Required'),
  dobMonth: Yup.number().required('Required'),
  dobYear: Yup.number().required('Required'),
  gender: Yup.string().required('Required'),
  maritalStatus: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zipcode: Yup.string().required('Required')
    .min(5, 'Should be 5 digits')
    .max(5, 'Should be 5 digits')
    .test(
      'zip-formatted',
      'Should be 5 digits',
      value => {
        const regex = /^\d{5}$/;
        return value && value.trim().match(regex) ? true : false;
      }
    ),
  phone: Yup.string()
    .required('Required')
    .test(
      'phone-formatted',
      'Should be formatted as (000)000-0000',
      value => {
        const regex = /^\(\d{3}\)\d{3}-\d{4}$/;
        return value && value.trim().match(regex) ? true : false;
      }
    )
});
