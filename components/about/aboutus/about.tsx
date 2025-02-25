import Image from "next/image";
import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import about from "@/public/Images/about.png";
import { Card } from "flowbite-react";

interface User {
  title?: string;
  description?: string;
  img?: string;
}

interface ApiResponse {
  data: User[];
}

export default function AboutUs() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    instance
      .get("/about/about")
      .then((response) => {
        setUsers(response.data.data || []);
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
      className="bg-[#EE2556E5] mt-10 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              className="w-[300px] h-auto sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[400px]"
              src={about}
              alt="about"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h1 className="text-white yekan-bold text-2xl sm:text-3xl md:text-4xl lg:text-[32px]">
              {users && users[0]?.title}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-base text-justify">
              {users && users[0]?.description}
            </p>
            <button
              style={{ borderRadius: "40px" }}
              className="bg-[#EE2556] yekan-bold text-sm sm:text-base w-full sm:w-[300px] h-[54px] text-center text-white"
            >
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}