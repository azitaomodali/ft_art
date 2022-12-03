import React from 'react'
import img1 from "../images/cafe18.png"
import img2 from "../images/cafe19.png"
import img3 from "../images/cafe20.png"
import img4 from "../images/cafe21.png"
const Posts = () => {
    const posts=[
        {
            id:1,
            header:"تجارت",
            title:"10 راه برای ارتقای بازی طراحی رابط کاربری به سطح بعدی",
            desc:" طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. ",
            img:img1

        },
        {
            id:2,
            header:"بازاریابی",
            title:"10 راه برای ارتقای بازی طراحی رابط کاربری به سطح بعدی",
            desc:" طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. ",
            img:img2

        },
        {
            id:3,
            header:"تجارت",
            title:"10 راه برای ارتقای بازی طراحی رابط کاربری به سطح بعدی",
            desc:" طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. ",
            img:img3

        },
        {
            id:4,
            header:"بازاریابی",
            title:"10 راه برای ارتقای بازی طراحی رابط کاربری به سطح بعدی",
            desc:" طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. ",
            img:img4

        },
    ]
  return (
 
        
        <div className="grid lg:grid-cols-2 md::grid-cols-1 my-5 gap-4 ">
            {posts.map((item)=>(

                <div className="w-full  card " key={item.id}>
                <img src={item.img} className="w-full p-0 m-0" alt=""/>
                <div>
                    <h6 className="font-bold text-purple-600 my-3 pr-3 text-xl ">{item.header}</h6>
                    <h3 className="p-3 text-lg">{item.title}</h3>
                    <p className="m-5 text-base text-gray-400">{item.desc}</p>
                </div>
                </div>
            ))}
              
             

        </div>
    
  )
}

export default Posts