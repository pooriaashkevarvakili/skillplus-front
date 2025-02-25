import { useState, useEffect } from "react";
import instance from "@/axios/axios"; // استفاده از instance تنظیم شده
import axios from "axios";
import { Card } from "flowbite-react";

interface users {
    img: string;
    title: string;
    description: string;
}

export default function Call() {
    const [users, setUsers] = useState<users | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
        // استفاده از instance به جای axios مستقیم
        instance.get('/user/call')
            .then(response => {
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
        <div className="flex items-center justify-center mt-12">
            <img 
                src={users && users[0]?.img} 
                alt="call" 
                className="relative w-[80px] h-[80px] right-[-10rem]"
            />
            <div className="flex flex-col">
                <div className="relative space-y-3">
                    <div className="yekan-bold text-2xl">{users && users[0]?.title}</div>
                    <div dir="rtl" className="text-center relative right-[1rem] text-[#0b8ae1]">
                        {users && users[0]?.description}
                    </div>
                    <div>
                        <button 
                            style={{borderRadius:"40px"}} 
                            className="w-[139px] h-[60px] relative -right-[5rem] text-lg yekan-bold text-white bg-[#0b8ae1]"
                        >
                            تماس بگیرید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}