import {configureStore} from '@reduxjs/toolkit';
import jobListReducer from "../slice/JobListSlice";
import authReducer from "../slice/authSlice";
import jobApplicationListReducer from "../slice/JobApplicationListSlice";
import genericReducer from '../slice/genericSlice';

export const store = configureStore({
	reducer : {
		auth: authReducer,
		jobList: jobListReducer,
		jobApplicationList: jobApplicationListReducer,
		genericValue: genericReducer
	}
})
