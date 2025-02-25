import Image from "next/image";
import logo from "@/public/Images/LOGO.png";
import Link from "next/link";
import Add from '@/public/Images/add.png'
import logOut from '@/public/Images/logout.png'
export default function HeaderDesktop() {
  
  return (
    <header className="p-4 mr-10 ">
      <div dir="rtl" className="flex   justify-between">
        <section className="flex">
          <Image
            src={logo}
            className="w-20 h-20 object-contain"
            alt="trandis"
          />
          <ul className="flex gap-6 items-center mx-auto justify-center">
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="#">خدمات</Link>
            </li>
            <li>
              <Link href="#">قیمت مشاوره</Link>
            </li>
            <li>
              <Link href="#">نمونه کارها</Link>
            </li>
            <li>
              <Link href="/about">درباره سایت </Link>
            </li>
            <li>
              <Link href="/weblog">وبلاگ</Link>
            </li>
          </ul>
        </section>
        <div>
          <div className="flex gap-8 items-center  mt-2 ">
            <Link className="flex gap-1 items-center" href="#">
              {/* متن شماره‌ها */}
              <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl">
                <h3 className=" text-[#4AAE20] text-[20px]">
                     ۰۹۱۹-۲۸۱-۱۰۳۴
                </h3>
                <h3 className=" text-[#4AAE20] text-[20px]">۰۹۳۷-۶۷۲-۰۶۹۴</h3>
              </div>

              {/* آیکون تلفن */}
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 mb-4"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3083 15.3894C18.3083 15.6902 18.2416 15.9994 18.1 16.3002C17.9583 16.601 17.775 16.8851 17.5333 17.1524C17.125 17.6036 16.675 17.9295 16.1666 18.1384C15.6666 18.3473 15.125 18.4559 14.5416 18.4559C13.6916 18.4559 12.7833 18.2554 11.825 17.846C10.8666 17.4365 9.90829 16.8851 8.95829 16.1915C7.99996 15.4897 7.09163 14.7126 6.22496 13.852C5.36663 12.983 4.59163 12.0722 3.89996 11.1197C3.21663 10.1671 2.66663 9.21458 2.26663 8.27039C1.86663 7.31785 1.66663 6.40708 1.66663 5.53809C1.66663 4.96991 1.76663 4.42679 1.96663 3.92545C2.16663 3.41576 2.48329 2.94784 2.92496 2.53006C3.45829 2.00365 4.04163 1.74463 4.65829 1.74463C4.89163 1.74463 5.12496 1.79476 5.33329 1.89503C5.54996 1.9953 5.74163 2.1457 5.89163 2.36295L7.82496 5.09524C7.97496 5.30413 8.08329 5.49631 8.15829 5.68014C8.23329 5.85561 8.27496 6.03108 8.27496 6.18983C8.27496 6.39037 8.21663 6.5909 8.09996 6.78308C7.99163 6.97526 7.83329 7.1758 7.63329 7.37633L6.99996 8.03643C6.90829 8.12834 6.86663 8.23697 6.86663 8.37066C6.86663 8.4375 6.87496 8.49599 6.89163 8.56284C6.91663 8.62968 6.94163 8.67981 6.95829 8.72995C7.10829 9.00569 7.36663 9.36498 7.73329 9.79947C8.10829 10.234 8.50829 10.6768 8.94163 11.1197C9.39163 11.5625 9.82496 11.9719 10.2666 12.3479C10.7 12.7156 11.0583 12.9663 11.3416 13.1167C11.3833 13.1334 11.4333 13.1584 11.4916 13.1835C11.5583 13.2086 11.625 13.2169 11.7 13.2169C11.8416 13.2169 11.95 13.1668 12.0416 13.0749L12.675 12.4482C12.8833 12.2393 13.0833 12.0806 13.275 11.9803C13.4666 11.8633 13.6583 11.8048 13.8666 11.8048C14.025 11.8048 14.1916 11.8382 14.375 11.9135C14.5583 11.9887 14.75 12.0973 14.9583 12.2393L17.7166 14.2029C17.9333 14.3533 18.0833 14.5288 18.175 14.7377C18.2583 14.9465 18.3083 15.1554 18.3083 15.3894Z"
                  stroke="#4AAE20"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
            </Link>
            <Link className="flex items-center gap-2" href="/signup">
              <Image className="w-8 h-8" src={Add} alt="add"/>
              ثبت نام
            </Link>
            <Link className="flex items-center gap-2" href="/login">
            <Image className="w-8 h-8" src={logOut} alt="logout"/>

              ورود
            </Link>

            <button
              style={{ borderRadius: "24px" }}
              className="bg-[#EE2556] text-white w-[141px] h-[44px]"
            >
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
