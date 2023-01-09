import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userid, setUser] = useState(localStorage.getItem('id'));
  const setuserId = (user) => {
    localStorage.setItem('id', user);
    setUser(user);
  };
  return (
    <UserContext.Provider
      value={{
        userid,
        setuserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
