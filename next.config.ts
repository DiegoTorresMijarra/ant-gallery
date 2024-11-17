import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            // {
            //   protocol: 'https',
            //   hostname: 'diegotorresmijarra.github.io',
            //   pathname: '/gallery/cdn-images/**',
            // },
            {
                protocol: 'https',
                hostname: 'cdn-images-jorge-maria.imgix.net',
                pathname: '/**',
            },
        ],
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/Home',
                permanent: false,
            },
        ]
    },
    transpilePackages: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table"],
};

export default nextConfig;
