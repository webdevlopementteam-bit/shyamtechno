/** @type {import('next').NextConfig} */
const nextConfig = {
 
  async redirects() {
    return [
      {
        source: "/flexo-printing-machine",
        destination: "/flexo-printing-machine-manufacturer",
        permanent: true,
      },
      {
        source: "/flexo-printing-machine-in-faridabad",
        destination: "/flexo-printing-machines-manufacturer-in-faridabad",
        permanent: true,
      },
      {
        source: "/flexo-printing-machine-manufacturer-in-india",
        destination: "/flexo-printing-machines-manufacturer-in-faridabad",
        permanent: true,
      },
      {
        source: "/understanding-flexo-printing-machines-:path(.*)",
        destination: "/flexo-printing-machines-manufacturer-in-faridabad",
        permanent: true,
      },
      {
        source: "/offset-printing-machine",
        destination: "/offset-printing-machine-manufacturer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
