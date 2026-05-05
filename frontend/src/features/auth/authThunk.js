import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerAPI,
  loginAPI,
  verifyOtpAPI,
  resendOtpAPI,
} from "./authAPI";

// Register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      return await registerAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Registration failed"
      );
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const res = await loginAPI(data);

      if (res.token) {
        localStorage.setItem("token", res.token);
      }
      localStorage.setItem("user", JSON.stringify(res));

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Login failed"
      );
    }
  }
);

// Verify OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (data, thunkAPI) => {
    try {
      return await verifyOtpAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "OTP verification failed"
      );
    }
  }
);

// Resend OTP
export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (email, thunkAPI) => {
    try {
      return await resendOtpAPI(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Resend OTP failed"
      );
    }
  }
);
