"use client";
import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
const SignInFrom = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleSignIn = async() =>{
    try {
      // setIsLoading(true)
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         email: email,
         password: password
          
        }),
      });

      const data = await response.json();
      if (data.isAdmin) {
        localStorage.setItem('isAdmin', 'true');
        router.push('/dashboard'); // Redirect to dashboard page
        alert("Login Successful!")
      } else {
        alert('Invalid email or password');
      }
      // setIsLoading(false)
    } catch (error) {
      console.error("Error fetching room types:", error);
      alert(error);
    }
  }
  return (
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you again! Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
            value={email}
              onChange={(e)=>setEmail(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth onClick={handleSignIn}>
            sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already haven't an account?{" "}
            <a href="/auth/sign-up" className="font-medium text-gray-900">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    );
  };
  

export default SignInFrom