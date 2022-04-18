import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../../Shared/Loading/Loading';
import registerImg from '../../../images/work-3.jpg';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errorElement;

    const navigate = useNavigate();


    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }
    if (loading || updating) {
        return <Loading />
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/login');
    };
    console.log(user);

    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src={registerImg} alt="img" />
                    </div>
                    <div className="flex items-center justify-center p-4 sm:p-12 md:w-1/2">
                        <div className="w-full">

                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Sign up
                            </h1>
                            <form onSubmit={handleRegister}>
                                <div className="mt-4">
                                    <label className="block text-sm">
                                        Name
                                    </label>
                                    <input type="text"
                                        ref={nameRef}
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Your name" required />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm">
                                        Email
                                    </label>
                                    <input type="email"
                                        ref={emailRef}
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Email Address" required />
                                </div>

                                <div>
                                    <label className="block mt-4 text-sm">
                                        Confirm Password
                                    </label>
                                    <input
                                        ref={passwordRef}
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Password" type="password" required />
                                </div>
                                <div className='mt-3'>
                                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" className='ml-2' />
                                    <label className={`ps-2 ${agree ? "" : "text-red-600"}`} name="terms">Accept terms and condition</label>
                                </div>

                                <input
                                    disabled={!agree}
                                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                    type="submit" value="Register" />
                            </form>

                            <div className="mt-4 text-center">
                                <p className="text-sm">Don't have an account yet? <Link to="/login"
                                    className="text-blue-600 hover:underline">Login.</Link></p>
                            </div>

                            {errorElement}
                            <GoogleLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;