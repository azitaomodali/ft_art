//import { data } from 'autoprefixer'
import React from "react";
import img1 from "../images/cafe28.png";
import img2 from "../images/cafe29.png";
import img3 from "../images/cafe31.png";
import img4 from "../images/cafe33.png";
import img5 from "../images/cafe16.png";
const CardList = () => {
  const cartList = [
    {
      id: 1,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است",
      img: img1,
      date: "today",
    },
    {
      id: 2,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است",
      img: img2,
      date: "4 feb",
    },
    {
      id: 3,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است",
      img: img3,
      date: "2 feb",
    },
    {
      id: 4,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است",
      img: img4,
      date: "28jun",
    },
    {
      id: 5,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است",
      img: img5,
      date: "28jun",
    },
  ];
  return (
    <div>
      {cartList.map((item) => (
        <div
          className="grid grid-cols-1 rounded mr-3 "
          key={item.id}
        >
          <div className=" mt-4 p-3 flex  hover:shadow-company rounded-lg ">
            <img src={item.img} className="w-20 h-14 ml-3 rounded-lg basis1/4" alt="" />
            <div className=" hover:bg-white-500 mr-2 basis-3/4">
              <span >{item.description}</span>
              <span className="text-xs text-gray-400 block">
                {item.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
