import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function AltKitchen() {
  return (
    <div style={{minHeight: '100vh'}}>
      {/* Hero Section / Header */}
      <header id="home" className="hero hero-alt">
        <Navigation />
      </header>

      {/* Project Details Section */}
      <section id="project-details" className="about">
        <div className="about-grid-alt">
          <div className="about-logo">
            <Image 
              src="/images/alt/alt12.jpg" 
              alt="Alt Kitchen" 
              width={640}
              height={640}
              className="kr-logo-alt"
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className="about-text">
            <h2>Beauty in Every Inch</h2>
            <p>This townhome was designed for a homeowner downsizing from a much larger home, bringing a lifetime of memories and treasured items. The challenge? Making sure every piece had a place—and that their new home felt as beautiful, welcoming, and functional as the old one.</p>
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
              <p className="lead-text">
                Soothing, neutral cabinetry paired with elegant brass hardware and marble surfaces, creating a timeless and peaceful environment.
              </p>
              <Image 
                src="/images/alt/alt14.jpg" 
                alt="Open navy cabinet interior" 
                width={640}
                height={750}
                className="detailed-img"
              />
              <p className="detail-text">
                Every drawer, pullout, and cabinet is tailored to store exactly what the homeowners use, making unpacking and living effortless.
              </p>
              <Image 
                src="/images/alt/alt8.jpg" 
                alt="Hamper cabinet with towel" 
                width={640}
                height={750}
                className="detailed-img"
              />
              <p className="detail-text">
                Custom pull‑out hampers with top, hidden drawers, hardware selected for both beauty and ease of use, and cabinetry designed to look like elegant furniture.
              </p>
              <Image 
                src="/images/alt/alt2.jpg" 
                alt="Dishwasher under marble counter and window" 
                width={640}
                height={750}
                className="detailed-img"
              />
            </div>

            {/* Column B (Right) */}
            <div className="column-b">
              <Image 
                src="/images/alt/alt11.jpg" 
                alt="Tall white pantry cabinetry" 
                width={640}
                height={640}
                className="detailed-img"
              />
              <p className="detail-text">
                Custom‑designed bar area with woven mesh doors, concealed appliances, storage for barware, mixers, and even a dedicated spot for the homeowner&apos;s handbag—everything perfectly mapped out for easy entertaining.
              </p>
              <Image 
                src="/images/alt/alt9.jpg" 
                alt="White cabinetry with inset microwave" 
                width={640}
                height={280}
                className="detailed-img-flex"
              />
              <Image 
                src="/images/alt/alt6.jpg" 
                alt="Open white cabinet with tea canisters" 
                width={640}
                height={640}
                className="detailed-img-flex"
              />
              <Image 
                src="/images/alt/alt3.jpg" 
                alt="Double-sink laundry vanity" 
                width={640}
                height={640}
                className="detailed-img-flex"
              />
            </div>
          </div>

          {/* Centered Blockquote */}
          <blockquote className="detailed-quote">
            &quot;We inventoried everything the family wanted to keep, so from day one, they knew exactly where every item belonged and could immediately start enjoying their new townhome.&quot;
          </blockquote>

          {/* Four Image Grid */}
          <div className="four-image-grid">
            {/* Left Column */}
            <div className="left-column">
              <Image 
                src="/images/alt/alt17.jpg" 
                alt="Kitchen detail 15" 
                width={640}
                height={400}
                className="grid-img-short"
              />
              <Image 
                src="/images/alt/alt18.jpg" 
                alt="Kitchen detail 16" 
                width={640}
                height={800}
                className="grid-img-tall"
              />
            </div>

            {/* Right Column */}
            <div className="right-column">
              <Image 
                src="/images/alt/alt19.jpg" 
                alt="Kitchen detail 17" 
                width={640}
                height={800}
                className="grid-img-tall"
              />
              <Image 
                src="/images/alt/alt5.jpg" 
                alt="Kitchen detail 18" 
                width={640}
                height={400}
                className="grid-img-short"
              />
            </div>
          </div>

          {/* Credits */}
          <div className="credits">
            <span>In collaboration with West Trade Interiors and Dustin Peck Photography</span>
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
