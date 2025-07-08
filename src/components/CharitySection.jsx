import Button from "./Button";

const CharitySection = () => {
  return (
    <section className="charity">
      <div className="charity-container">
        <div className="charity-content">
          <div className="charity-text">
            <h2 className="charity-title">
              <span className="charity-title-top"> Be the Reason</span>
              <span className="charity-title-bottom">Someone Smiles Today!</span>
            </h2>
            <p className="charity-description">
              Your generosity can change lives every donation brings hope,
              support, and a brighter future. Give today and make a difference!
            </p>
            <Button variant="charity" size="medium">
              Donate Now
            </Button>
          </div>

          <div className="charity-phones">
            <div className="charity-phone-primary">
              <img
                src="images/donations-payments.png"
                alt="Payment Interface"
              />
            </div>
            <div className="charity-phone-secondary">
              <img
                src="images/donations-thanks.png"
                alt="Thank You Interface"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharitySection;
