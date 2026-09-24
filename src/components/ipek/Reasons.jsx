const reasons = [
  { bear: '🧸', title: 'Gülüşün', text: 'Dünyanın en kötü gününde bile bir gülüşünle her şey yoluna giriyor; gülmek bana seninle geldi.' },
  { bear: '🌸', title: 'Kalbin', text: 'İnsanlara dokunuşun, şefkatin ve o kocaman kalbin… sen iyi olduğunu bilmeden iyi oluyorsun.' },
  { bear: '💛', title: 'Sessizliğin', text: 'Bazen hiç konuşmadan yan yana durmak yetiyor. O sessizlik seninle en güzel şarkı.' },
  { bear: '🤎', title: 'Sen olman', text: 'Başka kimseye benzemeyen, kendin olan, âşık olduğum hâlin. Sadece sen.' },
];
export default function Reasons() {
  return (
    <section id="neden" className="reasons shell">
      <div className="reasons-head">
        <p className="eyebrow">Seni neden seviyorum</p>
        <h2>Birkaç neden… <em>aslında sayısız.</em></h2>
      </div>
      <div className="reasons-grid">
        {reasons.map(r => (
          <div className="reason-card" key={r.title}>
            <span className="reason-bear">{r.bear}</span>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}