"use client";

import AuthSideBar from "@/components/Auth/AuthSideBar";
import { signInFields } from "../../constants/authFields";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { baseUrl } from "@/constants/baseUrl";

type FormValues = {
  email: string;
  password: string;
};

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [focuedValues, setFocusedValues] = useState({
    email: false,
    password: false,
  });

  const [hidePassword, setHidePassword] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [isSigningIn, setIsSigning] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigning(true);
    try {
      const res = await axios.post(`${baseUrl}/api/v1/login`, formValues);
      setErrorMessage("");
      localStorage.setItem("token", res.data?.data?.api_token);
      router.push("/property-listings");
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message
          ? error.response.data.message
          : error.message
      );
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <div className="w-full flex flex-row-reverse bg-white h-[100vh]">
      <AuthSideBar
        title="WELCOME BACK"
        description="Sign in to explore property listings, manage your account, and stay
        updated with the latest valuations"
      />
      <div className="z-10 flex flex-col items-center justify-center md:mt-4 no-scrollbar w-full md:w-[60%] overflow-scroll pb-4 animated fadeInUp">
        <h2 className="text-center text-primary-500 md:text-black font-black text-3xl mt-10">
          SIGN IN
        </h2>
        {errorMessage && (
          <div className="w-[85%]  md:w-[50%] mt-4 rounded-lg p-2 bg-red-600 text-sm text-white font-medium">
            <p>{errorMessage}</p>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="w-full p-8 md:p-0 md:w-[50%] mt-4"
        >
          {signInFields?.map((item) => (
            <div className="mt-4 w-full" key={item.id}>
              <label className="block text-sm font-bold text-gray-700">
                {item.label}
              </label>
              <div
                className={`flex flex-row justify-between rounded-md w-full shadow-md ${
                  focuedValues[item.variable as keyof FormValues] &&
                  "shadow-primary-500"
                } bg-gray-100 h-11 hover:shadow-primary-500`}
              >
                <input
                  type={
                    item.placeHolder !== "password"
                      ? item.variable
                      : hidePassword
                      ? item.placeHolder
                      : "text"
                  }
                  formNoValidate
                  id={item.id}
                  value={formValues[item.variable as keyof FormValues]}
                  onFocus={() =>
                    setFocusedValues({ ...focuedValues, [item.variable]: true })
                  }
                  onBlur={() =>
                    setFocusedValues({
                      ...focuedValues,
                      [item.variable]: false,
                    })
                  }
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [item.variable]: e.target.value,
                    })
                  }
                  className="w-[85%] px-4 bg-transparent focus:outline-none focus:shadow-primary-500 text-gray-600"
                  placeholder={item.placeHolder}
                  required
                />
                {item.placeHolder === "password" && (
                  <div
                    className="h-full w-[15%] flex items-center justify-center cursor-pointer"
                    onClick={() => setHidePassword(!hidePassword)}
                  >
                    {hidePassword ? (
                      <FaEye className="text-black" size={20} />
                    ) : (
                      <FaEyeSlash className="text-black" size={20} />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          <button
            disabled={isSigningIn}
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-primary-500 rounded-md hover:bg-primary-500 focus:outline-none shadow-md focus:shadow-primary-500 o focus:ring-primary-500 focus:ring-offset-2 mt-8  flex items-center justify-center"
          >
            {isSigningIn ? (
              <div className="w-8 h-8 border-4 border-gray-200 border-t-primary-500 rounded-full animate-spin" />
            ) : (
              <p>Sign In</p>
            )}
          </button>
          <p className="mt-4 md:mt-2 text-right text-gray-600 text-base font-semibold md:text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
