import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    };
    const navigateRegister = (event) => {
        navigate("/register");
    };
    return (
        <div className="border-2 rounded-lg container mx-auto m-2 p-2">
            <h2 className="text-2xl text-blue-300 m-2">Login Page</h2>
            <form onSubmit={handleSubmit}>
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
            <p className="text-blue-600">
                Create a new account?{" "}
                <span
                    onClick={navigateRegister}
                    className="cursor-pointer font-bold text-red-400"
                >
                    Registar
                </span>
            </p>
        </div>
    );
}

export default Login;
