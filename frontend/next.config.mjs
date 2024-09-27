/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.statebicycle.com",
			},
		],
	},
};

export default nextConfig;
