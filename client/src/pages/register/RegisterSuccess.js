import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const RegisterSuccess = () => {
  return (
    <Layout>
        <main className='flex flex-col content-center flex-wrap'>
            <h1 className='font-display tracking-wider text-5xl font-bold text-center mb-4'>Registration Successful!</h1>
            <p className='text-xl text-center'>Welcome to our app. You can now <Link to="/login" className="text-coral font-bold">login</Link> and start exploring.</p>
        </main>
    </Layout>
  );
};

export default RegisterSuccess;
