"use client";
import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Head from "next/head";
import AnimationY from "@/components/Animation/AnimationY";
import AnimationLTR from "@/components/Animation/AnimationLTR";
import AnimationRTL from "@/components/Animation/AnimationRTL";

const Login = () => {
  const { googleLogin, resetPassword, setUser, login } = useAuth();
  const [eye, setEye] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();

  // Toggle password visibility
  const handleEye = () => setEye(!eye);

  // Email/Password login
  const handleEmailSignin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const result = await login(email, password);
      setUser(result.user);
      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google login
  const handleGoogleSignin = async () => {
    try {
      const result = await googleLogin();
      setUser(result.user);
      toast.success("Login with Google successful!");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Forgot password
  const handleForgotPassword = async () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10 flex justify-center items-center text-primary">
      <Head>
        <title>Login</title>
      </Head>
      <AnimationY>
        <div className="card gb-gradient w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <AnimationLTR>
              <h1 className="text-2xl font-bold text-center">Login to your account</h1>
            </AnimationLTR>

            <form onSubmit={handleEmailSignin}>
              <fieldset className="fieldset">
                <AnimationRTL>
                  <div>
                    <label className="label">Email</label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input text-[#059669]"
                    />
                  </div>
                </AnimationRTL>

                <AnimationRTL>
                  <div className="relative">
                    <label className="label">Password</label>
                    <button
                      type="button"
                      onClick={handleEye}
                      className="absolute top-[28px] right-[30px] z-10 bg-transparent border-0 cursor-pointer"
                    >
                      {eye ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                    </button>
                    <input
                      ref={passwordRef}
                      type={eye ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input text-[#059669]"
                    />
                  </div>
                </AnimationRTL>

                <div className="flex justify-end mt-1">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="link link-hover text-sm"
                  >
                    Forgot password?
                  </button>
                </div>

                <AnimationLTR>
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-neutral mt-4 w-full"
                  />
                </AnimationLTR>
              </fieldset>
            </form>

            <AnimationLTR>
              <div className="flex flex-col mt-4">
                <button
                  onClick={handleGoogleSignin}
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  <FcGoogle /> Sign in with Google
                </button>
              </div>
            </AnimationLTR>

            <p className="font-medium text-center mt-4">
              Don't have an account?{" "}
              <Link className="text-blue-700 hover:underline" href="/signup">
                Register
              </Link>
            </p>
          </div>
        </div>
      </AnimationY>
    </div>
  );
};

export default Login;
