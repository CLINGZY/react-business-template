import "../styles/pages/services.css";
import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";

export default function Services() {
  return (
    <div>
      <section className="services-page">
        <div className="container">

          <h1>Our Services</h1>

          <p className="services-intro">
            A complete range of wellness treatments designed to relax, restore, and rejuvenate your body.
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}