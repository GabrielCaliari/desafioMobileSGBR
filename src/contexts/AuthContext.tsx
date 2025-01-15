import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  name: string;
  token: string;
}

interface AuthContextData {
  user: User | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Altere o tipo de estado para User ou null

  const signIn = async (username: string, password: string) => {
    try {
      const response = await fetch('https://test-api-y04b.onrender.com/signIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(data));
      setUser(data.user);
    } catch (error) {
      throw new Error(error.message || 'Erro ao realizar login.');
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@user');
    setUser(null);
  };

  // Verificar se já há um usuário logado quando o aplicativo iniciar
  useEffect(() => {
    const loadUserData = async () => {
      const storedUser = await AsyncStorage.getItem('@user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadUserData();
  }, []);

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
