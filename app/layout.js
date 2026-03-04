import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GlobalBackground from '../components/GlobalBackground/GlobalBackground';
import ChatBot from '../components/ChatBot/ChatBot';

export const metadata = {
  metadataBase: new URL('https://openrize.com'),
  title: 'Restaurant & Retail POS System | Custom POS Software & Website Development | Openrize',
  description: 'Openrize provides powerful POS systems for restaurants, liquor stores, and retail businesses. Automate operations, increase productivity, and grow faster with Openrize POS.',
  manifest: '/manifest.json',
  keywords: ['POS system', 'restaurant POS', 'liquor store POS', 'retail POS', 'cloud POS software', 'custom website development', 'Openrize', 'point of sale system'],
  verification: {
    other: {
      'msvalidate.01': 'EAAB6B56735D1CE8A6881C818A7AED2B',
    },
  },
  openGraph: {
    title: 'Restaurant & Retail POS System | Custom POS Software | Openrize',
    description: 'Powerful POS systems for restaurants, liquor stores, and retail businesses. Automate operations and grow faster with Openrize.',
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
    title: 'Openrize | POS Systems for Restaurants & Retail',
    description: 'Powerful POS systems for restaurants, liquor stores, and retail businesses.',
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
