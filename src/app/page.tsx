import CinematicVideo from '@/components/CinematicVideo';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

const siteUrl = 'https://satishdevaiops.com';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#satish-chintal`,
      name: 'Satish Chintal',
      jobTitle: 'Sr DevOps Engineer',
      worksFor: { '@type': 'Organization', name: 'Genpact' },
      description: 'AI DevOps engineer focused on cloud automation, infrastructure engineering, and production AI systems.',
      url: siteUrl,
      sameAs: ['https://www.youtube.com/@SatishAIDevOps', 'https://www.instagram.com/satishdevaiops/'],
      knowsAbout: ['AI DevOps', 'Cloud Engineering', 'AWS', 'Terraform', 'Kubernetes', 'Observability', 'AI Infrastructure']
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Satish AI DevOps',
      url: siteUrl,
      description: 'Portfolio and personal brand for Satish Chintal, a Sr DevOps Engineer focused on AI DevOps and cloud automation.',
      inLanguage: 'en-IN',
      publisher: { '@id': `${siteUrl}/#satish-chintal` }
    },
    {
      '@type': 'ProfessionalService',
      name: 'Satish AI DevOps',
      url: siteUrl,
      description: 'AI DevOps consulting and engineering services covering cloud infrastructure, automation, observability, and AI-enabled delivery.',
      provider: { '@id': `${siteUrl}/#satish-chintal` },
      areaServed: 'Worldwide'
    }
  ]
};

export default function Home(){
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main>
        <CinematicVideo/>
        <Navbar/>
        <div className="content-layer">
          <Hero/>
          <About/>
          <Services/>
          <Projects/>
          <Skills/>
          <Experience/>
          <Certifications/>
          <Contact/>
        </div>
      </main>
    </>
  );
}
