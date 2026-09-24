const memories = [
  { emoji: '🫶', title: 'Kalp burnun', text: 'Burnunla yaptığın o minik kalp var ya… her yaptığında istemsizce gülümsüyorum. Aşırı tatlısın.' },
  { emoji: '🥪', title: 'Salam labnen', text: 'O meşhur salam labnen… Sen yapınca dünyanın en basit şeyi bile özel geliyor bana.' },
  { emoji: '😊', title: 'Gülüşün', text: 'Güldüğünde gözlerinin de gülmesi… Sanırım en uzun bakmak istediğim manzaralardan biri sensin.' },
  { emoji: '🤍', title: 'Sarılmamız', text: 'Sana sarıldığım o an… dünya biraz sessizleşiyor ve sanki olması gereken tek yer orasıymış gibi geliyor.' },
];

export default function Memories({ photo }) {
  return (
    <section id="anilar" className="memories">
      <div className="shell">
        <div className="memories-head">
          <p className="eyebrow">Sende sevdiğim şeyler</p>
          <h2>Sende sevdiğim <em>o kadar çok şey var ki…</em></h2>
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