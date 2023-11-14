import Link from "next/link";
import React from "react";

const RegisterText = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-white lg:text-xl text-md font-medium">
        İLK 1 AY ÜYELİK ÜCRETSİZ!
      </span>
      <span className="text-white font-extrabold lg:text-5xl text-4xl">
        Üyelik Oluştur<span className="text-[#e8b54a]">.</span>
      </span>
      <span className="text-[#5e6473]">
        Hesabın var mı?
        <Link className="text-[#e8b54a] pl-3" href={"/"}>
          Giriş yap
        </Link>
      </span>
    </div>
  );
};

export default RegisterText;
