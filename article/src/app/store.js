import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import blogReducer from '../features/articleSlice';
// reducer for article and user
export default configureStore({
	reducer: {
		user: userReducer,
		blog: blogReducer
	}
});
