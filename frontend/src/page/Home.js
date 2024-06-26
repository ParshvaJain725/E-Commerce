import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };



  return (
    <div className="p-2 md:p-4">
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="text-3xl md:text-7xl font-bold py-3">
            The Fastest Delivery at{" "}
            <span className="text-red-600 text-">Vegan Store</span>
          </h2>
          <p className="py-3 text-base text-4xl ">
          Welcome To Vegan Store, Where Every Meal Is A Culinary Masterpiece Delivered Straight To Your Door. Explore A World Of Flavors With Our Diverse Menu, Curated From The Finest Ingredients And Prepared By Top Chefs. Order Now And Indulge In The Delight Of Exceptional Food, Made Just For You.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md text-3xl">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>
      
      <AllProduct heading={"Your Product"}/>
      <section class="footer">

<div class="container">
    <div class="footer-content">
        <h3>Contact Us</h3>
        <ul>
            <li>Email: yuvijain701@gmail.com</li>
            <li>Phone: +91 6355883892</li>
            <li>Address: K-107,Abode Valley,Potheri,near SRM University Chennai-603203</li>
        </ul>
    </div>
    <div class="footer-content">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">Our's special</a></li>
            <li><a href="/home">Popular foods</a></li>
            <li><a href="/contact">Customer reviews</a></li>
        </ul>
    </div>
    <div class="footer-content">
        <h3>Follow Me</h3>
        <ul class="social-icons">
            <li><a href="https://www.instagram.com/parshvaaa.jain/?igsh=MWJ5MHR6M25oamJicw%3D%3D&utm_source=qr"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/parshva-jain-507771239/"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://wa.me/+916355883892"><i class="fab fa-whatsapp"></i></a></li>
            <li><a href="https://github.com/ParshvaJain725"><i class="fab fa-github"></i></a></li>
         

        </ul>
    </div>
</div>


<h1 class="credit">
    created by <span><a href="https://github.com/ParshvaJain725">Parshva Jain</a></span> | all rights are reserved
</h1>
</section>

<a href="home" class="fas fa-angle-up" id="scroll-top"></a>
    </div>
  );
};

export default Home;
