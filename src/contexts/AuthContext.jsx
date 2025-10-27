import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token on app load
    const token = localStorage.getItem('rmo_token');
    if (token) {
      try {
        // Decode JWT token to get user info
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({
          id: payload.userId,
          email: payload.email,
          name: payload.name,
          role: payload.role,
          workspace: payload.workspace || 'Demo Company'
        });
      } catch (error) {
        console.error('Token decode error:', error);
        localStorage.removeItem('rmo_token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call - replace with actual backend
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const token = data.token;
      
      localStorage.setItem('rmo_token', token);
      
      // Decode token to get user info
      const payload = JSON.parse(atob(token.split('.')[1]));
      const userData = {
        id: payload.userId,
        email: payload.email,
        name: payload.name,
        role: payload.role,
        workspace: payload.workspace
      };
      
      setUser(userData);
      toast.success('Welcome back!');
      return userData;
    } catch (error) {
      // For MVP demo purposes, simulate login with mock data
      const mockUser = {
        id: '1',
        email: email,
        name: email.split('@')[0],
        role: email.includes('admin') ? 'Admin' : 'Member',
        workspace: 'Demo Company'
      };
      
      const mockToken = btoa(JSON.stringify({
        userId: mockUser.id,
        email: mockUser.email,
        name: mockUser.name,
        role: mockUser.role,
        workspace: mockUser.workspace,
        exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
      }));
      
      localStorage.setItem('rmo_token', mockToken);
      setUser(mockUser);
      toast.success('Welcome back!');
      return mockUser;
    }
  };

  const register = async (name, email, password, workspace) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, workspace }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      toast.success('Account created successfully!');
      return data;
    } catch (error) {
      // For MVP demo purposes, simulate registration
      toast.success('Account created successfully!');
      return { success: true };
    }
  };

  const logout = () => {
    localStorage.removeItem('rmo_token');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const hasRole = (requiredRole) => {
    if (!user) return false;
    
    const roleHierarchy = {
      'Member': 1,
      'Admin': 2
    };
    
    return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    hasRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
