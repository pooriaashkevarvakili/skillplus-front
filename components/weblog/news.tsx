import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import { Card } from "flowbite-react";
import Link from "next/link";

interface User {
  img: string;
  description: string;
  slug: string; // اضافه کردن slug

}

export default function News() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    instance
      .get("/blog/news")
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 yekan-bold">
        همه اخبار
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {users.slice(0, 6).map((user, index) => (
            <Link key={index}  href={`/weblog/${user.slug}`}>
          <Card
            key={index}
            className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg"
          >
            <div className="flex flex-col items-center justify-center p-4">
              <div className="mb-4">
                <img
                  src={user.img}
                  alt={user.description}
                  className="   object-contain"
                />
              </div>
              <h3 className="text-center text-lg font-medium text-gray-700">
                {user.description}
              </h3>
            </div>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}