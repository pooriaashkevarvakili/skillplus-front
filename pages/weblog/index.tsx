import FooterSkillPlus from "@/components/Footer/footer";
import Header from "@/components/Headers/Headers";
import Image from "next/image";
import Blog from '@/public/Images/blog.png'
import News from "@/components/weblog/news";
export default function weblog(){
    return(
        <>
       <Header />
       <div className="bg-[#EE2556E5] flex items-center justify-center w-full max-w-[1053px] h-auto aspect-[1053/530] mx-auto">
      <div className="w-full max-w-[711px] h-auto aspect-[711/474]">
        <Image
          className="w-full h-full object-cover"
          src={Blog}
          alt="blog"
          priority
        />
      </div>
    </div>
    <div className="flex items-center justify-center  text-sm sm:text-base md:text-2xl lg:text-4xl xl:text-5xl mt-3 yekan-bold">
    آخرین اخبار حوزه  تکنولوژی و برنامه نویسی
    </div>
    <div className="flex items-center justify-center  text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-3xl mt-3">
    مروری براخبار هفته گذشته
    </div>
    <News/>
         <FooterSkillPlus /> 
        </>
    )
}