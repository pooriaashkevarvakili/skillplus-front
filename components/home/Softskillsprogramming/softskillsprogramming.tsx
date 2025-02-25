import UserImage from "@/public/Images/user.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import Group from "@/public/Images/Group.png";
import axios from "axios";
import { Card } from "flowbite-react";

// تعریف interface برای داده‌های کاربر
interface UserData {
  title: string;
  description: string;
  img: string;
}

// تعریف interface برای ساختار پاسخ API
interface ApiResponse {
  data: UserData[];
}

export default function Podcast() {
  // استفاده از نوع صحیح برای state
  const [users, setUsers] = useState<UserData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // استفاده از generic type برای درخواست axios
    instance
      .get<ApiResponse>("/user/padcast")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((err) => {
        console.error("خطا در دریافت داده‌ها:", err);
        setError("خطا در دریافت اطلاعات کاربران");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <Card className="mx-auto max-w-3xl my-8">
        <div className="p-6 md:p-8">
          <div className="content flex items-center justify-center prose rtl max-w-none">
            در حال بارگذاری...
          </div>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="mx-auto max-w-3xl my-8">
        <div className="p-6 md:p-8">
          <div className="content flex items-center justify-center prose rtl max-w-none text-red-500">
            {error}
          </div>
        </div>
      </Card>
    );
  }
  return (
    <div
      dir="rtl"
      className="flex   items-center justify-center mt-[50px] gap-[20%] "
    >
      <div className="space-y-4 max-w-xl">
        <div className="text-[20px]  font-bold yekan-bold">
          {users?.[0]?.title}
        </div>
        <p className="text-justify text-[18px] text-[#5B5B5B]">
          {users?.[0]?.description}
        </p>
        <button
          style={{ borderRadius: "40px" }}
          className="bg-[#EE2556] yekan-bold text-sm w-full xl:w-[300px] h-[54px] text-center text-white"
        >
          اطلاعات خود را جهت تماس با مشاوره ثبت کنید
        </button>
      </div>
      <div className="w-full xl:w-auto">
        <Image className=" rounded-lg  " src={Group} alt="user" />
      </div>
    </div>
  );
}
