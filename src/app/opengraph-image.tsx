import { ImageResponse } from 'next/og';

export const alt = 'Satish Chintal - AI DevOps and cloud engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '58px 76px', color: '#f5f5f5', background: '#030303', border: '18px solid #030303', boxShadow: 'inset 0 0 0 2px #e0002a' }}>
        <div style={{ display: 'flex', color: '#ff3b5c', fontSize: 28, letterSpacing: 6 }}>SATISH AI DEVOPS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, letterSpacing: -3 }}>AI DEVOPS</div>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, letterSpacing: -3, color: '#e0002a' }}>CLOUD SYSTEMS</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 25, color: '#c7c7c7' }}>
          <span>Cloud automation. Reliability. AI-native delivery.</span>
          <span>satishdevaiops.com</span>
        </div>
      </div>
    ),
    size
  );
}
