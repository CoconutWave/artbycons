import Image from "next/image";
import React from "react";

const Page = () => {
  const portfolio = [
    {
      title: "Reiko",
      img: "https://d.furaffinity.net/art/pwnagespartan/1727280365/1727280365.pwnagespartan_reikosit.png",
      desc: "Reiko thinking about something",
    },
    {
      title: "Sera",
      img: "https://d.furaffinity.net/art/pwnagespartan/1683901045/1683890787.pwnagespartan_seradoingchores_update.png",
      desc: "Sera's daily farm chores",
    },
    {
      title: "Zhen",
      img: "https://d.furaffinity.net/art/pwnagespartan/1713181296/1713181296.pwnagespartan_zhenskadoosh.png",
      desc: "The new guardian of the Valley of Peace",
    },
    {
      title: "Konoha",
      img: "https://d.furaffinity.net/art/pwnagespartan/1680188192/1680188192.pwnagespartan_konohaclothes.png",
      desc: "Konoha-chan rocking her sweater",
    },
    {
      title: "Diane",
      img: "https://d.furaffinity.net/art/pwnagespartan/1730821373/1730821373.pwnagespartan_dianefoxington.png",
      desc: "The thief in disguise"
    }
  ];
  return (
    <div className="w-full px-10 md:px-20 py-5">
      <div className="w-100 text-center justify-center mb-10">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p>Personal and commissioned works.</p>
      </div>

      <div className="grid xs:block sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {portfolio.map((item, index) => {
          return (
            <div
              key={index}
              className="overflow-hidden mx-auto max-w-sm hover:scale-105 transition bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-800"
            >
              <a href="#">
                <Image src={item.img} width={700} height={700} alt="artimage" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
