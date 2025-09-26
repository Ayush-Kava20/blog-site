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
        MONGODB_URI: process.env.MONGO_URI,
        MONGODB_COLLECTION: process.env.MONGODB_COLLECTION_DEV
       }
    }
  }

  return {
    env: {
      MONGODB_URI: process.env.MONGO_URI,
      MONGODB_COLLECTION: process.env.MONGODB_COLLECTION
    }
  }
}