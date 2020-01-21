const os = require( 'os' );

exports.parseNetworkInterfaces = (networkInterfaces) => {
  const ip = networkInterfaces.en0 && networkInterfaces.en0.filter((ip) => {
    return ip.family === 'IPv4'
  });

  return ip && ip.length && ip[0].cidr && ip[0].cidr.split('/')[0];
};

exports.getLocalIp = () => {
  return exports.parseNetworkInterfaces(os.networkInterfaces());
};

