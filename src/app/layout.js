import "./globals.css";
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const narkiss = localFont({
  src: [
    { path: './fonts/fonnts.com-Narkiss_Hadash_Extended_Extralight.otf', weight: '200' },
    { path: './fonts/fonnts.com-Narkiss_Hadash_Extended_Light.otf', weight: '300' },
    { path: './fonts/fonnts.com-Narkiss_Hadash_Extended_Regular.otf', weight: '400' },
    { path: './fonts/fonnts.com-Narkiss_Hadash_Extended_Medium.otf', weight: '500' },
    { path: './fonts/fonnts.com-Narkiss_Hadash_Extended_Semibold.otf', weight: '600' },
    { path: './fonts/fonnts.com-Narkiss_Hadash_Extended_Bold.otf', weight: '700' },
    { path: './fonts/fonnts.com-Narkiss_Hadash_Extended_Heavy.otf', weight: '800' },
  ],
  variable: '--font-narkiss',
  display: 'swap',
});


export const metadata = {
  title: "Vaultin - Monetize Your Content",
  description: "Import, lock, share and earn money with your content. Secure content monetization platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${narkiss.variable}`}>
      <body className={`antialiased font-montserrat`}>
          {children}
      </body>
    </html>
  );
}
