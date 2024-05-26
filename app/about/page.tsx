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
    <div className="w-full p-20">
      <div className="w-full p-2 mb-10 text-center">
        <div className="w-full flex justify-center">
          <Image
            className="rounded-full border-l-slate-800 border drop-shadow-2xl"
            src={"/arts/sisu_square.png"}
            width={200}
            height={200}
            alt="profile"
          ></Image>
        </div>
        <h1 className="text-2xl my-3">art by Cons</h1>
        <p>
          A digital artist based in Indonesia. Specialized in anthropomorphic
          arts and illustration, character design, and digital painting.
        </p>
      </div>
      <div className="container p-2 mb-10">
        <h1 className="text-2xl mb-2">Contacts</h1>
        <div className="container sm:block lg:grid grid-cols-3">
          {contacts.map((item, index) => (
            <Link
              href={item.url}
              className="flex gap-5 m-3 p-6 hover:scale-105 transition items-center max-w-m bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-700"
              key={index}
            >
              {item.svg != null && item.svg}
              <div>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.platformName}
                </h5>
              </div>
              {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p> */}
              <div className="inline-flex font-medium items-center text-blue-600">
                Visit
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
