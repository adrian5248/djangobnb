import { hostname } from 'os';

/** @type {import('next').NexConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '8000',
              pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
