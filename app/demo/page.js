import DemoPage from './DemoPage';

export const metadata = {
    title: 'Request a Free Demo | Openrize POS System',
    description: 'See how Openrize POS system works and how it can help your business grow. Fill out the form and our team will contact you.',
    keywords: ['POS demo', 'free POS demo', 'Openrize demo', 'restaurant POS demo', 'retail POS demo'],
    openGraph: {
        title: 'Request a Free Demo | Openrize',
        description: 'See how Openrize POS system works and how it can help your business grow.',
        url: 'https://openrize.com/demo',
        siteName: 'Openrize',
    },
};

export default function Page() {
    return <DemoPage />;
}
