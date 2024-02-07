import React from 'react';
import {Container, Typography, Box, Card, CardMedia, CardContent, Button} from '@mui/material';
import { coursesData } from "../data/coursesData";
import { useParams } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { useSnackbar } from 'notistack';

const CourseDetails = () => {
    const { id } = useParams();
    const { userCourses, addCourse, removeCourse } = useAuth();
    const { enqueueSnackbar } = useSnackbar();
    const course = coursesData.find(course => course.id.toString() === id);
    const isCourseAdded = userCourses.includes(parseInt(id));

    const handleAddCourse = () => {
        addCourse(parseInt(id));
        enqueueSnackbar('Curs adaugat cu succes!', { variant: 'success' });
    };

    const handleRemoveCourse = () => {
        removeCourse(parseInt(id));
        enqueueSnackbar('Curs sters din lista ta!', { variant: 'info' });
    };

    return (
        <Container maxWidth="md">
            <Card sx={{ mt: 5 }}>
                <CardMedia
                    component="img"
                    image={course.image}
                    alt={course.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {course.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                        Categoria: {course.category}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {course.detailedDescription}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Durata: {course.duration}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                    {!isCourseAdded ? (
                        <Button onClick={handleAddCourse} variant="contained" color="primary">Adaugă la cursurile mele</Button>
                    ) : (
                        <Button onClick={handleRemoveCourse} variant="outlined" color="secondary">Șterge din cursurile mele</Button>
                    )}
                </Box>
            </Card>
        </Container>
    );
};

export default CourseDetails;
