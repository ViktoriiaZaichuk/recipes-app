import request from './config';

export const register = async (userData) => {
    const options = {
        method: 'post',
        url: '/register',
        data: userData,
    };
    try {
        const response = await request(options);

        if (response.data && response.data.success) {
            console.log("Registration successful.");
        } else {
            console.log("Registration failed: ", response.response.data.message);
        }
    } catch (error) {
        console.error("Error during registration:", error);
    }
};

export const login = async ( userData ) => {
    const options = {
        method: 'post',
        url: '/login',
        data: userData,
    };
    try {
        const response = await request(options);

        if (response.data && response.data.success) {
            console.log("Login successful");
        } else {
            console.log("Login failed: ", response.response.data.message);
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};