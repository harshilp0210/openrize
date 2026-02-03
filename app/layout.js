import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GlobalBackground from '../components/GlobalBackground/GlobalBackground';
import ChatBot from '../components/ChatBot/ChatBot';

export const metadata = {
  metadataBase: new URL('https://openrize.com'),
  title: 'Openrize | End-to-End Software Development Services',
  description: 'Openrize: Building your digital smart home with modern tech stacks and sustainable code. Web development, AI solutions, and digital transformation.',
  manifest: '/manifest.json',
  keywords: ['software development', 'web development', 'AI solutions', 'digital marketing', 'Openrize', 'PWA', 'Next.js'],
  verification: {
    other: {
      'msvalidate.01': 'EAAB6B56735D1CE8A6881C818A7AED2B',
    },
  },
  openGraph: {
    title: 'Openrize | End-to-End Software Development Services',
    description: 'Transforming businesses with tailored digital solutions.',
    url: 'https://openrize.com',
    siteName: 'Openrize',
    images: [
      {
        url: '/logo-v4.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Openrize',
    description: 'End-to-End Software Development Services',
    images: ['/logo-v4.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
