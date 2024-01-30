import React, { useState } from 'react';
import Layout from "../../components/layout/Layout";
import TextInput from "../../components/form/TextInput";
import { register } from "../../services/api/auth";
import SubmitBtn from "../../components/form/SubmitBtn";

const Register = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        avatar: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                            value={userData.username}
                            onChange={handleChange}
                        />
                        <TextInput 
                            name="avatar"
                            label="Avatar"
                            type="text"
                            placeholder="" 
                            value={userData.avatar}
                            onChange={handleChange}
                        />
                        <TextInput 
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="tony.stark@ts.io" 
                            value={userData.email}
                            onChange={handleChange}
                        />
                        <TextInput 
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="" 
                            value={userData.password}
                            onChange={handleChange}
                        />
                        <SubmitBtn 
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
