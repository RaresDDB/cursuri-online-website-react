import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CourseCard from '../components/CourseCard';
import { useAuth } from '../context/AuthContext';
import { coursesData } from '../data/coursesData';

const MyCourses = () => {
    const { userCourses } = useAuth();
    const enrolledCourses = coursesData.filter(course => userCourses.includes(course.id));

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
                Cursurile mele
            </Typography>
            {enrolledCourses.length > 0 ? (
                <Grid container spacing={4}>
                    {enrolledCourses.map(course => (
                        <Grid item key={course.id} xs={12} sm={6} md={4}>
                            <CourseCard course={course} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h5" color="textSecondary" sx={{ mt: 4, textAlign: 'center' }}>
                    Nu ai cursuri adaugate.
                </Typography>
            )}
        </Container>
    );
};

export default MyCourses;
