import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div style={{minHeight: '100vh'}}>
      {/* Hero Section / Header */}
      <header id="home" className="hero">
        <Navigation />
      </header>

      {/* About / Intro Section */}
      <section id="about" className="about">
        <div className="about-grid">
          <div className="about-logo">
            <Image 
              src="/images/KR_logo.png" 
              alt="KR Logo" 
              width={640}
              height={640}
              className="kr-logo"
            />
          </div>
          <div className="about-text">
            <p>Kimmie Rokahr, a renowned kitchen and bath designer in Charlotte, NC, is known for her innovative approach and meticulous detail. Although she only began her own studio in 2025, she has 15 years of experience in the industry working on over 100 projects, specializing in creating functional, elegant kitchens blending modern aesthetics with timeless design principles.</p>
          </div>
        </div>
      </section>

      {/* Project Divider I */}
      <div className="project-divider">
        <span className="roman-numeral">I</span>
      </div>

      {/* Featured Project / Case Study */}
      <section id="portfolio" className="project">
        <div className="project-grid">
          <div className="project-image">
            <Link href="/alt" className="change-cursor">
              <Image 
                src="/images/alt/alt11.jpg" 
                alt="Kitchen 1" 
                width={440}
                height={440}
                className="project-img"
              />
            </Link>
          </div>
          <div className="project-text">
            <h2>Effortless Elegance</h2>
            <p>This townhome was designed for a homeowner transitioning to a smaller space, without sacrificing comfort or beauty. Every cabinet, drawer, and hidden storage solution was created to fit the client&apos;s lifestyle—from a concealed coffee nook for quiet mornings to a custom wet bar perfect for entertaining friends. Thoughtful details, like hidden pull-out hampers in the master bath and purpose-built storage for every item, ensure that everything has a place. The result? A home that feels welcoming, organized, and ready to enjoy from the moment you move in.</p>
          </div>
        </div>
      </section>

      {/* Project Divider II */}
      <div className="project-divider">
        <span className="roman-numeral">II</span>
      </div>

      {/* Portfolio Preview / Family Life in Foxcroft */}
      <section className="project">
        <div className="project-grid project-grid-reverse">
          <div className="project-image">
            <Link href="/bhoj" className="change-cursor">
              <Image 
                src="/images/bhoj/bhoj1.jpg" 
                alt="Family Life in Foxcroft" 
                width={440}
                height={440}
                className="project-img"
              />
            </Link>
          </div>
          <div className="project-text">
            <h2>Family Life in Foxcroft</h2>
            <p>This kitchen was crafted for a lively family whose home is always in motion. With dual islands, a spacious bar, and carefully planned zones for cooking, baking, and gathering, every detail was tailored to fit the way they live and entertain. From a custom rollout for a treasured coffee maker to smart pull-outs for spices, baking tools, and wraps, each feature was thoughtfully designed to keep the space organized and welcoming. Stained alder accents and statement lighting add warmth and character, seamlessly transitioning the kitchen from bustling mornings to memorable evenings. The result is a kitchen that keeps pace with busy days and brings everyone together—making daily routines and special celebrations a joy.</p>
          </div>
        </div>
      </section>

      {/* Project Divider III */}
      <div className="project-divider">
        <span className="roman-numeral">III</span>
      </div>

      {/* Portfolio Preview / Kiawah Island Retreat */}
      <section className="project">
        <div className="project-grid">
          <div className="project-image">
            <Link href="/kiawah" className="change-cursor">
              <Image 
                src="/images/kiawah/kiawah7.jpg" 
                alt="Kiawah Island Retreat" 
                width={440}
                height={440}
                className="project-img"
              />
            </Link>
          </div>
          <div className="project-text">
            <h2>Kiawah Island Retreat</h2>
            <p>This coastal kitchen captures the essence of island living while maintaining sophisticated functionality. Designed for a family who loves to entertain, every detail reflects the natural beauty of Kiawah Island. Light-filled spaces, natural materials, and thoughtful storage solutions create a seamless blend of luxury and relaxed coastal charm. The result is a kitchen that feels like a natural extension of the island itself, where memorable meals and gatherings flow as naturally as the ocean breeze.</p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="project-divider">
        <span className="roman-numeral triple-dash"></span>
      </div>

      {/* Auto-Sliding Portfolio Gallery */}
      <section className="slider-gallery">
        <div className="slider-container">
          <div className="slider-track">
            {/* Alt folder images */}
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt1.jpg" alt="Kitchen Design 1" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt2.jpg" alt="Kitchen Design 2" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt3.jpg" alt="Kitchen Design 3" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt4.jpg" alt="Kitchen Design 4" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt5.jpg" alt="Kitchen Design 5" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt6.jpg" alt="Kitchen Design 6" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt7.jpg" alt="Kitchen Design 7" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt8.jpg" alt="Kitchen Design 8" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt9.jpg" alt="Kitchen Design 9" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt10.jpg" alt="Kitchen Design 10" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt11.jpg" alt="Kitchen Design 11" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt12.jpg" alt="Kitchen Design 12" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt13.jpg" alt="Kitchen Design 13" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt14.jpg" alt="Kitchen Design 14" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt15.jpg" alt="Kitchen Design 15" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt16.jpg" alt="Kitchen Design 16" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt17.jpg" alt="Kitchen Design 17" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt18.jpg" alt="Kitchen Design 18" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt19.jpg" alt="Kitchen Design 19" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            {/* Bhoj folder images */}
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj1.jpg" alt="Kitchen Design 20" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj2.jpg" alt="Kitchen Design 21" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj3.jpg" alt="Kitchen Design 22" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj4.jpg" alt="Kitchen Design 23" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj5.jpg" alt="Kitchen Design 24" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj6.jpg" alt="Kitchen Design 25" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            
            {/* Duplicate images for seamless loop */}
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt1.jpg" alt="Kitchen Design 1" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt2.jpg" alt="Kitchen Design 2" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt3.jpg" alt="Kitchen Design 3" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt4.jpg" alt="Kitchen Design 4" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt5.jpg" alt="Kitchen Design 5" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt6.jpg" alt="Kitchen Design 6" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt7.jpg" alt="Kitchen Design 7" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt8.jpg" alt="Kitchen Design 8" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt9.jpg" alt="Kitchen Design 9" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt10.jpg" alt="Kitchen Design 10" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt11.jpg" alt="Kitchen Design 11" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt12.jpg" alt="Kitchen Design 12" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt13.jpg" alt="Kitchen Design 13" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt14.jpg" alt="Kitchen Design 14" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt15.jpg" alt="Kitchen Design 15" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt16.jpg" alt="Kitchen Design 16" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt17.jpg" alt="Kitchen Design 17" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt18.jpg" alt="Kitchen Design 18" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/alt" className="change-cursor">
                <Image src="/images/alt/alt19.jpg" alt="Kitchen Design 19" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj1.jpg" alt="Kitchen Design 20" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj2.jpg" alt="Kitchen Design 21" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj3.jpg" alt="Kitchen Design 22" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj4.jpg" alt="Kitchen Design 23" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj5.jpg" alt="Kitchen Design 24" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/bhoj" className="change-cursor">
                <Image src="/images/bhoj/bhoj6.jpg" alt="Kitchen Design 25" width={300} height={300} className="slider-img" />
              </Link>
            </div>
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
