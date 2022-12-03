import React from 'react'
import img1 from "../images/cafe18.png";

const MainList = () => {
  return (
    <>
       
          <div className="  card lg:flex ">
            <div className="w-full basis-2/5  sm:flex-col ">
              <img src={img1} className="w-full h-full p-0 m-0" alt="" />
            </div>

            <div className="flex flex-col mt-4 p-3 basis-3/5">
              <div className="bg-white-500 m-5">
                <span className="font-bold text-xl text-purple-600">
                  بازاریابی
                </span>
              </div>
              <div className="font-bold m-4">
                <h2 className="font-vazir text-xl">قدرت داستان سرایی در تجارت را در آغوش بگیرید</h2>
              </div>
              <div className="bg-white-500 m-4">
                <p>
                  لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی
                  آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                  می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
                  برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش
                  گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                  نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای
                  صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند
                </p>
              </div>

              <div className="flex m-8 ">
                <span className="text-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-xs"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="text-sm mr-3 ">1600 بازدید</span>
                </div>
              </div>
            </div>
          </div>

       

    </>
  )
}

export default MainList