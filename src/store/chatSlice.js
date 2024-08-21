import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFriend: 'Akhil',
  messages: {
    Akhil: [],
    Dev: [],
    Mark: []
  }
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectFriend: (state, action) => {
      state.selectedFriend = action.payload;
    },
    sendMessage: (state, action) => {
      state.messages[state.selectedFriend].push(action.payload);
    }
  }
});

export const { selectFriend, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
