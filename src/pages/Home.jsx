import React from "react";
import img1 from "../images/cafe18.png";
import Search from "../components/ui/Search";
import CardList from "../list/CardList";
import Posts from "../list/Posts";
import Video from "../list/Video";
import MainList from "../list/mainList"

const Home = () => {
  return (
    <>
      <div className="flex">
      <div className="w-full lg:basis-3/4 sm:basis-full">
          <div className=" mb-5">
            <Search />
          </div>

          <MainList/>
          <Posts />
        </div>

        <div className=" lg:block hidden   sm:basis-1/4 ">
          <div className="mr-5">
          <h3 >اخبار</h3>
          </div>
          <CardList />
          <Video />
        </div>
      </div>
    </>
  );
};
export default Home;
