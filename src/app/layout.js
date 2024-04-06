import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ClientComponent from '@/components/clientComponent';
import ServerComponent from '@/components/serverComponent';

// import ClientSideProviderTest from '@/components/clientSideProviderTest';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Next App',
    description: 'Next.js starter app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <ClientSideProviderTest> */}
                <div className="container">
                    <Navbar />
                    {children}
                    <Footer />
                    <ClientComponent>
                        <ServerComponent />
                    </ClientComponent>
                </div>
                {/* </ClientSideProviderTest> */}
            </body>
        </html>
    );
}

// MongoPassword
// mpuKrDDtu47Z7iOF
