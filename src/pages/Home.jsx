import { useEffect } from 'react';
import FloatingCute from '../components/ipek/FloatingCute';
import Hero from '../components/ipek/Hero';
import Reasons from '../components/ipek/Reasons';
import Memories from '../components/ipek/Memories';
import Letter from '../components/ipek/Letter';

const IPEK_PHOTO = 'https://media.base44.com/images/public/6ab42b22947956d33caac5f2/ed9b82c9a_IMG-20231014-WA0014.jpg';

export default function Home() {
  useEffect(() => { document.documentElement.lang = 'tr'; document.title = 'İpek — Sana, her şeyim'; }, []);
  return (
    <>
      <FloatingCute />
      <main>
        <Hero />
        <Reasons />
        <Memories photo={IPEK_PHOTO} />
        <Letter />
      </main>
      <footer className="foot">
        <span className="foot-bear">🧸</span>
        seni her zaman sevdim, hep de edeceğim
      </footer>
    </>
  );
}