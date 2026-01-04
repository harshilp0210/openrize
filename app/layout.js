import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GlobalBackground from '../components/GlobalBackground/GlobalBackground';

export const metadata = {
  title: 'Openrize | End-to-End Software Development Services',
  description: 'Openrize: Building your digital smart home with modern tech stacks and sustainable code.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
