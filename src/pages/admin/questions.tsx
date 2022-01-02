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
import { CreateQuestionInput } from '../../__generated__/globalTypes';
import { useMutation } from '@apollo/client';
import { CreateQuestion } from '../../lib/mutations/CreateQuestionMutation';
import { QuestionAnswer } from '@mui/icons-material';
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
    .string()

    .required('Phone cannot be empty'),
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
  const [mutateFunction, { data, loading, error }] =
    useMutation(CreateQuestion);
  const [questionType, setQuestionType] = React.useState('TEXT');
  const [questionAnswerType, setQuestionAnswerType] = React.useState('SINGLE');

  const handleRadio1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionType((event.target as HTMLInputElement).value);
  };

  const handleRadio2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionAnswerType((event.target as HTMLInputElement).value);
  };
  const initialValues: CreateQuestionInput = {
    question: '',
    questionType: '',
    questionAnswerType: '',
    answer: '',
    answer2: '',
    questionNumber: 1,
    questionAssets: '',
    firstAnswerLabel: 'Answer 1',
    secondAnswerLabel: 'Answer 2',
  };
  const handleSubmit = (values: typeof initialValues) => {
    console.log('d');

    const userInput: CreateQuestionInput = {
      question: values.question,
      questionType: questionType,
      questionAnswerType: questionAnswerType,
      answer: values.answer,
      answer2: values.answer2,
      questionNumber: values.questionNumber,
      questionAssets: values.questionAssets,
      firstAnswerLabel: 'Answer 1',
      secondAnswerLabel: questionAnswerType === 'DOUBLE' ? 'Answer 2' : '',
    };
    console.log(userInput);
    // mutateFunction({
    //   variables: { input: userInput },
    //   onCompleted: () => {
    //     setSuccessMessage('Created Successfully');
    //     refetch();
    //
    //   },
    //   onError: () => {
    //     setErrorMessage('Something went wrong Please try again later!');
    //   },
    //});
  };

  return (
    <div className={classes.root} id='reg'>
      <Box>
        <ListItem className={classes.heading}>
          <ListItemText
            primary={' Admin Dashboard'}
            primaryTypographyProps={{ variant: 'h4', align: 'center' }}
            secondary={`Create Question For Chimera`}
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
            <Form aria-label='Create Question form' id='create-question-form'>
              <Box>
                <Paper elevation={4} className={classes.paper}>
                  <ListItem className={classes.details}>
                    <ListItemText
                      primary={'Question Details'}
                      primaryTypographyProps={{ variant: 'h6' }}
                      secondary={'Please fill these details carefully'}
                    />
                  </ListItem>
                  <ListItem>
                    <Field name='questionNumber'>
                      {({
                        field,
                        meta,
                      }: FieldProps<
                        typeof initialValues['questionNumber']
                      >) => (
                        <TextField
                          label='Question Number'
                          required
                          type='number'
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
                    <Field name='question'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['question']>) => (
                        <TextField
                          fullWidth
                          size='medium'
                          multiline
                          label='Question'
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

                  <ListItem>
                    <Field name='questionType'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['questionType']>) => (
                        <RadioGroup
                          aria-label='questionType'
                          name='questionType'
                          value={questionType}
                          onChange={handleRadio2}
                          className={classes.center}
                        >
                          <Typography component='h4'>Question Type</Typography>
                          <FormControlLabel
                            value='TEXT'
                            control={<Radio />}
                            label='Text'
                          />
                          <FormControlLabel
                            value='AUDIO'
                            control={<Radio />}
                            label='Audio'
                          />
                          <FormControlLabel
                            value='IMAGE'
                            control={<Radio />}
                            label='Image'
                          />
                          <FormControlLabel
                            value='VIDEO'
                            control={<Radio />}
                            label='Video'
                          />
                        </RadioGroup>
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='questionAssets'>
                      {({
                        field,
                        meta,
                      }: FieldProps<
                        typeof initialValues['questionAssets']
                      >) => (
                        <TextField
                          fullWidth
                          label='URL for Media'
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          size='small'
                          disabled={questionType === 'TEXT'}
                          required={questionType !== 'TEXT'}
                          className={
                            questionType === 'TEXT'
                              ? classes.hide
                              : classes.textField
                          }
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='questionAnswerType'>
                      {({
                        field,
                        meta,
                      }: FieldProps<
                        typeof initialValues['questionAnswerType']
                      >) => (
                        <RadioGroup
                          aria-label='questionAnswerType'
                          name='questionAnswerType'
                          value={questionAnswerType}
                          onChange={handleRadio1}
                          className={classes.center}
                        >
                          <Typography component='h4'>
                            Question Answer Type
                          </Typography>
                          <FormControlLabel
                            value='SINGLE'
                            control={<Radio />}
                            label='Single'
                          />
                          <FormControlLabel
                            value='DOUBLE'
                            control={<Radio />}
                            label='Double'
                          />
                        </RadioGroup>
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='answer'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['answer']>) => (
                        <TextField
                          fullWidth
                          label='Answer 1'
                          required
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          size='medium'
                          multiline
                          className={classes.textField}
                        />
                      )}
                    </Field>
                  </ListItem>
                  <ListItem>
                    <Field name='answer2'>
                      {({
                        field,
                        meta,
                      }: FieldProps<typeof initialValues['answer2']>) => (
                        <TextField
                          fullWidth
                          label='Answer 2'
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ''}
                          variant='outlined'
                          size='medium'
                          multiline
                          required={questionAnswerType !== 'SINGLE'}
                          disabled={questionAnswerType === 'SINGLE'}
                          className={
                            questionAnswerType === 'SINGLE'
                              ? classes.hide
                              : classes.textField
                          }
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
                      // onClick={() => {
                      //   handleSubmit(values);
                      // }}
                    >
                      Create Question
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
