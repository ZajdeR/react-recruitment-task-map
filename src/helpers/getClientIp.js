import publicIp from 'public-ip';

export const getClientIp = async () =>
  await publicIp.v4({
    fallbackUrls: ['https://ifconfig.co/ip'],
  });
