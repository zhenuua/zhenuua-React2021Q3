import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cashSlice from './reducers/mainRedicers';

const rootReducer = combineReducers({
  cashSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
