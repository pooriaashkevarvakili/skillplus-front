import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import { Card } from "flowbite-react";

interface User {
  img: string;
  title: string;
}

export default function Skills() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    instance
      .get("/user/application")
      .then((response) => {
        setUsers(response.data.data || []);
        setError(null); // پاک کردن پیام خطا در صورت موفقیت
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 yekan-bold">
        ویژگی های وب کلیک
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {users.slice(0, 7).map((user, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <img src={user.img} alt={user.title} className="w-20 h-20 object-contain" />
            </div>
            <h3 className="text-center text-lg font-medium max-w-[140px]">{user.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}