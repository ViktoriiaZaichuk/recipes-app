import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import TextInput from "../../components/form/TextInput";
import { register } from "../../services/api/auth";
import PrimaryBtn from "../../components/form/PrimaryBtn";

const Register = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        avatar: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

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

        if (!userData.username.trim()) {
            validationErrors.username = "Username is required";
        }

        if (!userData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (!userData.avatar.trim()) {
            validationErrors.avatar = "Avatar is required";
        }

        if (!userData.password.trim()) {
            validationErrors.password = "Password is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Clear previous errors if there are any
        setErrors({});


        try {
          await register(userData);
        } catch (error) {
          console.error('Error during registration: ', error);
        }
    };

    return (
       <Layout>
            <main>
                <h1>Register form</h1>

                <div className="w-full max-w-xs">
                    <form 
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleSubmit}
                    >
                        <TextInput 
                            name="username"
                            label="User name"
                            type="text" 
                            placeholder="Tony Stark"
                            error={errors.username}
                            value={userData.username}
                            onChange={handleChange}
                        />
                        <TextInput 
                            name="avatar"
                            label="Avatar"
                            type="text"
                            placeholder="" 
                            error={errors.avatar}
                            value={userData.avatar}
                            onChange={handleChange}
                        />
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
                            placeholder="" 
                            error={errors.password}
                            value={userData.password}
                            onChange={handleChange}
                        />
                        <PrimaryBtn 
                            text="Register"
                            type="submit"
                        />
                    </form>
                </div>
            </main>
       </Layout>
    );
};

export default Register;
