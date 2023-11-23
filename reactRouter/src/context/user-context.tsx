import { createContext, useState, useContext } from 'react';

type Props = {
  children: React.ReactNode;
};

type TUser = {
  id: number;
  username: string;
  password: string;
};

type TUserContext = {
  user?: TUser;
  setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>;
};

export const UserContext = createContext<TUserContext | null>(null);

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<TUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error('useUserContext must be used within a NoteContextProvider');

  return context;
};
