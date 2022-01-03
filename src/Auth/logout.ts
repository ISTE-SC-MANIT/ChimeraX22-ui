import firebaseSDK from '../firebase';
import nookies from 'nookies';
import { client } from '../lib/apollo';

export const logout = () => {
  firebaseSDK
    .auth()
    .signOut()
    .then(() => nookies.destroy(undefined, 'token', { path: '/' }))
    .then(() => client.clearStore())
    .catch(() => {
      console.log('error deleting token');
    });
};
