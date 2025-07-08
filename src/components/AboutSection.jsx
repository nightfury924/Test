const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-devices">
            <img
              src="images/multiple-devices.png"
              alt="MyBindle on Multiple Devices"
              className="devices-image"
            />
          </div>

          <div className="about-text">
            <h2 className="about-title">
              Where Every Click Sparks a Connection!
            </h2>
            <p className="about-description">
              A small act of kindness today can create a lifetime of impact for
              someone in need. Give from the heart and change a life!
            </p>

            <div className="about-features">
              <div className="about-feature">
                <h3 className="about-feature-title">🎥 Short Videos & Reels</h3>
                <p className="about-feature-description">
                  Share engaging, bite-sized content that keeps everyone
                  entertained.
                </p>
              </div>

              <div className="about-feature">
                <h3 className="about-feature-title">🔔 Smart Notifications</h3>
                <p className="about-feature-description">
                  Stay updated on what matters without the noise.
                </p>
              </div>

              <div className="about-feature">
                <h3 className="about-feature-title">
                  👥 Interest-Based Communities
                </h3>
                <p className="about-feature-description">
                  Join groups and discussions that match your passion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
