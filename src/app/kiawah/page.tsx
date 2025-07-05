import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function KiawahKitchen() {
  return (
    <div style={{minHeight: '100vh'}}>
      {/* Hero Section / Header */}
      <header id="home" className="hero hero-kiawah">
        <Navigation />
      </header>

      {/* Project Details Section */}
      <section id="project-details" className="about">
        <div className="about-grid-alt">
          <div className="about-text">
            <h2>Coastal Elegance</h2>
            <p>This Kiawah kitchen was designed to capture the essence of coastal living while maintaining sophisticated functionality. With thoughtful design elements that reflect the island&apos;s natural beauty, every detail was crafted to create a space that feels both luxurious and effortlessly relaxed.</p>
          </div>
          <div className="about-logo">
            <Image 
              src="/images/kiawah/kiawah1.jpg" 
              alt="Kiawah Kitchen" 
              width={640}
              height={640}
              className="kr-logo-alt"
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <hr className="section-divider" />

      {/* Detailed Content Section */}
      <section className="detailed-content">
        <div className="detailed-container">
          <div className="detailed-grid">
            {/* Column A (Left) - Text, Image, Text, Image */}
            <div className="column-a">
              <p className="detail-text">
                Natural materials and thoughtful lighting create a warm, inviting atmosphere that captures the relaxed elegance of island life.
              </p>
              <Image 
                src="/images/kiawah/kiawah2.jpg" 
                alt="Kiawah kitchen detail" 
                width={640}
                height={1100}
                className="detailed-img"
              />
              <p className="detail-text">
                Coastal-inspired cabinetry with custom hardware creates a seamless blend of elegance and functionality, perfectly suited for beachside living.
              </p>
              <Image 
                src="/images/kiawah/kiawah4.jpg" 
                alt="Kiawah kitchen storage" 
                width={640}
                height={1100}
                className="detailed-img"
              />
            </div>

            {/* Column B (Right) - Image, Image, Image */}
            <div className="column-b">
              <Image 
                src="/images/kiawah/kiawah5.jpg" 
                alt="Kiawah kitchen feature" 
                width={640}
                height={300}
                className="detailed-img"
              />
              <Image 
                src="/images/kiawah/kiawah6.jpg" 
                alt="Kiawah kitchen detail" 
                width={640}
                height={300}
                className="detailed-img-flex"
              />
              <Image 
                src="/images/kiawah/kiawah1.jpg" 
                alt="Kiawah kitchen final detail" 
                width={640}
                height={300}
                className="detailed-img-flex"
              />
            </div>
          </div>

          {/* Centered Blockquote */}
          <blockquote className="detailed-quote">
            &quot;We created a space that feels like a natural extension of the island itself—where the beauty of coastal living meets the comfort of home.&quot;
          </blockquote>

          {/* Single Large Image */}
          <div className="single-large-image">
            <Image 
              src="/images/kiawah/kiawah3.jpg" 
              alt="Kiawah Kitchen" 
              width={1400}
              height={800}
              className="detailed-img"
              style={{width: '100%', height: 'auto'}}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <span>© Kimmie Rokahr Design</span>
          <span>
            <a href="mailto:krokahr@gmail.com">krokahr@gmail.com</a> | <a href="tel:+17046857027">(704) 685-7027</a>
          </span>
          <span>Charlotte, NC</span>
        </div>
      </footer>
    </div>
  );
}
