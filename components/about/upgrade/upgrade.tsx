import Image from "next/image";
import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import about from "@/public/Images/upgrade.png";
import { Card } from "flowbite-react";

interface User {
  title?: string;
  description?: string;
  img?: string;
}

interface ApiResponse {
  data: User[];
}

export default function Upgrade() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    instance
      .get("/about/upgrade")
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
      className="mt-10 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 bg-gray-50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h1 className="yekan-bold text-2xl sm:text-3xl md:text-4xl lg:text-[32px] text-gray-900">
              {users && users[0]?.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-base text-justify text-gray-700">
              {users && users[0]?.description}
            </p>
            <button
              style={{ borderRadius: "40px" }}
              className="bg-[#EE2556] yekan-bold text-sm sm:text-base w-full sm:w-[300px] h-[54px] text-center text-white hover:bg-[#D81B4A] transition-colors duration-300"
            >
              اطلاعات بیشتر
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-end"> {/* Adjusted for full width */}
            <div className="w-full h-auto">
              <Image
                className="w-full h-auto object-cover" // Make the image stretch to the end
                src={about}
                alt="about"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}