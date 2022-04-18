import React from 'react';
import './GoogleLogin.css';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <p className='text-red-600'>Error: {error.message}</p>
    }
    if (loading) {
        return <Loading />
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='bg-white-600 w-100 rounded-md p-2 border-2 shadow'>
                <span className='flex align-center justify-center space-between font-bold'> <FcGoogle className='mt-1' />Google</span>
            </button>
        </div>
    );
};

export default GoogleLogin;