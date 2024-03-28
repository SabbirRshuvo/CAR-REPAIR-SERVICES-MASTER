import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function Registar() {
    const [createUserWithEmailAndPassword] =
        useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigateLogin = () => {
        navigate("/login");
    };
    const handleRegistar = (event) => {
        event.preventDefault();

        if (email !== "" && password !== "") {
            createUserWithEmailAndPassword(email, password);
        } else {
            alert("Please fill all the fields");
        }
    };
    return (
        <div className="border-2 rounded-lg container mx-auto m-2 p-2">
            <h2 className="text-2xl text-blue-400 m-2">Please Registar</h2>
            <form onSubmit={handleRegistar}>
                <input
                    className="border-2 rounded-lg
                 p-2 w-1/4 text-center"
                    type="text"
                    placeholder="enter your name here"
                />
                <br />
                <input
                    className="border-2 rounded-lg text-center p-2 m-2  w-1/4"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email here"
                />
                <br />
                <input
                    className="border-2 rounded-lg text-center p-2 m-2  w-1/4"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="enter your password here"
                />
                <br />
                <input
                    className="cursor-pointer border-2 rounded-lg text-center p-2 m-2  w-1/4"
                    type="submit"
                    value="Register"
                />
            </form>
            <p className="text-blue-600">
                Already have an account?{" "}
                <span
                    onClick={navigateLogin}
                    className="cursor-pointer text-red-400 font-bold"
                >
                    Login
                </span>
            </p>
        </div>
    );
}

export default Registar;
