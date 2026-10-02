import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // Redirects are not supported with static export.
  // Use .htaccess on cPanel instead (see .htaccess in /out after build).
  // redirects() { ... }
};

export default nextConfig;
