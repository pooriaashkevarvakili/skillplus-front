import { Card } from "flowbite-react";
import { useState, useEffect } from "react";
import instance from "@/axios/axios";

interface User {
  title: string;
  img: string;
  description: string;
}

export default function SoftSkillServices() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    instance
      .get("/user/softskillServices")
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
    <div className="container mx-auto py-12 justify-center">
      <h2 className="text-2xl text-center font-bold yekan-bold mb-8">
        انواع خدمات سایت وب کلیک
      </h2>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center mr-[50px] mt-20">
        {users.slice(0, 2).map((user, index) => (
          <Card key={index} className="w-full max-w-[400px] h-[250px] mx-auto">
            <div className="flex items-center gap-2 rtl">
              <img
                src={user.img}
                alt={user.title}
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-base font-bold yekan-bold">{user.title}</h3>
            </div>
            <p className="text-sm text-[#5B5B5B] text-justify rtl">
              {user.description}
            </p>
            <button className="w-36 py-2 rounded-xl bg-[#EE2556] text-white hover:bg-[#d91e4a] transition-colors duration-200 mx-auto">
              ثبت سفارش
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
