/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  experimental: {
    // This is needed for standalone output to work correctly
    outputFileTracingRoot: undefined,
    outputStandalone: true,
    skipMiddlewareUrlNormalize: true,
    skipTrailingSlashRedirect: true,
  },
  // Add server configuration
  server: {
    port: 3000, // 容器内端口保持 3000
    host: '0.0.0.0', // 允许从容器外访问
  },
};
