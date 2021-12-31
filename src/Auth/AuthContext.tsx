import { useRouter } from 'next/router';
import nookies from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';
import firebaseSDK from '../firebase';

const AuthContext = createContext<{ user: firebase.default.User | null }>({
  user: null,
});

export const AuthProvider = ({ children }) => {
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
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
