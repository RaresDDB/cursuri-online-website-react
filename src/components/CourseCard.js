import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSnackbar } from 'notistack';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
    const { userCourses, addCourse, removeCourse } = useAuth();
    const { enqueueSnackbar } = useSnackbar();
    const isCourseAdded = userCourses.includes(course.id);

    const handleAddCourse = () => {
        addCourse(course.id);
        enqueueSnackbar('Curs adaugat cu succes!', { variant: 'success' });
    };

    const handleRemoveCourse = () => {
        removeCourse(course.id);
        enqueueSnackbar('Curs sters din lista ta!', { variant: 'info' });
    };

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Categoria: {course.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Durata: {course.duration}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate(`/courses/${course.id}`)}>Mai multe detalii</Button>
                {!isCourseAdded ? (
                    <Button size="small" onClick={handleAddCourse}>Adauga curs</Button>
                ) : (
                    <Button size="small" onClick={handleRemoveCourse} color="error">Sterge curs</Button>
                )}
            </CardActions>
        </Card>
    );
};

export default CourseCard;
