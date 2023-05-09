import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Gerald Maduabuchi - Software Engineer.',
  description: 'The official website of Gerald Maduabuchi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Gerald Maduabuchi - Software Engineer</title>
        <meta
          property='og:title'
          content='Gerald Maduabuchi - Software Engineer'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://geraldmaduabuchi.com' />
        <meta property='og:description' content='Software Engineer.' />
        <meta property='og:site_name' content='GeraldMaduabuchi' />
        <link
          href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <meta name='robots' content='index, follow'></meta>
        <meta name='robots' content='all'></meta>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
