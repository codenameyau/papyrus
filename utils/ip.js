const os = require( 'os' );

exports.parseNetworkInterfaces = (networkInterfaces) => {
  return Object.keys(networkInterfaces);
};

exports.getLocalIp = () => {
  return exports.parseNetworkInterfaces(os.networkInterfaces());
};

