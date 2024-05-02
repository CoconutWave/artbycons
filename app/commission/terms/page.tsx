import React from 'react'

const Page = () => {
    return (
        <div className='container px-20 py-5'>
            <div className="container py-5">
                <a href="/commission">
                    <div className="text-xl">back</div>
                </a>
            </div>
            <div className="p-2">
                <div className="text-2xl">Terms</div>
                <div className="text-xl container">
                    <ul className='list-decimal'>
                        <li>
                            Payment must be done before proceeding to lineart and painting process.
                        </li>
                        <li>
                            {"By purchasing, you agree that i can use the commissioned art as my portfolio (i still can't use it for commercial use)"}.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-2">
                <div className="text-2xl">Accepting</div>
                <div className="text-xl container">
                    <ul className='list-decimal'>
                        <li>
                            Anthropomorphic Characters, Furries, Ferals
                        </li>
                        <li>
                            Humans
                        </li>
                        <li>
                            Casual outfits, swimsuits, undergarments
                        </li>
                        <li>
                            Minimum nudity
                        </li>
                        <li>
                            Simple backgrounds
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-2">
                <div className="text-2xl text-red-300">Not accepting</div>
                <div className="text-xl container">
                    <ul className='list-decimal'>
                        <li>
                            Obscene fetishes, kinks
                        </li>
                        <li>
                            Nudity, or erotic/sexual theme
                        </li>
                        <li>
                            Copyrighted characters (unless with proper permission)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page