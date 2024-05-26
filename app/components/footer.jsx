import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-100 bg-gray-900 flex'>
            <div className="container items-center p-10 flex">
                2024. Art by Cons.
            </div>
            <div className="container p-10">
                <ul className='list-disc'>
                    <li>
                        <Link href={"/commission"} >Commission</Link>
                    </li>
                    <li>
                        <Link href={"/commission/terms"} >Terms and Conditions</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer