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
            <h2>Simply Livable, Beautifully Bright</h2>
            <p>This Kiawah cottage was thoughtfully reimagined to create an easy flow between kitchen, living, and outdoor spaces, welcoming both lively gatherings and quiet relaxation. Bright finishes, natural textures, and smart, simple design choices ensure each room feels connected, fresh, and uncluttered. With the kitchen positioned to blend seamlessly into the heart of the home, daily life here is naturally comfortable and effortlessly inviting.</p>
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
                Playful fish-scale tiles add a touch of coastal charm to the bathroom, bringing texture and a hint of whimsy to this fresh, easygoing space.
              </p>
              <Image 
                src="/images/kiawah/kiawah2.jpg" 
                alt="Kiawah kitchen detail" 
                width={640}
                height={1100}
                className="detailed-img"
              />
              <p className="detail-text">
                Every inch was touched, from popcorn ceilings to pine floors, to create a cottage ready for gatherings and getaways.
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
            Even in a small cottage with people, pets, and beach gear coming and going, we wanted it to feel bright, welcoming, and easy to keep tidy.
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
