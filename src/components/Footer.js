import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', mt: 4, py: 3 }}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    © 2024 Cursuri Online. Toate drepturile rezervate.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
