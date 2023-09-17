import '../app/global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gerald Maduabuchi',
  description: 'I am Gerald Maduabuchi, a software engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='text-black bg-white dark:text-white dark:bg-[#111010]'
    >
      <head>
        <link
          rel='icon'
          href='https://i.ibb.co/YNRSK0Z/gerald-logo.png'
          sizes='80x80'
        />
      </head>
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          {children}
        </main>
      </body>
    </html>
  );
}
