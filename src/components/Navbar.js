import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, Button, Typography } from '@mui/material';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, userEmail, logout } = useAuth();

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor="lightblue" sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
            {! isAuthenticated ? (
                <>
                <Typography variant="h6"></Typography>
                </>
            ) : (
                <>
                    <Typography variant="h6">Bine ai venit, {userEmail}</Typography>
                </>
            )}
            <Box>
                <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                {!isAuthenticated ? (
                    <>
                        <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                        <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" onClick={() => navigate('/courses')}>Cursuri</Button>
                        <Button color="inherit" onClick={() => navigate('/my-courses')}>Cursurile mele</Button>
                        <Button color="inherit" onClick={logout}>Delogare</Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Navbar;
