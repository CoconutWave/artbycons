import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const commissions = [
    {
      title: "Sketch",
      img: "/arts/michiru_rai.png",
      desc: "Base sketch",
      price: 17,
    },
    {
      title: "Lineart",
      img: "/arts/konoha_commissionsample.png",
      desc: "Lineart with base color",
      price: 35,
    },
    {
      title: "Flat Color",
      img: "/arts/marie_commissionsample.png",
      desc: "Flat-colored artwork",
      price: 55,
    },
    {
      title: "Rendered",
      img: "https://storage.ko-fi.com/cdn/useruploads/display/b406986a-6bf0-4228-afb3-8aa394626feb_reikowithbag.png",
      desc: "Fully-rendered artwork",
      price: 70,
    },
  ];
  const formatPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="w-full px-20 py-5">
      <div className="container text-center justify-center my-3">
        <h1 className="text-3xl">Commission</h1>
        <p>Please contact me for more details.</p>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1">
        {commissions.map((item, index) => (
          <div
            className="overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ width: "300px", height: "500px" }}
            key={index}
          >
            {/* <Link href="#" className="">
              <Image src={item.img} height={300} width={300} alt="comm"></Image>
            </Link> */}
            <div className="relative w-full h-96 bg-slate-500">
              <Image src={item.img} fill objectFit="cover" alt="comm"></Image>
            </div>
            <div className="px-5 py-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <div
                className="flex items-center justify-between"
                style={{
                  background: "-webkit-linear-gradient(#f89,#b7d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {formatPrice.format(item.price)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container text-center m-5">
        <a href="/commission/terms">
          <button className="btn p-3 rounded-lg bg-gradient-to-r from-indigo-300 to-red-300 text-black hover:ring-2 hover:ring-blue-200">
            Terms and Conditions
          </button>
        </a>
      </div>
    </div>
  );
};

export default Page;
