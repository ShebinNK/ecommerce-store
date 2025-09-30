import {create} from 'zustand';
import axios from '../lib/axios';
import {toast} from 'react-hot-toast';

export const useUserStore = create((set, get) => ({
    user: null,
    loading: false,
    checkingAuth: true,

    signup: async ({ name, email, password, confirmPassword }) => {
        set({ loading: true });
        if (password !== confirmPassword) {
            set({ loading: false });
            return toast.error("Passwords do not match");
        }
        try {
            const res = await axios.post('/auth/signup', {
                name,
                email,
                password,
                confirmPassword
            });
            set({ user: res.data, loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.error || "Signup failed");
        }
    },
    login: async ({ email, password }) => {
        set({ loading: true });
        try {
            const res = await axios.post('/auth/login', {
                email,
                password,
            });
            set({ user: res.data, loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.error || "Login failed");
        }
    },
    logout: async () => {
        try{
            await axios.post('/auth/logout');
            set({ user: null });
        }
        catch(error){
            toast.error(error.response?.data?.error || "Logout failed");
        }
    },
    checkAuth: async () => {
        set({ checkingAuth: true });
        try {
            const res = await axios.get('/auth/profile');
            set({ user: res.data, checkingAuth: false });
        } catch (error) {
            set({ checkingAuth: false ,user:null});
            toast.error(error.response?.data?.message || "Authentication check failed");
        }
    },
    
}));
