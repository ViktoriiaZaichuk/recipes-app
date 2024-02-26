import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';

import Layout from "../../components/layout/Layout";
import TextInput from "../../components/form/TextInput";
import { login } from "../../services/api/auth";
import PrimaryBtn from "../../components/form/PrimaryBtn";

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        const validationErrors = {};

        if (!userData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (!userData.password.trim()) {
            validationErrors.password = "Password is required";
        }

        // Clear previous errors if there are any
        setErrors({});

        try {
          await login(userData);
          navigate('/');
        } catch (error) {
          console.error('Error during log in: ', error);
        }
    };

    return (
        <Layout>
            <main className="flex flex-col content-center flex-wrap m-5">
                <h1 className="font-mono uppercase text-2xl font-bold p-3 pb-5 text-center">Login form</h1>

                <form 
                    className="bg-white flex flex-col shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    <TextInput 
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="tony.stark@ts.io"
                        error={errors.email} 
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <TextInput 
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="********" 
                        error={errors.password}
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <PrimaryBtn 
                        text="Log in"
                        type="submit"
                    />
                </form>

                <div>
                    <p className="text-center text-xs">
                        Don't have an account? 
                        <Link to="/register" className="text-coral"> Register here</Link>
                    </p>
                </div>
            </main>
        </Layout>
    );
};

export default Login;