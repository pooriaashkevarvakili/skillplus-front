import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import { Card } from "flowbite-react";

interface users {
  img?: string;
  description: string;
  title: string;
}

export default function WebinarLearn() {
  const [users, setUsers] = useState<users | null>(null);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    instance
      .get("/user/webinarLearn")
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
      className="flex flex-col items-center justify-center gap-8 p-4 sm:flex-row sm:gap-[30px] sm:p-0"
    >
      <img
        className="w-full max-w-[472px] sm:w-[500px] md:w-[700px] lg:w-[800px]"
        src={users?.img}
        alt="user"
      />

      <div className="w-full max-w-[800px] p-2 sm:w-auto">
        <h4 className="text-2xl font-bold sm:text-[32px] yekan-bold">
          {users?.title}
        </h4>
        <div>
          <p className="text-justify text-sm text-[#5B5B5B] sm:w-[30rem] md:w-[43rem] lg:w-[50rem]">
            {users?.description}
          </p>
        </div>
      </div>
    </div>
  );
}