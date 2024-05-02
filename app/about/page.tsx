import React from 'react'

const Page = () => {
    const contacts = [
        {
            platformName: "Twitter",
            handler: "@ConsigSpartan",
            url: "https://twitter.com/ConsigSpartan",
            svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" fill='white'>
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
            </svg>
        },
        {
            platformName: "Bluesky",
            handler: "@artbycons.bsky.app",
            url: "https://bsky.app/profile/artbycons.bsky.social",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" version="1.1" >
                <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="#1185fe" />
            </svg >
        },
        {
            platformName: "Ko-Fi",
            handler: "artbycons",
            url: "https://ko-fi.com/artbycons",
            svg: <img src='/kofi-svgrepo-com.svg' width={50} style={{ fill: "white" }} />
        },
        {
            platformName: "DeviantArt",
            handler: "PwnageSpartan",
            url: "https://www.deviantart.com/pwnagespartan",
            svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" fill='white'>
                <path d="M 37 5 L 28.898438 5 L 25.199219 12 L 12 12 L 12 22 L 19.898438 22 L 12 37 L 12 45 L 20 45 L 23.699219 38 L 37 38 L 37 28 L 29 28 L 37 13 Z"></path>
            </svg>
        },
        {
            platformName: "FurAffinity",
            handler: "PwnageSpartan",
            url: "https://www.furaffinity.net/user/pwnagespartan/",
            svg: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 40 40" fill='white'>
                <title>fur-affinity</title>
                <path d="M22.427 6.844l-0.344 2.656 3.245 0.958 0.042 2.865 2.974 0.057-0.073 3.005 2.891-0.188c0.005-1.010 0.068-6.724 0.839-9.354zM15.141 24.318c0.073-0.281 0-1.203 0-1.526l-0.063-1.948c-2.698-0.115-5.604 0.427-5.604 2.911 0 0.542 0.229 1.026 0.568 1.401h4.417c0.333-0.188 0.578-0.448 0.682-0.839zM27.188 17.422l0.068-2.995-2.938-0.057-0.047-3.229-3.37-1.151 0.453-3.146h-12.573c-5.094 0-8.781 4.339-8.781 9.089v9.224h5.49c-0.036-0.333-0.047-0.672-0.031-1.005 0.198-4.891 5.599-5.729 9.656-5.609v-1.406c-0.068-1.135-0.99-2.141-3.656-2.141-1.776 0-3.885 0.229-5.25 0.724l0.359-3.182c1.307-0.365 2.776-0.724 5.938-0.724 6.099 0 6.771 2.703 6.724 5.844l-0.031 7.5h3.307v-0.005l0.125 0.005c4.406 0 8.031-3.589 8.484-7.891z" />
            </svg>
        },
    ]
    return (
        <div className="container p-20">
            <div className="container p-2">
                <h1 className='text-2xl m-2'>art by Cons</h1>
                <p>An artist based in Indonesia. Specialized in anthropomorphic arts, character design, and digital painting.</p>
            </div>
            <div className="container p-2">
                <h1 className='text-2xl m-2'>Contacts</h1>
                <div className="container sm:block lg:grid grid-cols-3 gap-3">
                    {
                        contacts.map((item, index) =>
                            <div className="flex gap-5 items-center max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-700" key={index}>
                                {item.svg != null && item.svg}
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.platformName}</h5>
                                </a>
                                {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p> */}
                                <a href={item.url} className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                    Visit
                                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                    </svg>
                                </a>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Page