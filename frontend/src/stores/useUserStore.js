import { create } from 'zustand';
import axios from '../lib/axios';
import { toast } from 'react-hot-toast';

// Clean, simplified store (immediate role availability, silent 401 on auth check)
export const useUserStore = create((set) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    set({ loading: true });
    try {
      const { data } = await axios.post('/auth/signup', { name, email, password, confirmPassword });
      set({ user: data.user || null });
      return data.user;
    } catch (error) {
      const msg = error.response?.data?.error || error.response?.data?.message || 'Signup failed';
      toast.error(msg);
    } finally {
      set({ loading: false });
    }
  },

  login: async ({ email, password }) => {
    set({ loading: true });
    try {
      const { data } = await axios.post('/auth/login', { email, password });
      set({ user: data.user || null });
      return data.user;
    } catch (error) {
      const msg = error.response?.data?.error || error.response?.data?.message || 'Login failed';
      toast.error(msg);
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await axios.post('/auth/logout');
    } catch (error) {
      const msg = error.response?.data?.error || error.response?.data?.message || 'Logout failed';
      toast.error(msg);
    } finally {
      set({ user: null });
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const { data } = await axios.get('/auth/profile');
      set({ user: data.user || data, checkingAuth: false });
      return data.user;
    } catch (error) {
      const status = error.response?.status;
      if (status !== 401 && status !== 403) {
        const msg = error.response?.data?.error || error.response?.data?.message || 'Auth check failed';
        toast.error(msg);
      }
      set({ user: null, checkingAuth: false });
    }
  },
}));
