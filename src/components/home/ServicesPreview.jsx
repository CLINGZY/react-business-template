import "../../styles/components/services-preview.css";

export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <div className="services-preview-content container">
        
        <h2 className="services-title">
          Our Services
        </h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Massage Therapy</h3>

            <p>
              Relaxing full-body massage to relieve stress and tension.
            </p>
          </div>

          <div className="service-card">
            <h3>Facial Treatment</h3>

            <p>
              Deep cleansing and skincare treatments for glowing skin.
            </p>
          </div>

          <div className="service-card">
            <h3>Body Care</h3>

            <p>
              Exfoliation and body treatments for smooth healthy skin.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}