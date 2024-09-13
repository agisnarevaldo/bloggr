/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'appealing-actor-22426632b3.media.strapiapp.com',
            }
        ]
    }
};

export default nextConfig;