/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;

// require("dotenv").config();

module.exports = {
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
};
