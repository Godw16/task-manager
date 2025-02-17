import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Layout = ({ children, title }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              {user?.name}
            </Typography>
            <Avatar sx={{ bgcolor: '#A9B5DF', color: '#2D336B', mr: 2 }}>
              {user?.name?.charAt(0).toUpperCase()}
            </Avatar>
            <Button color="inherit" onClick={handleLogout} startIcon={<ExitToAppIcon />}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {title && (
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="sm">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Task Manager by Your Name
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;