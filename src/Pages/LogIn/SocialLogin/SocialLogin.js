import React from "react";
import google from "../../../images/Social/google.png";
function SocialLogin() {
    return (
        <div>
            <div className="flex items-center">
                <div className="h-px bg-red-200 w-2/4"></div>
                <p className="px-2 font-semibold">Or</p>
                <div className="h-px bg-red-200 w-2/4"></div>
            </div>
            <div className="">
                <button className="border-2 rounded-lg p-2 bg-orange-300 ">
                    <img style={{ width: "30px" }} src={google} alt=""></img>
                    Google Sign In
                </button>
            </div>
        </div>
    );
}

export default SocialLogin;
