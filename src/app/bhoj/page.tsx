import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function BhojKitchen() {
  return (
    <div style={{minHeight: '100vh'}}>
      {/* Hero Section / Header */}
      <header id="home" className="hero hero-bhoj">
        <Navigation />
      </header>

      {/* Project Details Section */}
      <section id="project-details" className="about">
        <div className="about-grid-alt">
          <div className="about-text">
            <h2>Busy Days, Beautiful Nights</h2>
            <p>Created for a lively family always on the move, this kitchen adapts to every occasion—from weekday routines to weekend celebrations. Dual islands, smart storage, and distinct zones make it as welcoming for busy mornings as it is for evening gatherings, keeping life connected and effortless.</p>
          </div>
          <div className="about-logo">
            <Image 
              src="/images/bhoj/bhoj2.jpg" 
              alt="Bhoj Kitchen" 
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
            {/* Column A (Left) */}
            <div className="column-a">
              <Image 
                src="/images/bhoj/bhoj3.jpg" 
                alt="Open navy cabinet interior" 
                width={640}
                height={750}
                className="detailed-img"
              />
              <p className="detail-text">
                The stovetop area features bookmatched stone for a seamless, elegant backdrop, while pull-out cabinets on either side keep spices, oils, and cooking essentials perfectly organized and within reach.
              </p>
              <Image 
                src="/images/bhoj/bhoj6.jpg" 
                alt="Tall white pantry cabinetry" 
                width={640}
                height={750}
                className="detailed-img"
              />
            </div>

            {/* Column B (Right) */}
            <div className="column-b">
              <p className="detail-text">
                The bar&apos;s stained alder backsplash and custom painting create a warm transition from the kitchen to the veranda, making it the perfect spot to unwind as the day turns to evening.
              </p>
              <Image 
                src="/images/bhoj/bhoj4.jpg" 
                alt="Hamper cabinet with towel" 
                width={640}
                height={640}
                className="detailed-img-flex"
              />
              <p className="detail-text">
                A custom rollout was designed to perfectly fit the family&apos;s cherished coffee maker, with a dedicated drawer below for spoons and all the essentials—turning every morning routine into a special moment.
              </p>
              <Image 
                src="/images/bhoj/bhoj5.jpg" 
                alt="Double-sink laundry vanity" 
                width={640}
                height={640}
                className="detailed-img-flex"
              />
            </div>
          </div>

          {/* Centered Blockquote */}
          <blockquote className="detailed-quote">
            &quot;We designed each zone so the kitchen could keep up with busy days and big gatherings—making sure there&apos;s room for everything the family does, and everyone they love.&quot;
          </blockquote>

          {/* Single Large Image */}
          <div className="single-large-image">
            <Image 
              src="/images/bhoj/bhoj1.jpg" 
              alt="Bhoj Kitchen" 
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
