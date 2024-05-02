/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        dangerouslyAllowSVG:true,
        remotePatterns:[
            {
                protocol:'https',
                hostname:'tailwindui.com',
                port:'',
                pathname:'**'
            },
            {
                protocol:'https',
                hostname:'upload.wikimedia.org',
                port:'',
                pathname:'**'
            }
        ]
    }
};

export default nextConfig;
