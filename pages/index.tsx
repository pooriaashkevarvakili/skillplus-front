import { useEffect, useState } from "react";
import instance from "@/axios/axios";
import tarjomeOne from "@/public/Images/tarjomeOne.png";
import Header from "@/components/Headers/Headers";
import Tarjome from "@/public/Images/tarjome.png";
import Image from "next/image";
import Skills from "@/components/home/skills/skills";
import Call from "@/components/home/call/call";
import { toast } from "react-toastify";
import User from "@/components/home/user/user";
import Mask from "@/public/Images/Mask.png";
import MaskMobile from "@/public/Images/maskMobile.png";
import Packes from "@/components/home/packes/Packes";
import Moshaver from "@/public/Images/Moshaver.png";
import MoshaverMobile from "@/public/Images/moshaverMobile.png";
import ApplicationMaharatNarm from "@/components/home/applicationMaharatNarm/applicationMaharatNarm";
import Softskillsprogramming from "@/components/home/Softskillsprogramming/softskillsprogramming";
import SoftSkillServices from "@/components/home/softSkillServices/softSkillServices";
import WebinarLearn from "@/components/home/webinarLearn/webinarLearn";

import BuyPackayjes from "@/components/home/buyPackyjes/buyPackyjes";
import Trust from "@/components/home/Trust/Trust";
import VideoLearn from "@/components/home/videoLearn/videoLearn";
import Article from "@/components/home/Article/article";
import Question from "@/components/home/question/question";
import Packages from "@/components/home/Packages/packages";
import FooterSkillPlus from "@/components/Footer/footer";
import Store from "@/components/home/store/store";
export default function Home() {
  const [users, setUsers] = useState([]);


  return (
    <div>
      <Header />
      <div className="flex mt-3 items-center justify-center">
        <Image
          className="  xl:block laptop:block laptopmini:block lg:block  hidden xl:w-[1046px] lg:w-[800px] md:w-[800px] laptop:[800px]"
          src={Tarjome}
          alt="tarjome"
        />
        <Image
          className="xl:hidden lg:hidden block "
          src={tarjomeOne}
          alt="tarjomeOne"
        />
      </div>
      <Skills />
      <Call />
      <Store/>
      <Packes />
      <ApplicationMaharatNarm />
      <Softskillsprogramming />
      <User />
      <SoftSkillServices />
      <WebinarLearn />
      {/* <VideoLearn/> */}
      <div className="flex mt-8 items-center justify-center">
        <Image
          className=" xl:block laptop:block laptopmini:block lg:block  hidden xl:w-[1046px] laptop:w-[1046px] w-[800px]"
          src={Moshaver}
          alt="tarjome"
        />
        <Image
          className="xl:hidden lg:hidden block w-[1000px]"
          src={MoshaverMobile}
          alt="tarjomeOne"
        />
      </div>
      <div className="flex mt-10 items-center justify-center">
        <Image
          className="xl:w-[1046px] xl:block laptopmini:block laptopmini:w-[1046px]  laptop:block relative xl:right-0 laptop:right-0 xlg:right-0 lgg:right-0 lg:-right-[50px] laptop:w-[1046px] xlg:block xlg:w-[1046px] lg:block hidden  w-[800px]"
          src={Mask}
          alt="tarjome"
        />
        <Image
          className="xl:hidden laptopmini:hidden  laptop:hidden xlg:hidden lg:w-[1200px] lg:hidden  sm:block smone:block md:block "
          src={MaskMobile}
          alt="tarjomeOne"
        />
      </div>
      <Question />
      <FooterSkillPlus />
    </div>
  );
}
