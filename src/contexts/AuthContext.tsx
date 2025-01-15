import React, { createContext, useState, ReactNode, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  user: string | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const signIn = async (username: string, password: string) => {
    try {
      const response = await fetch('https://test-api-y04b.onrender.com/signIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: username, password }),
      });

      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(data));
      setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@user');
    setUser(null);
  };


  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
 const context = useContext(AuthContext);
 if (!context) {
   throw new Error('useAuth must be used within an AuthProvider');
 }
 return context;
};
