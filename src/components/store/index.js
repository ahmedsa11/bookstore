import { configureStore} from '@reduxjs/toolkit';
import optionSlise from '../redusers/optionSlise';
import usersSlice from '../redusers/userslice';
import books from '../redusers/bookSlice';
const store = configureStore({reducer:{option:optionSlise,users:usersSlice,books}});
export default store; 