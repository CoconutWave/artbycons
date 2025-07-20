import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cardDisplay = [
    {
      title: "Artwork",
      desc: "I make anthro-themed artworks, character designs, illustrations, and more.",
      link: "/portfolio",
    },
    {
      title: "Commission",
      desc: "Accepts various kinds of art commissions. To book one, please contact through available social media.",
      link: "/commission",
    },
    {
      title: "Ko-Fi",
      desc: "Also available for artwork commissions on Ko-Fi. Terms and Conditions apply.",
      link: "https://ko-fi.com/artbycons",
    },
  ];
  return (
    <main className="flex flex-col items-center justify-between">
      
      <div className="bg-blue-300 min-h-96 w-full place-content-center relative">
        <div className=" m-auto bg-fuchsia-400 overflow-hidden">
          <Image
            src={"/arts/banner.jpg"}
            fill
            className="m-auto w-full h-full"
            style={{ objectFit: "cover" }}
            alt="banner"
          ></Image>
          asdasd
        </div>
      </div>

      {/* <div className="container relative h-80">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white drop-shadow-xl">
            <div className="text-5xl text-center">i&apos;m an</div>
            <div className="text-5xl text-center mt-2">
              <span className="text-cyan-100">artist</span> and{" "}
              <span className="text-purple-200">designer</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full bg-gradient-to-r from-slate-800 to-purple-950 block md:flex text-white">
        <div className="relative bg-cyan-600 w-full md:w-1/2 h-96">
          <Image
            src={
              "https://d.furaffinity.net/art/pwnagespartan/1683901045/1683890787.pwnagespartan_seradoingchores_update.png"
            }
            fill
            objectFit="cover"
            objectPosition="50% 10%"
            alt="sample"
          ></Image>
        </div>
        <div className="container p-20 mx-auto text-left">
          <div className="text-3xl mb-10 md:mb-5">
            I make anthropomorphic animal and cartoon character illustrations. Capable to draw
            various animals within my interest. I&apos;ve made illustrations for online clients.
          </div>
          <Link
            href={"/portfolio"}
            className="bg-fuchsia-300 text-black p-3 rounded-xl"
          >
            Check my portfolio
          </Link>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-blue-950 to-purple-900 flex flex-col md:flex-row md:h-96">
        <div className="relative bg-cyan-600 w-full md:w-11/12 h-96 md:h-full block md:hidden">
          <Image
            src={
              "https://d.furaffinity.net/art/pwnagespartan/1658754890/1658754890.pwnagespartan_commissionharrylime3_update.jpg"
            }
            fill
            objectFit="cover"
            objectPosition="50% 10%"
            alt="sample"
          ></Image>
        </div>
        <div className="container p-10 mx-auto text-center md:text-left">
          <div className="text-3xl mb-10">
            I&apos;m available for various types of art commission. Ranging from
            simple sketch illustration to fully-rendered artwork. Additional
            options are available.
          </div>
          <Link
            href={"/commission"}
            className="bg-fuchsia-300 text-black p-3 rounded-xl"
          >
            Commission pricing
          </Link>
        </div>
        <div className="relative bg-cyan-600 w-full md:w-11/12 h-full hidden md:block">
          <Image
            src={
              "https://d.furaffinity.net/art/pwnagespartan/1658754890/1658754890.pwnagespartan_commissionharrylime3_update.jpg"
            }
            fill
            objectFit="cover"
            objectPosition="50% 10%"
            alt="sample"
          ></Image>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-200 p-20">
        <div className="card justify-around grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {cardDisplay.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block m-3 max-w-sm min-h-48 p-6 hover:scale-105 transition-transform bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
