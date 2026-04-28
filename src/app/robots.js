export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: ['https://abdulmoizdev.me/sitemap.xml'],
    host: 'https://abdulmoizdev.me',
  };
}