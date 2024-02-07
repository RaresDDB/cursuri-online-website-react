export const registerUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (!userExists) {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    }
    return false;
};

export const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return user;
    }
    return null;
};
