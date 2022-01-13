import React from 'react';
import { ComponentProps } from '../_app';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import {
  Box,
  ListItem,
  ListItemText,
  TextField,
  Paper,
  RadioGroup,
  Radio,
  Button,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { Form, FormikFormProps, Formik, Field, FieldProps } from 'formik';
import { useRouter } from 'next/dist/client/router';
import * as yup from 'yup';
import { ByPassPaymentInput } from '../../__generated__/globalTypes';
import { useMutation } from '@apollo/client';
import { ByPassPayment } from '../../lib/mutations/ByPassPaymentMutation';

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
    hide: { display: 'none' },
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
  const [mutateFunction, { data, loading, error }] = useMutation(ByPassPayment);
  const initialValues: ByPassPaymentInput = {
    TeamLeaderEmail: '',
    PaymentId: '',
    TeamName: '',
  };
  const handleSubmit = (values: typeof initialValues) => {
    const input: ByPassPaymentInput = {
      TeamLeaderEmail: values.TeamLeaderEmail,
      PaymentId: values.PaymentId,
      TeamName: values.TeamName,
    };
    console.log(input);
    mutateFunction({
      variables: { input: input },
      onCompleted: () => {
        setSuccessMessage('By Passed Successfully');
      },
      onError: () => {
        setErrorMessage('Something went wrong Please try again later!');
      },
    });
  };

  return (
    <div className={classes.root} id='reg'>
      <Box>
        <ListItem className={classes.heading}>
          <ListItemText
            primary={' Admin Dashboard'}
            primaryTypographyProps={{ variant: 'h4', align: 'center' }}
            secondary={`By Pass Payment`}
            secondaryTypographyProps={{
              className: `${classes.subHeading}`,
              align: 'center',
            }}
          />
        </ListItem>
        <Formik
          onSubmit={(values) => handleSubmit(values)}
          initialValues={initialValues}
        >
          {({ values, setValues }) => (
            <Form aria-label='Create Question form' id='create-question-form'>
              <Box>
                <Paper elevation={4} className={classes.paper}>
                  <ListItem className={classes.details}>
                    <ListItemText
                      primary={'Team Details'}
                      primaryTypographyProps={{ variant: 'h6' }}
                      secondary={'Please fill these details carefully'}
                    />
                  </ListItem>
                  <ListItem>
                    <Field name='TeamLeaderEmail'>
                      {({
                        field,
                        meta,
                      }: FieldProps<
                        typeof initialValues['TeamLeaderEmail']
                      >) => (
                        <TextField
                          label='Email Id'
                          required
                          fullWidth
                          type='text'
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          className={classes.textField}
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='TeamName'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['TeamName']>) => (
                        <TextField
                          label='Team Name'
                          required
                          fullWidth
                          type='text'
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          className={classes.textField}
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='PaymentId'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['PaymentId']>) => (
                        <TextField
                          fullWidth
                          size='medium'
                          multiline
                          label='Payment Id'
                          required
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          className={classes.textField}
                        />
                      )}
                    </Field>
                  </ListItem>

                  <Box className={classes.buttonGroup}>
                    <Button
                      type='submit'
                      color='primary'
                      variant='contained'
                      className={classes.button}
                      onClick={() => {
                        handleSubmit(values);
                        setValues(initialValues);
                      }}
                    >
                      Submit
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
