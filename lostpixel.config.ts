import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  // @ts-ignore
  pageShots: {
    pagesJsonUrl: 'http://172.17.0.1:3000/lost-pixel.json',
    // pages: [
    //   { path: '/', name: 'home' },
    //   { path: '/faq', name: 'faq' },
    //   { path: '/community', name: 'community' },
    //   { path: '/support', name: 'support' },
    //   { path: '/early-access-program', name: 'early-access-program' },
    // ],

    baseUrl: 'http://172.17.0.1:3000',
  },
  // OSS mode
  generateOnly: true,
  failOnDifference: false,
};
