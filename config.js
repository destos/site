'use strict';

module.exports = {
  url: 'https://pat.forringer.com',
  title: 'Writings of Patrick Forringer',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: {
    'text': 'Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)',
    'link': 'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
    'svgs': [
      'https://creativecommons.org/images/deed/svg/cc_blue.svg',
      'https://creativecommons.org/images/deed/svg/attribution_icon_blue.svg',
      'https://creativecommons.org/images/deed/svg/sa_blue.svg',
    ]
  },
  disqusShortname: '',
  postsPerPage: 5,
  googleAnalyticsId: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    }
    // {
    //   label: 'Contact me',
    //   path: '/pages/contacts'
    // }
  ],
  author: {
    name: 'Patrick Forringer',
    photo: '/photo.jpg',
    bio: "Here you'll find things",
    contacts: {
      email: 'pat@forringer.com',
      twitter: 'destos',
      github: 'destos',
      rss: '/rss.xml',
    }
  }
};
