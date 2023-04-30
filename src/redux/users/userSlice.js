import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    add: (state, action) => {
      console.log(state);
      console.log(action);
      // return [...Object.values(state), action.payload];
      state.users.push({
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
      });
    },
    remove: (state, action) => {
      // return Object.values(state).filter(
      //   contact => contact.id !== action.payload
      // );
    },
    // update: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = usersSlice.actions;

export default usersSlice.reducer;
