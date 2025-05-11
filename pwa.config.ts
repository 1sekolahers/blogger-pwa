import type { Config } from './types';

export default {
  id: '/',
  name: 'KabaRakyat App',
  shortName: 'KabaRakyat.web.id',
  description: 'Unduh aplikasi Kabarakyat.web.id sekarang! Super ringan, hemat kuota, cepat, dan iklan lebih sedikit. Nikmati berita terkini dengan notifikasi instan, tampilan nyaman, dan akses offline. Klik untuk instal dan tetap terinformasi!',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Berita Terkini',
      shortName: 'Berita Terkini',
      description: 'Update Berita Terkini yang sedang viral di Indonesia',
      url: '/search/label/Berita?utm_source=homescreen',
    },
    {
      name: 'Hubungi Kami 📩',
      shortName: 'Hubungi Kami 📩',
      description: 'Kirim pesan pertanyaan atau bisnis kerja sama.',
      url: '/p/contact.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: 'd2241d02-d852-45d3-853f-774ad81977a3',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.kabarakyat.web.id',
} satisfies Config;
