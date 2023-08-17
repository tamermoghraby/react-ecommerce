import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <>
      <div className="categories-container mt-4 ">
        {/* <p className=" text-pink-500 font-medium text-base ml-14 md:ml-0 lg:text-start md:text-center">
          CATEGORIES
        </p> */}
        <div className="gallery flex flex-wrap gap-8 w-full justify-center items-center mt-1">
          <CategoryCard
            image={
              "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            // price={647}
            description={
              "Portable and versatile devices for work, entertainment on the go."
            }
            name={"TABLETS"}
          />
          <CategoryCard
            image={
              "https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_1280.jpg"
            }
            price={647}
            name={"SMARTPHONES"}
            description={
              "Advanced mobile devices for seamless connectivity and capturing moments."
            }
          />
          <CategoryCard
            image={
              "https://cdn.pixabay.com/photo/2020/02/10/09/18/calendar-4835848_1280.jpg"
            }
            name="WEARABLES"
            price={56}
            description={
              "Connected devices for monitoring health, fitness and more on your wrist."
            }
          />
          <CategoryCard
            image={
              "https://images.pexels.com/photos/7060811/pexels-photo-7060811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            name="TVs"
            price={230}
            description={
              "Immersive televisions for vibrant visuals and captivating entertainment."
            }
          />
          <CategoryCard
            image="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="HEADPHONES"
            price={86}
            description={
              "Superior sound quality and comfort for enjoying music and podcasts."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Category;
