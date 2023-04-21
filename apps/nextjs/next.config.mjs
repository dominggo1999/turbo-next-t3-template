// import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
// import nextPwa from "next-pwa";

// const withPWA = nextPwa({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
// });

// /** @type {import("next").NextConfig} */
// const config = {
//   reactStrictMode: true,
//   /** Enables hot reloading for local packages without a build step */
//   transpilePackages: ["@acme/api", "@acme/auth", "@acme/db", "@acme/ui"],
//   /** We already do linting and typechecking as separate tasks in CI */
//   eslint: { ignoreDuringBuilds: !!process.env.CI },
//   typescript: { ignoreBuildErrors: !!process.env.CI },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//       },
//     ],
//   },
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       config.plugins = [...config.plugins, new PrismaPlugin()];
//     }

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//     return config;
//   },
// };

// export default withPWA(config);

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/api", "@acme/auth", "@acme/db", "@acme/ui"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
};

export default config;
