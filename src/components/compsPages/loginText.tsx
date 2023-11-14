import Link from "next/link";
import React from "react";

const LoginText = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-white text-xl font-medium">
        İLK 1 AY ÜYELİK ÜCRETSİZ!
      </span>
      <span className="text-white font-extrabold text-4xl">
        Giriş yap<span className="text-[#e8b54a]">.</span>
      </span>
      <span className="text-[#5e6473]">
        Henüz üye olmadın mı?
        <Link className="text-[#e8b54a] pl-3" href={"/register"}>
          Üyelik Oluştur
        </Link>
      </span>
    </div>
  );
};

export default LoginText;
