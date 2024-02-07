import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userCourses, setUserCourses] = useState([]);

    const login = (email) => {
        setIsAuthenticated(true);
        setUserEmail(email);
        const savedCourses = JSON.parse(localStorage.getItem(email)) || [];
        setUserCourses(savedCourses);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserEmail('');
    };

    const addCourse = (courseId) => {
        if (!userCourses.includes(courseId)) {
            const updatedCourses = [...userCourses, courseId];
            setUserCourses(updatedCourses);
            localStorage.setItem(userEmail, JSON.stringify(updatedCourses));
        }
    };

    const removeCourse = (courseId) => {
        const updatedCourses = userCourses.filter(id => id !== courseId);
        setUserCourses(updatedCourses);
        localStorage.setItem(userEmail, JSON.stringify(updatedCourses));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userEmail, userCourses, login, logout, addCourse, removeCourse }}>
            {children}
        </AuthContext.Provider>
    );
};
