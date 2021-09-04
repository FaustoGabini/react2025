import {
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { createUser } from "./db";
import firebase from "./firebase";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

/* Me devuelve el context actual */
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);

      setUser(user);
      return user;
    } else {
      setUser(false);
    }
  };

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(
        new firebase.auth.GithubAuthProvider()
      )
      .then((response) => {
        handleUser(response.user);
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          handleUser(user);
        } else {
          handleUser(user);
        }
      });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signOut,
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
