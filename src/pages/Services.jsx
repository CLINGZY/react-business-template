import "../styles/pages/services.css";
import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";

export default function Services() {
  return (
    <div>

      <section className="services-page">

        <h1>Our Services</h1>

        <div className="services-grid">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </section>

    </div>
  )
}