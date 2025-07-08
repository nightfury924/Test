import MyBindleLogo from "./MyBindleLogo";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <MyBindleLogo />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Stay Connected
              <br />
              Stay Social
              <br />
              Stay You!
            </h1>
            <p className="hero-description">
              A place where friendships grow, communities thrive, and moments
              turn into unforgettable experiences. Whether you're looking to
              reconnect with old friends, build new relationships, or share what
              matters most to you – MyBindle is your home on the internet.
            </p>
            <Button variant="primary" size="medium">
              Get Started
            </Button>
          </div>

          <div className="hero-phone">
            <div className="phone-mockup">
              <img
                src="images/footer-img2.png"
                alt="MyBindle App Interface"
              />
            </div>
            <div className="floating-card connection">
              🔥 Seamless Connections
            </div>
            <div className="floating-card explore">🌎 Discover & Explore</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
