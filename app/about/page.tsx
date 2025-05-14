import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { SiDeviantart, SiFuraffinity, SiKofi } from "react-icons/si";

const Page = () => {
  const contacts = [
    {
      platformName: "Twitter",
      handler: "@ConsigSpartan",
      url: "https://twitter.com/ConsigSpartan",
      svg: <FaTwitter fontSize={38} />,
    },
    {
      platformName: "Bluesky",
      handler: "@artbycons.bsky.app",
      url: "https://bsky.app/profile/artbycons.bsky.social",
      svg: <FaBluesky fontSize={38} />,
    },
    {
      platformName: "Ko-Fi",
      handler: "artbycons",
      url: "https://ko-fi.com/artbycons",
      svg: <SiKofi fontSize={38} />,
    },
    {
      platformName: "DeviantArt",
      handler: "PwnageSpartan",
      url: "https://www.deviantart.com/pwnagespartan",
      svg: <SiDeviantart fontSize={38} />,
    },
    {
      platformName: "FurAffinity",
      handler: "PwnageSpartan",
      url: "https://www.furaffinity.net/user/pwnagespartan/",
      svg: <SiFuraffinity fontSize={38} />,
    },
  ];
  return (
    <div className="p-20 flex flex-col justify-center">
      <div className="w-full p-2 text-center">
        <div className="w-96 flex justify-center mx-auto">
          <Image
            className="rounded-full border-l-slate-800 border drop-shadow-2xl"
            src={"/arts/sisu_square.png"}
            width={200}
            height={200}
            alt="profile"
          ></Image>
        </div>
        <div className="w-5/6 md:w-1/2 mx-auto m-3">
          <h1 className="text-5xl mb-5">art by Cons</h1>
          <p className="text-2xl">
            A digital artist based in Indonesia. Specialized in anthropomorphic
            arts and illustration, character design, and digital painting.
          </p>
        </div>
      </div>
      <div className="w-full p-5">
        <h1 className="text-2xl mb-2">Contact me</h1>
        <div className="grid xs:block grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {contacts.map((item, index) => (
            <Link
              href={item.url}
              className="flex gap-5 m-3 md:p-5 sm:p-3 p-3 hover:scale-105 overflow-hidden transition items-center bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-700"
              key={index}
            >
              <div className="inline-flex">
                {item.svg != null && item.svg}
              </div>
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.platformName}
                </h5>
              </div>
              {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p> */}
              <div className="inline-flex font-medium items-center">
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
