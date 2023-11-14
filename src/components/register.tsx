import React from "react";
import LogoPage from "./compsPages/logo";
import AdvertPage from "./compsPages/advert";
import CopyRightText from "./compsPages/copyRightText";
import RegisterForm from "./compsPages/registerForm";
import RegisterText from "./compsPages/registerText";
const RegisterPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center gap-x-10 ">
      <div className="lg:w-1/4 w-3/4 lg:h-3/4 h-5/6 flex flex-col justify-between">
        <LogoPage />
        <div className="flex flex-col gap-y-6">
          <RegisterText />
          <RegisterForm />
        </div>
        <CopyRightText />
      </div>
      <AdvertPage />
    </div>
  );
};

export default RegisterPage;
