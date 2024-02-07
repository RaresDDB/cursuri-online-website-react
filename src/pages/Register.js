import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const isRegistered = registerUser(email, password);
        if (isRegistered) {
            navigate('/login');
        } else {
            setError('Exista deja un cont cu acest email.');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box my={4} textAlign="center">
                <Typography variant="h4" component="h1" gutterBottom>
                    Inregistrare
                </Typography>
                {error && <Typography color="error">{error}</Typography>}
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
                        Inregistreaza-te
                    </Button>
                    <Box mt={2}>
                        <Typography>
                            Ai deja un cont? <Link to="/login">Logheaza-te</Link>
                        </Typography>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default Register;
