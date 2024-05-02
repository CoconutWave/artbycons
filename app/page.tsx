import Image from "next/image";

export default function Home() {
  const cardDisplay = [
    {
      title: "Artwork",
      desc: "I make anthro-themed artworks, character designs, and more.",
      link: "/portfolio"
    },
    {
      title: "Commission",
      desc: "I do various types of art commissions.",
      link: "/commission"
    },
    {
      title: "Ko-Fi",
      desc: "I'm available for commissions on Ko-Fi.",
      link: "/portfolio"
    }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container relative bg-rose-800 h-80">
        <Image src={"/arts/ReikoWIthBag.png"} fill style={{ objectFit: "cover" }} alt="banner"></Image>
      </div>

      <div className="container w-100 bg-gradient-to-r from-violet-600 to-fuchsia-200 p-20">
        <div className="card flex justify-around grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {
            cardDisplay.map((item, index) => (
              <a key={index} href={item.link} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
              </a>
            ))
          }
        </div>
      </div>
    </main>
  );
}
