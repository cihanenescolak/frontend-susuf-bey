import React from "react";
import LogoPage from "./compsPages/logo";
import LoginForm from "./compsPages/loginForm";
import Reklam from "@/app/reklam.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import AdvertPage from "./compsPages/advert";
import LoginText from "./compsPages/loginText";
import CopyRightText from "./compsPages/copyRightText";
const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center gap-x-10 ">
      <div className="lg:w-1/4 w-3/4 lg:h-3/4 h-10/12 flex flex-col justify-between">
        <LogoPage />
        <div className="flex flex-col gap-y-6">
          <LoginText />
          <LoginForm />
        </div>
        <CopyRightText />
      </div>
      <AdvertPage />
    </div>
  );
};

export default LoginPage;
