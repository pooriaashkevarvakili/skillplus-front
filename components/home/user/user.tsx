import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import Image from "next/image";
import elan from "@/public/Images/elan.png";
import { AxiosResponse } from "axios";

interface UserData {
  title?: string;
  description?: string;
}

interface ApiResponse {
  data: UserData;
}

export default function User() {
  const [users, setUsers] = useState<UserData | null>(null);

  useEffect(() => {
    instance
      .get<ApiResponse>("/user/learnonline")
      .then((response: AxiosResponse<ApiResponse>) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("خطا در دریافت داده‌ها:", error);
      });
  }, []);

  return (
    <div
      dir="rtl"
      className="flex justify-center gap-[15%] mt-[80px]  laptopmini:block xlg:block laptop:block lg:mr-20 md:mr-10 sm:mr-20 "
    >
      <Image
        className=" w-[120px] h-[40vh] sm:w-[500px] md:w-[700px] lg:w-[800px] object-contain "
        src={elan}
        alt="user"
      />
      <div className=" space-y-3 mt-20">
        <h4 className="text-[32px] yekan-bold ">{users?.title}</h4>

        <p className="text-justify ml-10 text-sm text-[#5B5B5B] sm:w-[30rem] md:w-[43rem] xl:w-[40rem] laptop:w-[40rem] lg:w-[50rem] lg:w-[50rem] laptopmini:w-[40rem] xlg:w-[10rem]">
          {users?.description}
        </p>

        <button
          style={{ borderRadius: "40px" }}
          className="bg-[#EE2556] relative xl:right-[50px] yekan-bold text-sm w-[280px] h-[54px] text-center text-white"
        >
          اطلاعات خود را جهت تماس با مشاوره ثبت کنید
        </button>
      </div>
    </div>
  );
}
