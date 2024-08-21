import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectFriend } from '../store/chatSlice';

export default function FriendList() {
  const friends = ['Akhil', 'Dev', 'Mark'];
  const selectedFriend = useSelector((state) => state.chat.selectedFriend);
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Friends
      </Typography>
      <List>
        {friends.map(friend => (
          <React.Fragment key={friend}>
            <ListItem 
              button 
              selected={selectedFriend === friend} 
              onClick={() => dispatch(selectFriend(friend))}
            >
              <ListItemText primary={friend} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
