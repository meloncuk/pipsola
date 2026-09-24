const BEAR_CORNER = 'https://media.base44.com/images/public/6ab42b22947956d33caac5f2/0c567b7ef_generated_image.png';
export default function Letter() {
  return (
    <section id="mektup" className="letter shell">
      <div className="letter-card">
        <img className="bear-corner" src={BEAR_CORNER} alt="" aria-hidden="true" />
        <p className="eyebrow">Sana, İpek'im</p>
        <h2>Bir mektup… <em>kelimelerin yetmediği yerden.</em></h2>
        <p>Bazen oturup düşünüyorum: bu kadar çok şeyi nasıl tek bir insanda buldum? Gülüşün, sessizliğin, bana baktığın o gözler…</p>
        <p>Seni sevmenin en güzel tarafı, bunu bir gün değil her gün hissetmek. Sabah uyandığımda aklımda sensin, gece kapanmadan önce son düşüncem.</p>
        <p>İyi ki varsın. İyi ki benimsin. Ve iyi ki seninleyim.</p>
        <p className="sign">— her zaman ben 🧸</p>
      </div>
    </section>
  );
}