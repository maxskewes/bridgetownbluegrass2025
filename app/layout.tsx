import type { Metadata } from 'next';
import { Della_Respira } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

const dellaRespira = Della_Respira({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    default: 'Bridgetown Bluegrass & Folk Festival',
    template: '%s | Bridgetown Bluegrass',
  },
  description: 'A day-log bluegrass and folk music fest in Portland, OR.',
  keywords: [
    'Never Come Down',
    'Cascade Crescendo',
    'Alder Street',
    'Five Letter Word',
    'Hot Damn Scandal',
    'Fog Holler',
    'The Muddy Souls',
    'Chicken $#!T Gamblers',
    'Amanda Richards & The Good Long Whiles',
    'Alison Self',
    'Bitches in the Beehive',
    'Siena Christie',
    'Blue Flags and Black Grass',
    'The Lois and Clark Expedition',
    'Jasper Diem',
    'One Grass Two Grass',
    'Laney Lou & the Bird Dogs',
    'Left Coast Country',
    'Scratchdog Stringband',
    'Warren G. Hardings',
    'Quattlebaum',
    'Hill Williams',
    'Julie and the Wayves',
    'Mountain Honey',
    'Lillian Sawyer Band',
    'High Seagrass',
    'Wooden Sleepers',
    'The Ramblin Kind',
    'Out West',
    'Whiskey Deaf',
    'Whistlin Rufus',
    'The Licklog Disputes',
    'Tim Connell',
    'Eric Skye',
    'Mighty Dreadful Stringband',
    'Caitlin Jemma & the Goodness',
    'The Hollerbodies',
    'Slabtown Rounders',
    'Jackstraw',
    'Band of Comerados',
    'Thunder Ridge',
    'Skillethead',
    'Sunny South',
    'Fiddlocity',
    'Dadweed',
    'Party McFly',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={dellaRespira.className}>
        <header className='relative '>
          <Header />
        </header>
        <main className='min-h-full min-w-screen -z-1'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
