import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" h-full">
      <div className="w-full h-screen">
        <div className="h1 text-center flex flex-col justify-center items-center   h-full container mx-auto">
          <Image
            src="/images/404-bg.png"
            alt="not found"
            width={200}
            height={200}
          />
          <span>해당 페이지를 찾을 수 없습니다.</span>
        </div>
      </div>
    </div>
  );
};

export default page;
