import React from 'react';
import { ComponentProps } from '../_app';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  TextField,
  Paper,
  Button,
} from '@mui/material';
import { Form, FormikFormProps, Formik, Field, FieldProps } from 'formik';
import { useRouter } from 'next/dist/client/router';
import Autocomplete from '@mui/material/Autocomplete';
import * as yup from 'yup';
import { cities } from '../../Utils/cities';
import CustomDrawer from '../../components/navbar/customDrawer';
import { UserInput } from '../../__generated__/globalTypes';
import { RegisterUser } from '../../lib/mutations/RegisterUserMutation';
import { useMutation } from '@apollo/client';
import { logout } from '../../Auth/logout';
import Navbar from '../../components/navbar/Navbar';

const validationSchema = yup.object({
  name: yup
    .string()

    .required('Name cannot be empty'),
  college: yup
    .string()

    .required('College cannot be empty'),
  email: yup
    .string()
    .email('Provide a valid Email ID')
    .required('Email cannot be empty'),
  phone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .test(
      'len',
      'A phone number needs to be excatly 10 digits',
      (val) => val?.toString().length === 10
    )
    .required('A phone number is required'),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      backgroundColor: '#3997F5',
      minHeight: '100vh',
      margin: '0px',
      padding: '0px',
      boxSizing: 'border-box',
      paddingBottom: '6px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 320,
    },
    fullList: {
      width: 'auto',
    },
    sublist: {
      marginLeft: theme.spacing(3),
    },
    paper: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(4),
      padding: theme.spacing(2),
      borderRadius: '25px',
      [theme.breakpoints.down('md')]: {
        width: '96%',
      },
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(4),
    },
    table: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(2),
    },
    buttonGroup: {
      // float: "right",
      width: 'fit-content',
      margin: 'auto',
      //marginTop: theme.spacing(4)
    },
    heading: {
      color: 'white',
      marginBottom: theme.spacing(4),
      paddingTop: '40px',
    },
    subHeading: {
      color: '#333333',
      fontSize: '1.2rem',
    },
    details: {
      textAlign: 'center',
    },
    center: {
      width: 'fit-content',
      margin: 'auto',
    },
    promoB: {
      [theme.breakpoints.down('md')]: {
        height: '200px',
      },
    },
    promoButton: {
      [theme.breakpoints.down('md')]: {
        marginTop: '15px',
        marginLeft: theme.spacing(2),
      },
    },
    text: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        marginTop: '165px',
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const Register: React.FC<ComponentProps> = ({
  viewer,
  refetch,
  setSuccessMessage,
  setErrorMessage,
}) => {
  const classes = useStyles();
  const router = useRouter();
  const [terms, setTerms] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const [mutateFunction, { data, loading, error }] = useMutation(RegisterUser);
  React.useEffect(() => {
    if (viewer.step === 'REGISTER') {
    }
    if (viewer.step === 'CHOOSE_TEAM') {
      router.push('/dashboard/team');
    }
    if (viewer.step === 'PAYMENT') {
      router.push('/dashboard/payment');
    }
    if (viewer.step === 'TEST') {
      router.push('/dashboard/test');
    }
  }, [viewer.step]);

  const initialValues = {
    name: viewer.name,
    email: viewer.email,
    college: '',
    phone: '',
    year: 1,
    city: { name: '', state: '' },
  };
  const handleSubmit = (values: typeof initialValues) => {
    const userInput: UserInput = {
      name: values.name,
      phone: values.phone,
      year: values.year,
      college: values.college,
      city: values.city.name,
    };

    mutateFunction({
      variables: { input: userInput },
      onCompleted: () => {
        setSuccessMessage('Registered Successfully');
        refetch();
        router.push('/dashboard/team');
      },
      onError: () => {
        setErrorMessage('Something went wrong Please try again later!');
      },
    });
  };

  const handleCity = (
    values: typeof initialValues,
    setValues: (v: typeof initialValues) => void,
    newValue: any
  ) => {
    setValues({ ...values, city: newValue });
  };

  return (
    <div className={classes.root} id='reg'>
      {/* <CustomDrawer name={'Devansh'} username={'Devansh'} open={open} setOpen={setOpen} /> */}
      <CustomDrawer
        name={viewer.name}
        username={viewer.email}
        open={open}
        setOpen={setOpen}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <Navbar
        setOpen={setOpen}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <Box>
        {/* <Button
          variant='outlined'
          onClick={() => {
            logout();
            router.push('/');
          }}
        >
          {' '}
          Logout
        </Button> */}
        <ListItem className={classes.heading}>
          <ListItemText
            primary={' Step-1 Registration'}
            primaryTypographyProps={{ variant: 'h4', align: 'center' }}
            secondary={`Register now to be a part of ISTE's multi city quiz competition: ChimeraX22`}
            secondaryTypographyProps={{
              className: `${classes.subHeading}`,
              align: 'center',
            }}
          />
        </ListItem>

        <Formik
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {({ values, setValues }) => (
            <Form aria-label='Sign up form' id='sign-up-form'>
              <Box>
                <Paper elevation={4} className={classes.paper}>
                  <ListItem className={classes.details}>
                    <ListItemText
                      primary={'Personal Details'}
                      primaryTypographyProps={{ variant: 'h6' }}
                      secondary={
                        'Please fill these details carefully, you will be informed about ChimeraX through these details'
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <Field name='name'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['name']>) => (
                        <TextField
                          fullWidth
                          id='name-input'
                          label='Name'
                          required
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          size='small'
                          className={classes.textField}
                          disabled
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='email'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['email']>) => (
                        <TextField
                          fullWidth
                          id='name-input'
                          label='Email'
                          required
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          size='small'
                          className={classes.textField}
                          disabled
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='college'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['college']>) => (
                        <TextField
                          fullWidth
                          id='name-input'
                          label='College'
                          required
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          size='small'
                          className={classes.textField}
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='phone'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['phone']>) => (
                        <TextField
                          fullWidth
                          id='name-input'
                          label='Mobile no.'
                          required
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          size='small'
                          className={classes.textField}
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='city'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['city']>) => (
                        <Autocomplete
                          id='combo-box-demo'
                          options={cities}
                          getOptionLabel={(option) =>
                            `${option.name} , ${option.state}`
                          }
                          style={{ width: '98%' }}
                          onChange={(event: any, newValue: any) =>
                            handleCity(values, setValues, newValue)
                          }
                          renderInput={
                            (params) => (
                              <TextField
                                {...params}
                                fullWidth
                                id='name-input'
                                label='City where your college exists'
                                required
                                error={!!(meta.touched && meta.error)}
                                helperText={meta.touched ? meta.error : ''}
                                variant='outlined'
                                size='small'
                                className={classes.textField}
                              />
                            )
                            // <TextField {...params} label="Combo box" variant="outlined" />
                          }
                        />
                      )}
                    </Field>
                  </ListItem>

                  <Typography align='center'>
                    *If you cannot find your city of college then select others
                    option.
                  </Typography>

                  <Box className={classes.buttonGroup}>
                    <Button
                      type='submit'
                      color='primary'
                      variant='contained'
                      className={classes.button}
                      // disabled
                    >
                      Proceed
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Register;
