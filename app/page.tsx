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
      desc: "I'm available for various types of art commissions.",
      link: "/commission",
    },
    {
      title: "Ko-Fi",
      desc: "I'm available for commissions on Ko-Fi.",
      link: "https://ko-fi.com/artbycons",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full relative bg-rose-800 h-80 drop-shadow-xl">
        <Image
          src={"/arts/banner.jpg"}
          fill
          style={{ objectFit: "cover" }}
          alt="banner"
        ></Image>
        {/* <div className="absolute bg-slate-800 opacity-40 inset-0"></div> */}
      </div>
      <div className="container relative h-80">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white drop-shadow-xl">
            {/* <div className="text-5xl text-center">art by Cons</div> */}
            <div className="text-5xl text-center mt-2">
              <span className="text-cyan-100">artist</span> and{" "}
              <span className="text-purple-200">designer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-200 p-20">
        <div className="card justify-around grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {cardDisplay.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block mx-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
