import { portfolio } from '@/data/portfolio';
import { SectionLabel } from './About';

export default function Services() {
  return (
    <section id="services" className="section-pad content-section" aria-labelledby="services-heading">
      <SectionLabel n="02" t="SERVICES / EXPERTISE" />
      <div className="services-header">
        <h2 id="services-heading">AI DevOps, Cloud, and Platform Engineering</h2>
        <p>{portfolio.seoSummary}</p>
      </div>
      <div className="services-grid">
        {portfolio.services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
