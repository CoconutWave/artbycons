import Image from 'next/image'
import React from 'react'

const Page = () => {
    const commissions = [
        {
            title: "Sketch",
            img: "/arts/MichiruRaiDoodle_sketch.png",
            desc: "Base sketch",
            price: 17
        },
        {
            title: "Lineart",
            img: "/arts/konohadoodleposelineart.png",
            desc: "Lineart with base color",
            price: 35
        },
        {
            title: "Flat Color",
            img: "/arts/MarieLargeCoat_update.png",
            desc: "Flat-colored artwork",
            price: 55
        },
        {
            title: "Rendered",
            img: "/arts/ReikoWithBag.png",
            desc: "Fully-rendered artwork",
            price: 70
        }
    ];
    const formatPrice = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    })
    return (
        <div className='container px-20 py-5'>
            <div className="container text-center justify-center my-3">
                <h1 className='text-3xl'>Commission</h1>
                <p>Please contact me for more details.</p>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1">
                {
                    commissions.map((item, index) =>
                        <div className="overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ width: "300px" }} key={index}>
                            <a href="#" className='object-cover'>
                                <Image src={item.img} width={300} height={500} alt='comm'></Image>
                            </a>
                            <div className="px-5 py-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                </a>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{formatPrice.format(item.price)}</span>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className="container text-center m-5">
                <button className='btn p-3 rounded-lg bg-gradient-to-r from-indigo-300 to-red-300 text-black hover:ring-2 hover:ring-blue-200'>
                    Terms and Conditions
                </button>
            </div>
        </div>
    )
}

export default Page