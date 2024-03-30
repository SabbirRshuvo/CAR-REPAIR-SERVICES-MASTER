import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Home/Sheared/Loading/Loading";

function Registar() {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, loading] =
        useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (loading) {
        return <Loading />;
    }
    const navigateLogin = () => {
        navigate("/login");
    };
    const handleRegistar = (event) => {
        event.preventDefault();
        navigate("/home");

        if ((agree, email !== "" && password !== "")) {
            createUserWithEmailAndPassword(email, password);
        } else {
            alert("Please fill all the fields");
        }
    };
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl text-blue-400 m-2">Please Registar</h2>
            <form className="border-2 rounded-lg p-2" onSubmit={handleRegistar}>
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
                    disabled={!agree}
                    className="cursor-pointer border-2 rounded-lg text-center p-2 m-2  w-1/4 bg-green-400"
                    type="submit"
                    value="Register"
                />
            </form>
            <input
                onClick={() => setAgree(!agree)}
                type="checkbox"
                name="terms"
                className="valid:border-green-500 m-2"
            />
            <label
                className={agree ? "text-green-500 " : " text-red-500"}
                htmlFor="terms"
            >
                Accept Terms and Conditions
            </label>
            <p className="text-blue-600">
                Already have an account?{" "}
                <span
                    onClick={navigateLogin}
                    className="cursor-pointer text-green-400 font-bold"
                >
                    Login
                </span>
            </p>
            <SocialLogin />
        </div>
    );
}

export default Registar;
