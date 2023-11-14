import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
const AdvertPage = () => {
  return (
    <div className="lg:flex hidden w-2/5 h-3/4 rounded-[30px]  bg-cover   bg-[url('https://www.dersevim.net/wp-content/uploads/2023/08/en-iyi-universite-hazirlik-dershanesi-jpg.webp')] ">
      <div className="bg-black/[55%] gap-y-3  rounded-[30px] w-full h-full flex flex-col justify-end pb-12 px-12">
        <span className="text-white text-4xl font-extrabold">
          Mavi Bir Dershanem İle Eğitimde Yeni Bir Çağ Başlıyor!
        </span>
        <span className="text-white text-md">
          Liseye hazırlıktan , mesleki eğitimlere kadar tüm eğitimler ve daha
          fazlası Mavi Platform'da!
        </span>
        <Button
          className=" w-[230px] flex justify-between"
          variant="yellow"
          type="submit"
        >
          Şimdi Keşfet <ChevronRight size={32} />
        </Button>
      </div>
    </div>
  );
};

export default AdvertPage;
