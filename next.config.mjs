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
        source: "/multi-colour-flexographic-printing-machine-manufacturer-in-faridabad",
        destination: "/multi-colour-flexographic-printing-machine",
        permanent: true,
      },
      {
        source: "/multi-colour-flexographic-printing-machine-in-faridabad",
        destination: "/multi-colour-flexographic-printing-machine",
        permanent: true,
      },

      {
        source: "/offset-printing-machine",
        destination: "/offset-printing-machine-manufacturer",
        permanent: true,
      },
      {
        source: "/automatic-offset-printing-machine-in-faridabad",
        destination: "/automatic-offset-printing-machine",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
