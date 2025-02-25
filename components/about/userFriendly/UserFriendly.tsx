import { Card, Select } from "flowbite-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import instance from "@/axios/axios";
import UserfriendlyImge from "@/public/Images/userFriendly.png";

interface User {
  title?: string;
  description?: string;
  img?: string;
}

interface ApiResponse {
  data: User[];
}

export default function UserFriendly() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    instance
      .get("/about/userFriendly")
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
      className="xl:flex laptop:flex xlg:flex block justify-between mt-10 xl:p-20 laptop:px-20 xlg:px-20 px-2"
    >
      <div className="p-2 space-y-3">
        <div className="text-[32px] yekan-bold">{users && users[0]?.title}</div>
        <div>
          <p className="text-justify text-sm text-[#5B5B5B] sm:w-[30rem] md:w-[43rem] xl:w-[36rem] laptop:w-[40rem] lg:w-[50rem] lgg:w-[50rem] laptopmini:w-[40rem] xlg:w-[10rem]">
            {users && users[0]?.description}
          </p>
        </div>
        <button
          style={{ borderRadius: "40px" }}
          className="bg-[#EE2556] yekan-bold text-sm w-[300px] h-[54px] text-center text-white"
        >
          اطلاعات بیشتر
        </button>
      </div>
      <div>
        <Image
          className="xl:w-[400px] laptop:w-[400px] xlg:w-[400px] w-[300px] xl:h-[371px]"
          src={UserfriendlyImge}
          alt="user"
        />
      </div>
    </div>
  );
}