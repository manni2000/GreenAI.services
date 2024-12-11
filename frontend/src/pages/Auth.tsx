import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SignInForm from "../components/auth/SignInForm";
import SignUpForm from "../components/auth/SignUpForm";
import logo from "../components/img/logo-bg.png";

interface AuthProps {
  setUser: React.Dispatch<React.SetStateAction<{ name: string } | null>>;
}

const Auth: React.FC<AuthProps> = ({ setUser }) => {
  const location = useLocation();
  const [isSignIn, setIsSignIn] = useState(true);

  // Set the form based on the URL path
  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-15 w-30" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignIn ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isSignIn ? (
              <>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Sign In
                </Link>
              </>
            )}
          </p>
        </div>
        <div className="px-8 pb-8">
          {isSignIn ? (
            <SignInForm setUser={setUser} />
          ) : (
            <SignUpForm setUser={setUser} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
