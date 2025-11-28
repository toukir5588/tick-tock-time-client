"use client";
import { use, useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "motion/react";
import { useAuth } from "@/context/AuthProvider";
import AnimationY from "@/components/Animation/AnimationY";
import AnimationLTR from "@/components/Animation/AnimationLTR";
import AnimationRTL from "@/components/Animation/AnimationRTL";
import Link from "next/link";
import { Router } from "next/router";
import { toast } from "react-toastify";

const Register = () => {
  const { signup } = useAuth();
  const [eye, setEye] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return toast.error("Your password must be at least 6 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Your password must contain at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Your password must contain at least one lowercase letter."
      );
    }

    signup(email, password)
      .then((result) => {
        // console.log(result.user);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        // create user in the database
        fetch("https://tick-tock-time-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after user save", data);
          });

        toast.success("your account is success");
        Router.push("/");
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  const handleEye = () => {
    // console.log("onclick");
    setEye(!eye);
  };

  return (
    <div className="w-11/12 mx-auto my-10 flex justify-center items-center text-primary">
      <title>Register</title>
      <AnimationY>
        <div className="card gb-gradient w-full max-w-sm shrink-0  shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center">
              Create Your account
            </h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset md:w-80">
                {/* name */}
                <label className="label">Name</label>
                <AnimationLTR>
                  <input
                    type="text"
                    name="name"
                    className="input text-[#059669]"
                    placeholder="Your Name"
                    required
                  />
                </AnimationLTR>
                {/* photoURL */}
                <label className="label">Photo URL</label>

                <AnimationRTL>
                  <input
                    type="text"
                    name="photoURL"
                    className="input text-[#059669]"
                    placeholder="Photo URL"
                    required
                  />
                </AnimationRTL>
                {/* email */}
                <label className="label">Email</label>
                <AnimationLTR>
                  <input
                    type="email"
                    name="email"
                    className="input text-[#059669]"
                    placeholder="Email"
                    required
                  />
                </AnimationLTR>
                {/* password */}
                <div className="relative">
                  <label className="label">Password</label>
                  <button
                    type="button"
                    onClick={handleEye}
                    className="btn bg-transparent outline-0 border-0 absolute top-[18px] right-[0px] z-10"
                  >
                    {eye ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                  </button>
                  <AnimationRTL>
                    <input
                      type={eye ? "text" : "password"}
                      name="password"
                      className="input text-[#059669]"
                      placeholder="Password"
                    />
                  </AnimationRTL>
                </div>
                <div></div>
                <AnimationLTR>
                  <button className="btn btn-neutral w-full mt-4">
                    Register
                  </button>
                </AnimationLTR>
              </fieldset>
            </form>

            <p className=" font-medium text-center">
              You have a Already account pleas{" "}
              <Link className="text-blue-700 hover:underline" href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </AnimationY>
    </div>
  );
};

export default Register;
