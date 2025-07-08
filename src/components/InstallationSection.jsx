const InstallationSection = () => {
  const steps = [
    {
      title: "Download",
      description: "Open Play Store or App Store",
    },
    {
      title: "Install App",
      description: "The app will install automatically.",
    },
    {
      title: "Ready to Use",
      description: "Sign up or log in to start exploring!",
    },
  ];

  return (
    <section className="installation">
      <div className="container">
        <div className="installation-header">
          <h2 className="section-title">How to Install Our App</h2>
          <p className="section-subtitle">
            Getting started is quick and easy! Follow these simple steps to
            install and start using MyBindle today.
          </p>
        </div>

        <div className="installation-steps">
          <div className="step-numbers">
            <div className="step-number active">01</div>
            <div className="step-connector"></div>
            <div className="step-number">02</div>
            <div className="step-connector"></div>
            <div className="step-number">03</div>
          </div>

          <div className="installation-cards">
            {steps.map((step, index) => (
              <div key={index} className="installation-card">
                <h3 className="installation-title">{step.title}</h3>
                <p className="installation-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;
