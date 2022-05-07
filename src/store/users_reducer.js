import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'users_reducer',
  initialState: {
    user: {},
    users: [],
    pages: {},
    currentUsersId: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.results;
      state.pages = action.payload.info;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCurrentUsers: (state, action) => {
      state.currentUsersId.push(action.payload);
    },
    removeCurrentUsers: (state, action) => {
        state.currentUsersId = state.currentUsersId.filter(el => el !== action.payload);
    },
  },
})

export const { setUsers, setUser, setCurrentUsers, removeCurrentUsers } = counterSlice.actions;

// // TODO: const currentUsersId = useSelector(state => state.users_reducer.currentUsersId);
// export const currentUsersId = (state) => state.users_reducer.currentUsersId;

export default counterSlice.reducer;