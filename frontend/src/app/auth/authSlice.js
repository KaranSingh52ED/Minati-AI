import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API = `${BASE_URL}/api/auth`;
const PROFILE_API = `${BASE_URL}/api/profile`;
export const registerUser = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/register`, data);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const verifyOtp = createAsyncThunk('auth/verifyOtp', async (data, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/verify-otp`, data);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/login`, data);
    localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const resendOtp = createAsyncThunk('auth/resendOtp', async (data, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/resend-otp`, data);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (data, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/forgot-password`, data);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const resetPassword = createAsyncThunk('auth/resetPassword', async (data, thunkAPI) => {
  try {
    const res = await axios.post(`${API}/reset-password`, data);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

// GET PROFILE
export const getProfile = createAsyncThunk('auth/getProfile', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(PROFILE_API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || { message: err.message });
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
    },
    clearAuthMessages: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(
        (action) => action.type.startsWith('auth/') && action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        },
      )
      .addMatcher(
        (action) => action.type.startsWith('auth/') && action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
          if (action.payload.token) state.token = action.payload.token;
        },
      )
      .addMatcher(
        (action) => action.type.startsWith('auth/') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload.message || 'try to login first!';
        },
      );
  },
});

export const { logout, clearAuthMessages } = authSlice.actions;
export default authSlice.reducer;
