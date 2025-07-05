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
            <h2>Kimmie Rokahr Design</h2>
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
            <Link href="/cope" className="change-cursor">
              <Image 
                src="/images/cope/cope11.jpg" 
                alt="Kitchen 1" 
                width={440}
                height={440}
                className="project-img"
              />
            </Link>
          </div>
          <div className="project-text">
            <h2>Effortless Elegance Kitchen</h2>
            <p>This townhome was designed for a homeowner downsizing from a much larger home, bringing a lifetime of memories and treasured items. The challenge? Making sure every piece had a place—and that their new home felt as beautiful, welcoming, and functional as the old one.</p>
          </div>
        </div>
      </section>

      {/* Project Divider II */}
      <div className="project-divider">
        <span className="roman-numeral">II</span>
      </div>

      {/* Second Project */}
      <section className="project">
        <div className="project-grid reverse">
          <div className="project-text">
            <h2>Family Life in Foxcroft</h2>
            <p>A warm, inviting family kitchen designed for daily life, entertaining, and creating memories. This space balances function with beauty, providing organized storage and prep areas while maintaining an open, welcoming atmosphere for family gatherings.</p>
          </div>
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
        </div>
      </section>

      {/* Project Divider III */}
      <div className="project-divider">
        <span className="roman-numeral">III</span>
      </div>

      {/* Third Project */}
      <section className="project">
        <div className="project-grid">
          <div className="project-image">
            <Link href="/kiawah" className="change-cursor">
              <Image 
                src="/images/kiawah/kiawah1.jpg" 
                alt="Kiawah Island Retreat" 
                width={440}
                height={440}
                className="project-img"
              />
            </Link>
          </div>
          <div className="project-text">
            <h2>Kiawah Island Retreat</h2>
            <p>A sophisticated coastal kitchen that captures the essence of island living while providing all the amenities of a modern culinary space. Clean lines, natural materials, and thoughtful design create a serene cooking environment.</p>
          </div>
        </div>
      </section>

      {/* Sliding Gallery */}
      <section className="slider-gallery">
        <div className="slider-container">
          <div className="slider-track">
            {/* Cope folder images */}
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope1.jpg" alt="Kitchen Design 1" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope2.jpg" alt="Kitchen Design 2" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope3.jpg" alt="Kitchen Design 3" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope4.jpg" alt="Kitchen Design 4" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope5.jpg" alt="Kitchen Design 5" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope6.jpg" alt="Kitchen Design 6" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope7.jpg" alt="Kitchen Design 7" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope8.jpg" alt="Kitchen Design 8" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope9.jpg" alt="Kitchen Design 9" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope10.jpg" alt="Kitchen Design 10" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope11.jpg" alt="Kitchen Design 11" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope12.jpg" alt="Kitchen Design 12" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope13.jpg" alt="Kitchen Design 13" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope14.jpg" alt="Kitchen Design 14" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope15.jpg" alt="Kitchen Design 15" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope16.jpg" alt="Kitchen Design 16" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope17.jpg" alt="Kitchen Design 17" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope18.jpg" alt="Kitchen Design 18" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope19.jpg" alt="Kitchen Design 19" width={300} height={300} className="slider-img" />
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

            {/* Cope folder images (duplicate for seamless loop) */}
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope1.jpg" alt="Kitchen Design 1" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope2.jpg" alt="Kitchen Design 2" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/cope" className="change-cursor">
                <Image src="/images/cope/cope3.jpg" alt="Kitchen Design 3" width={300} height={300} className="slider-img" />
              </Link>
            </div>

            {/* Kiawah folder images */}
            <div className="slide">
              <Link href="/kiawah" className="change-cursor">
                <Image src="/images/kiawah/kiawah1.jpg" alt="Kiawah Design 1" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/kiawah" className="change-cursor">
                <Image src="/images/kiawah/kiawah2.jpg" alt="Kiawah Design 2" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/kiawah" className="change-cursor">
                <Image src="/images/kiawah/kiawah3.jpg" alt="Kiawah Design 3" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/kiawah" className="change-cursor">
                <Image src="/images/kiawah/kiawah4.jpg" alt="Kiawah Design 4" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/kiawah" className="change-cursor">
                <Image src="/images/kiawah/kiawah5.jpg" alt="Kiawah Design 5" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/kiawah" className="change-cursor">
                <Image src="/images/kiawah/kiawah6.jpg" alt="Kiawah Design 6" width={300} height={300} className="slider-img" />
              </Link>
            </div>
            <div className="slide">
              <Link href="/kiawah" className="change-cursor">
                <Image src="/images/kiawah/kiawah7.jpg" alt="Kiawah Design 7" width={300} height={300} className="slider-img" />
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
