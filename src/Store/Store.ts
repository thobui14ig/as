import { configureStore, combineReducers } from '@reduxjs/toolkit';
import auth from './Modules/Auth'

const reducer = combineReducers({
    abc: auth,
})
const store = configureStore({
    reducer,
  })

export default store;