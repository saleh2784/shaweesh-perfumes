/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
            { protocol: 'https', hostname: 'img.ksp.co.il' },
            { protocol: 'https', hostname: 'www.deraahstore.com' },
            { protocol: 'https', hostname: 'bethabosem.co.il' },
            { protocol: 'https', hostname: 'scontent.ftlv1-1.fna.fbcdn.net' },
          ]
      },
};

module.exports = nextConfig;
