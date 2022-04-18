import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    if (error) {
        errorElement = <p>{error.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    };

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900"
                            alt="img" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">

                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Login
                            </h1>

                            <form onSubmit={handleSubmit}>
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
                                        Password
                                    </label>
                                    <input
                                        ref={passwordRef}
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Password" type="password" required />
                                </div>

                                <input
                                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                    type="submit" value="Login" />

                            </form>
                            <div className="mt-4 text-center">
                                <p className="text-sm">If you first on this website<Link to="/register"
                                    className="text-blue-600 hover:underline">Create an account.</Link></p>
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

export default Login;