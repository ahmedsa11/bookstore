import { configureStore} from '@reduxjs/toolkit';
import optionSlise from '../redusers/optionSlise';
import usersSlice from '../redusers/userslice';
const store = configureStore({reducer:{option:optionSlise,users:usersSlice}});
export default store; 