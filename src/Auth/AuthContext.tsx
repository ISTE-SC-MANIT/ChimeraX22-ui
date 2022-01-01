import { useRouter } from 'next/router';
import nookies from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';
import firebaseSDK from '../firebase';
import * as React from 'react';
const AuthContext = createContext<{ user: firebase.default.User | null }>({
  user: null,
});
interface authProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: authProps) => {
  const [user, setUser] = useState<firebase.default.User | null>(null);
  const router = useRouter();

  useEffect(() => {
    return firebaseSDK.auth().onIdTokenChanged(async (user) => {
      if (user) {
        setUser(user);
        const token = await user.getIdToken();
        return nookies.set(undefined, 'token', token, { path: '/' });
      } else {
        setUser(null);
        return nookies.set(undefined, 'token', '', { path: '/' });
      }
    });
  }, [router]);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
