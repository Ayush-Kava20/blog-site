import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;

module.exports = (phase: string) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return{
       env: {
        MONGO_URI: process.env.MONGO_URI,
        MONGO_COLLECTION: process.env.MONGO_COLLECTION_DEV
       }
    }
  }

  return {
    env: {
      MONGO_URI: process.env.MONGO_URI,
      MONGO_COLLECTION: process.env.MONGO_COLLECTION
    }
  }
}