const memories = [
  { emoji: '☕', title: 'İlk kahvemiz', text: 'Konuşa konuşa soğuyan kahveler, hiç bitmeyen sohbet.' },
  { emoji: '🌙', title: 'Gece yürüyüşleri', text: 'Sokaklar boşaldığında elimde elin, kalbimde senin adın.' },
  { emoji: '🌧️', title: 'O yağmurlu gün', text: 'Şemsiye yoktu ama fark etmedi; sen gülerken ben ıslandım.' },
  { emoji: '🧸', title: 'Küçük jestlar', text: 'Bana hiç beklenmedik anlarda sarılan o küçük ayıcık.' },
];

export default function Memories({ photo }) {
  return (
    <section id="anilar" className="memories">
      <div className="shell">
        <div className="memories-head">
          <p className="eyebrow">Anılarımız</p>
          <h2>Seninle geçen her an <em>bir hazine.</em></h2>
        </div>
        <div className="memory-grid">
          {memories.map(m => (
            <div className="memory-card" key={m.title}>
              <span className="emoji">{m.emoji}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
        <div className="photo-wrap">
          <div className="polaroid">
            <div className="frame">
              <img src={photo} alt="İpek — en sevdiğim kare" />
            </div>
            <div className="cap">en sevdiğim kare 💛</div>
          </div>
          <span className="photo-note">KÜÇÜCÜK BİR KARE — BÜYÜK BİR KALP</span>
        </div>
      </div>
    </section>
  );
}