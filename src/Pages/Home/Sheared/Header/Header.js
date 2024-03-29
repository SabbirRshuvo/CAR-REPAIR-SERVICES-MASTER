import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase";
import { signOut } from "firebase/auth";
function Header() {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <nav className="bg-gray-800 sticky top-0 ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="flex flex-shrink-0 items-center"></div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="home#services"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    Services
                                </a>
                                <a
                                    href="home#experts"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    Experts
                                </a>
                                <a
                                    href="/about"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    About
                                </a>
                                {user ? (
                                    <button
                                        onClick={handleSignOut}
                                        href="/login"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                        Sign out
                                    </button>
                                ) : (
                                    <a
                                        href="/login"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                        LogIn
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a
                        href="/"
                        className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                        aria-current="page"
                    >
                        Dashboard
                    </a>
                    <a
                        href="home#services"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Services
                    </a>
                    <a
                        href="home#experts"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Experts
                    </a>
                    <a
                        href="/about"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        About
                    </a>
                    <a
                        href="/login"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
