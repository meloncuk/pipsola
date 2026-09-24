import { useMemo } from 'react';
const ITEMS = ['💛', '🧸', '💖', '🌸', '🤎', '🌷'];
export default function FloatingCute() {
  const bits = useMemo(() => Array.from({ length: 14 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 14,
    dur: 12 + Math.random() * 12,
    size: 16 + Math.random() * 22,
    char: ITEMS[i % ITEMS.length],
  })), []);
  return (
    <div className="floaters" aria-hidden="true">
      {bits.map((b, i) => (
        <span key={i} style={{ left: `${b.left}%`, animationDelay: `${b.delay}s`, animationDuration: `${b.dur}s`, fontSize: `${b.size}px` }}>{b.char}</span>
      ))}
    </div>
  );
}