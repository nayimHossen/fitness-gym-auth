import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImg from '../../../images/work-1.jpg';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (loading || sending) {
        return <Loading />
    }

    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };
    const passwordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("sent email")
        } else {
            toast('place enter your email')
        }

    }

    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src={loginImg} alt="img" />
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
                            <div className="mt-4 text-center">
                                <p className="text-sm">Forget Password ?<button
                                    className="btn btn-Link text-blue-600 hover:underline" onClick={passwordReset}>Reset Password</button></p>
                            </div>
                            <ToastContainer />
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