// app/blog/[slug]/page.tsx
import { useState, useEffect } from 'react';
import instance from "@/axios/axios";
import { Card } from "flowbite-react";
import Image from 'next/image'
import Sony from '@/public/Images/sony.png'
import Header from '@/components/Headers/Headers';
import FooterSkillPlus from '@/components/Footer/footer';

interface BlogPost {

    description: string;
    content: string; // محتوای کامل پست
    titleOne: string;
    title: string;
    img:string

}

export default function BlogPostPage() {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await instance.get("/blog/sony");
                setPost(response.data.data);
            } catch (error) {
                console.error('خطا در دریافت پست:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, []);


    if (!post) return (
        <>
            <Card className="mx-auto max-w-3xl my-8">
                <div className="p-6 md:p-8">

                    <h1 className="text-2xl font-bold yekan-bold mb-4 sm:text-3xl lg:text-4xl">

                    </h1>
                    <div className="content flex items-center justify-center prose rtl max-w-none">
                        پیام با موفقیت انجام شد
                    </div>
                </div>
            </Card>
        </>
    );

    return (
        <>


            <Header />
            <div className="p-6 text-center md:p-8 lg:p-12">
                {post && post[0].title}
                <br />
                {post && post[0].titleOne}
            </div>
            <div className='bg-[#EE2556E5] w-full max-w-[1053px] h-[530px] md:h-[60vh] flex items-center justify-center mx-auto'>
                <Image
                    src={Sony}
                    alt="sony"
                    className='w-full max-w-[510px] h-auto object-contain'
                    priority
                />
            </div>
            {/* بخش تصویر با طراحی ریسپانسیو */}


            {/* محتوای اصلی */}
            <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12">
                <div dir='rtl'>
                    <p className="text-lg text-justify leading-relaxed mb-6 rtl">
                        {post && post[1].content}
                    </p>
                </div>

                <img
                    src={post && post[0].img}
                    alt="sony"
                    className='w-full h-auto'
                />

                <div dir='rtl' className="mt-6 text-justify text-lg leading-relaxed rtl">
                    {post && post[1].description}
                </div>
            </div>
            <FooterSkillPlus />
        </>
    );
}