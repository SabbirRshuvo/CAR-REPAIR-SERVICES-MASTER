import React from "react";
import google from "../../../images/Social/google.png";
import facebook from "../../../images/Social/facebook.jpg";
import github from "../../../images/Social/github.jpg";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import { useNavigate } from "react-router-dom";
import Loading from "../../Home/Sheared/Loading/Loading";
function SocialLogin() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] =
        useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = (
            <div>
                <p className="text-red-300">
                    Error: {error?.message} Error: {error1?.message}
                </p>
            </div>
        );
    }
    if (loading || loading1) {
        return <Loading />;
    }
    if (user || user1) {
        navigate("/home");
    }
    return (
        <div>
            <div className="flex items-center">
                <div className="h-px bg-red-200 w-2/4"></div>
                <p className="px-2 font-semibold">Or</p>
                <div className="h-px bg-red-200 w-2/4"></div>
            </div>
            {errorElement};
            <div onClick={() => signInWithGoogle()} className="">
                <button className=" bg-sky-300 flex p-2 border-2 rounded-full mx-auto w-2/5 justify-center my-2">
                    <img style={{ width: "30px" }} src={google} alt=""></img>
                    <span className="px-2">Google Sign In</span>
                </button>
                <button className=" bg-sky-300 flex p-2 border-2 rounded-full mx-auto w-2/5 justify-center my-2">
                    <img style={{ width: "30px" }} src={facebook} alt=""></img>
                    <span className="px-2">Facebook Sign in</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className=" bg-sky-300 flex p-2 border-2 rounded-full mx-auto w-2/5 justify-center"
                >
                    <img style={{ width: "30px" }} src={github} alt=""></img>
                    <span className="px-2">GitHub Login</span>
                </button>
            </div>
        </div>
    );
}

export default SocialLogin;
