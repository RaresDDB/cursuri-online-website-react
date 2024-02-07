import React from 'react';
import {Container, Grid, Typography} from '@mui/material';
import CourseCard from '../components/CourseCard';
import {coursesData} from '../data/coursesData';

const Courses = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 4 }}>
                Cursurile Noastre
            </Typography>
            <Grid container spacing={4}>
                {coursesData.map((course) => (
                    <Grid item key={course.id} xs={12} sm={6} md={4}>
                        <CourseCard course={course} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Courses;
