import Image from 'next/image'
import React from 'react'

const Page = () => {
    const portfolio = [
        {
            title: "Reiko",
            img: "/arts/reiko_sd.png",
            desc: "Reiko in her casual wear"
        },
        {
            title: "Sera",
            img: "/arts/sera_sd.png",
            desc: "Sera's daily farm chores"
        }
    ]
    return (
        <div className='container px-20 py-5'>
            <div className="container w-100 text-center justify-center my-3">
                <h1 className='text-3xl'>Portfolio</h1>
                <p>Personal and commissioned works.</p>
            </div>

            <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-10">
                {portfolio.map((item, index) => {
                    return <div key={index} className="overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700">
                        <a href="#">
                            <Image src={item.img} width={500} height={500} alt='artimage' />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
                        </div>
                    </div>
                })}

            </div>

        </div>
    )
}

export default Page