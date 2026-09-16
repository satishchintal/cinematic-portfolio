import type {Metadata, Viewport} from 'next';import {Oswald,Syne,Space_Grotesk,JetBrains_Mono} from 'next/font/google';import './globals.css';import LenisProvider from '@/components/LenisProvider';import CustomCursor from '@/components/CustomCursor'

const oswald=Oswald({subsets:['latin'],variable:'--font-oswald',display:'swap'});const syne=Syne({subsets:['latin'],variable:'--font-syne',display:'swap'});const space=Space_Grotesk({subsets:['latin'],variable:'--font-space',display:'swap'});const mono=JetBrains_Mono({subsets:['latin'],variable:'--font-mono',display:'swap'});

const siteUrl = 'https://cinematic-portfolio-rho-seven.vercel.app/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Satish Chintal | Professional AI/DevOps Engineering Portfolio',
    template: '%s | Satish Chintal AI/DevOps'
  },
  description: 'Satish Chintal is a Sr DevOps Engineer focused on AI DevOps, cloud automation, platform reliability, observability, and production engineering systems.',
  keywords: [
    'Satish Chintal',
    'AI DevOps Engineer',
    'Sr DevOps Engineer',
    'Cloud Automation',
    'AWS DevOps',
    'Kubernetes',
    'Terraform',
    'AI Infrastructure',
    'Machine Learning Operations',
    'DevSecOps',
    'Generative AI Engineering',
    'YouTube AI DevOps',
    'Instagram AI DevOps'
  ],
  applicationName: 'Satish Chintal AI/DevOps Portfolio',
  authors: [{ name: 'Satish Chintal' }],
  creator: 'Satish Chintal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: '/',
    languages: { 'en-IN': '/' }
  },
  openGraph: {
    title: 'Satish Chintal | Professional AI/DevOps Engineering Portfolio',
    description: 'Cloud automation, platform reliability, and practical AI DevOps engineering systems.',
    url: siteUrl,
    siteName: 'Satish Chintal AI/DevOps Portfolio',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Satish Chintal - AI DevOps and cloud engineering' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satish Chintal | Professional AI/DevOps Engineering Portfolio',
    description: 'Cloud automation, platform reliability, and practical AI DevOps engineering systems.',
    images: ['/opengraph-image']
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#030303',
  colorScheme: 'dark'
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-IN" className={`${oswald.variable} ${syne.variable} ${space.variable} ${mono.variable}`}><body><LenisProvider>{children}</LenisProvider><CustomCursor/></body></html>}
