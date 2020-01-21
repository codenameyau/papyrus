const ip = require('../ip');

describe('getLocalIp', () => {
  it('should return local ip address for mac', () => {
    const mockNetworkInterfaces = {
      lo0: [
        {
          address: '127.0.0.1',
          netmask: '255.0.0.0',
          family: 'IPv4',
          mac: '00:00:00:00:00:00',
          internal: true,
          cidr: '127.0.0.1/8'
        },
        {
          address: '::1',
          netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
          family: 'IPv6',
          mac: '00:00:00:00:00:00',
          internal: true,
          cidr: '::1/128',
          scopeid: 0
        },
        {
          address: 'fe80::1',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '00:00:00:00:00:00',
          internal: true,
          cidr: 'fe80::1/64',
          scopeid: 1
        }
      ],
      en0: [
        {
          address: 'fe80::4b5:2e3a:5abc:cefe',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '7a:d3:65:32:56:11',
          internal: false,
          cidr: 'fe80::4b5:2e3a:5abc:cefe/64',
          scopeid: 6
        },
        {
          address: '192.168.0.13',
          netmask: '255.255.255.0',
          family: 'IPv4',
          mac: '7a:d3:65:32:56:11',
          internal: false,
          cidr: '192.168.0.13/24'
        },
        {
          address: '8402:124a:4ff7:8700:1802:2a67:21de:f888',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '7a:d3:65:32:56:11',
          internal: false,
          cidr: '8402:124a:4ff7:8700:1802:2a67:21de:f888/64',
          scopeid: 0
        },
        {
          address: '8402:124a:4ff7:8700:41c1:aed7:d2a3:e87d',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '7a:d3:65:32:56:11',
          internal: false,
          cidr: '8402:124a:4ff7:8700:41c1:aed7:d2a3:e87d/64',
          scopeid: 0
        }
      ],
      awdl0: [
        {
          address: 'fe80::c0cd:f8ff:fe72:fb29',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: 'c2:cd:f8:72:fb:29',
          internal: false,
          cidr: 'fe80::c0cd:f8ff:fe72:fb29/64',
          scopeid: 8
        }
      ],
      utun0: [
        {
          address: 'fe80::f3fd:1ee3:906:bc52',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '00:00:00:00:00:00',
          internal: false,
          cidr: 'fe80::f3fd:1ee3:906:bc52/64',
          scopeid: 10
        }
      ],
      utun1: [
        {
          address: 'fe80::19cf:8321:72f4:6676',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '00:00:00:00:00:00',
          internal: false,
          cidr: 'fe80::19cf:8321:72f4:6676/64',
          scopeid: 11
        }
      ]
    };

    expect(ip.getLocalIp(mockNetworkInterfaces)).toBe('192.168.0.13')
  })
});
