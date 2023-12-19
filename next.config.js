//  /** @type {import('next').NextConfig} */
//  const nextConfig = {}

//  module.exports = nextConfig

// module.exports = {
//   async rewrites ()  {
//     return [
//       {
//         source: "/dwapi/:path*",
//         destination: "https://dw10dsz.public9.dynamicweb.dk/dwapi/:path*",
//       },
//     ];
//   }

// };

const headers = async () => {
  return [
    {
      // matching all API routes
      source: "/dwapi/:path*",
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        {
          key: "Access-Control-Allow-Methods",
          value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"
        },
        {
          key: "Access-Control-Allow-Headers",
          value:
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Content-Type"
        }
      ]
    }
  ];
};

return {
  headers
};
