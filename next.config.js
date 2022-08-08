/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongodb_username: "as_simform",
    mongodb_password: "BV25HnwDrp2W8Hzh",
    mongodb_clusterName: "cluster0",
    mongodb_database: "my-site",
  },
};

module.exports = nextConfig;
