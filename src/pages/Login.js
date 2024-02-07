import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/authService';
import {Button, TextField, Typography, Container, Box} from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const user = loginUser(email, password);
        if (user) {
            login(user.email);
            navigate('/');
        } else {
            setError('Credentialele sunt incorecte.');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box my={4} textAlign="center">
                <Typography variant="h4" component="h1" gutterBottom>
                    Autentificare
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        name="password"
                        label="Parola"
                        type="password"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Autentifica-te
                    </Button>
                </form>
            </Box>
            <Typography> Nu ai un cont? <Link to="/register">Inregistreaza-te</Link></Typography>
            {error && <Typography color="error" style={{ marginTop: '10px' }}>{error}</Typography>}
        </Container>
    );
};

export default Login;
