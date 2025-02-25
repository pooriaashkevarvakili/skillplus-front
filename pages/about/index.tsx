import FooterSkillPlus from "@/components/Footer/footer";
import Header from "@/components/Headers/Headers";
import AboutUs from "@/components/about/aboutus/about"
import Update from '@/components/about/update/Update'
import UserFriendly from "@/components/about/userFriendly/UserFriendly";
import Upgrade from "@/components/about/upgrade/upgrade";
import Teamwork from "@/components/about/teamwork/teamwork"
export default function about(){
    return(
      <>
        <Header />
        <AboutUs/>
        <div className="flex items-center mt-3 justify-center text-sm sm:text-base md:text-2xl lg:text-4xl xl:text-5xl yekan-bold">
  یک کلیک تا کسب و کار آنلاین
</div>
<UserFriendly/>
<Update/>
<Upgrade/>
<Teamwork/>
         <FooterSkillPlus />
     
      </>
    )
}