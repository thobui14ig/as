import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 10
    },
    reducers: {
      incremented: state => {
        // console.log(12321321321321);
        
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }
    }
  })

const { actions, reducer: auth } = counterSlice;
export const { incremented, decremented } = actions
export default auth;