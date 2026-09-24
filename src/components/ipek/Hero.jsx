import { ArrowDown } from 'lucide-react';

const BEAR = 'https://media.base44.com/images/public/6ab42b22947956d33caac5f2/75f0e6b9e_generated_image.png';

export default function Hero() {
  return (
    <section id="boven" className="hero">
      <img className="hero-bear" src={BEAR} alt="Kalp taşıyan tatlı bir ayıcık" />
      <h1>İpoşum<span className="heart"> 💛</span></h1>
      <p className="hero-sub">Seni kelimelerden daha çok sevdiğimi bilmen için buraya yazdım her şeyi.</p>
      <a className="hero-scroll" href="#neden">SCROLL ET, SENİN İÇİN <ArrowDown size={16} /></a>
    </section>
  );
}