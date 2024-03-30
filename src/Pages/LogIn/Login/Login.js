import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

function Login() {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, error] =
        useSignInWithEmailAndPassword(auth);
    let errorElement;
    if (error) {
        errorElement = <p className="text-red-300">Error: {error.message}</p>;
    }
    if (user) {
        navigate("/");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };
    const navigateRegister = (event) => {
        navigate("/register");
    };
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert("Sent email");
    };
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl text-blue-300 m-2">Login Page</h2>
            <form
                className="border-2 rounded-lg container mx-auto m-2 p-2"
                onSubmit={handleSubmit}
            >
                <input
                    ref={emailRef}
                    className="border-2 rounded-lg text-center p-2 m-2 w-1/4"
                    type="email"
                    placeholder="enter your mail here"
                />
                <br />
                <input
                    ref={passwordRef}
                    className="border-2 rounded-lg text-center p-2 w-1/4"
                    type="password"
                    placeholder="enter your password here"
                />
                <br />
                <button className="border-2 rounded-lg mt-2 p-2 w-1/5">
                    Submit
                </button>
            </form>
            {errorElement}
            <p className="text-blue-600">
                Create a new account?{" "}
                <span
                    onClick={navigateRegister}
                    className="cursor-pointer font-bold text-green-500"
                >
                    Registar
                </span>
            </p>
            <p className="text-blue-600">
                Fotgot Password?{" "}
                <span
                    onClick={resetPassword}
                    className="cursor-pointer font-bold text-red-400"
                >
                    Reset password
                </span>
            </p>
            <SocialLogin />
        </div>
    );
}

export default Login;
