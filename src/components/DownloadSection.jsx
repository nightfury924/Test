import Button from "./Button";

const DownloadSection = () => {
  return (
    <section className="download">
      <div className="download-container">
        <div className="download-content">
          <div className="download-text">
            <h2 className="download-title">
            <span className="download-title-top">Join the Fun – Download</span>
            <span className="download-title-bottom">MyBindle Now!</span>
            </h2>
            <p className="download-description">
              Your Social Network, Your Way
              <br />
              Download MyBindle Now and Be a Part of a Community That's Always
              Evolving!
            </p>
            <div className="download-buttons">
              <Button variant="download" size="medium">
                <img
                  src="images/app-store.png"
                  alt="Download on App Store"
                />
              </Button>
              <Button variant="download" size="medium">
                <img
                  src="images/play-store.png"
                  alt="Get it on Google Play"
                />
              </Button>
            </div>
          </div>

          <div className="download-phones">
            <div className="download-phone-primary">
              <div className="phone-mockup-download">
                <img
                  src="images/footer-img.png"
                  alt="MyBindle App"
                />
              </div>
            </div>
            <div className="download-phone-secondary">
              <div className="phone-mockup-download">
                <img
                  src="images/footer-img2.png"
                  alt="MyBindle Interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
