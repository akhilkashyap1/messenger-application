import React from 'react';
import { Container, Grid, Paper, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FriendList from './components/FriendList';
import ChatPage from './components/ChatPage';
import Logo from '../src/assets/chat1.png';

function App() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
      <AppBar position="static" color="primary" sx={{ borderRadius: 2 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <img src={Logo} alt="Logo" style={{ height: 40, marginRight: 16 }} />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Messenger App
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <FriendList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 2, height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <ChatPage />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
