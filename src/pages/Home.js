import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Typography, Container, Box } from '@mui/material';

const Home = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleNavigate = (page) => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate(page);
        }
    };

    return (
        <Box
            sx={{
                height: '75vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom align="center">
                    Bine ai venit!
                </Typography>
                <Typography variant="h5" color="textSecondary" paragraph align="center">
                    Descopera cursurile noastre online.
                </Typography>
                <Box mt={4} textAlign="center">
                    <Button variant="contained" color="primary" onClick={() => handleNavigate('/courses')}>
                        Vezi cursurile
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
