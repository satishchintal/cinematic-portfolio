import type { Config } from 'tailwindcss'
const config: Config = {content:['./src/pages/**/*.{js,ts,jsx,tsx,mdx}','./src/components/**/*.{js,ts,jsx,tsx,mdx}','./src/app/**/*.{js,ts,jsx,tsx,mdx}'],theme:{extend:{colors:{bg:'#030303',surface:'#090909',accent:'#c40024',bright:'#e0002a',text:'#f5f5f5'},fontFamily:{sans:['var(--font-space)'],display:['var(--font-oswald)'],mono:['var(--font-mono)']}}},plugins:[]}
export default config
