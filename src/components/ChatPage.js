import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../store/chatSlice';

export default function ChatPage() {
  const [newMessage, setNewMessage] = useState('');
  const selectedFriend = useSelector((state) => state.chat.selectedFriend);
  const messages = useSelector((state) => state.chat.messages[selectedFriend] || []);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      dispatch(sendMessage(newMessage));
      setNewMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
        <List>
          {messages.map((msg, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText primary={msg} sx={{ wordBreak: 'break-word' }} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField 
          variant="outlined" 
          fullWidth 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type a message" 
          sx={{ marginRight: 1 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
