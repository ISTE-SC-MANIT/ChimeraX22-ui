import { NextRouter } from 'next/router';
import firebaseSDK from '../firebase';
import { Status } from '../Utils/status';

interface initialValues {
  password: string;
  email: string;
}

export const emailPasswordLogin = (
  values: initialValues,
  setStatus: React.Dispatch<React.SetStateAction<Status>>,
  router: NextRouter,
  persist: string,
  setErrorMessage: (message: string) => void,
  setSuccessMessage: (message: string) => void
) => {
  if (!(values.email && values.password))
    return setErrorMessage('Please enter valid email and password');
  setStatus(Status.LOADING);

  firebaseSDK
    .auth()
    .setPersistence(persist)
    .then(() =>
      firebaseSDK
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then((response) => {
          // console.log(response.data);
          setStatus(Status.SUCCESS);
          setSuccessMessage('Logged in successfully');
          router.push('/dashboard');
        })
        .catch((e) => {
          setStatus(Status.ERROR);
          setErrorMessage(e.message);
        })
    )
    .catch((e) => {
      setStatus(Status.ERROR);
      setErrorMessage(e.message);
    });
};
