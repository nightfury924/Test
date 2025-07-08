import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "🔥 Seamless Connections",
      description:
        "Stay in touch with friends, family, and like-minded people with just a tap.",
    },
    {
      title: "📸 Share Your Story",
      description:
        "Upload photos, videos, and updates to let the world know what's happening in your life.",
    },
    {
      title: "💬 Real-Time Chat",
      description:
        "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
    },
    {
      title: "🔒 Privacy First",
      description:
        "Your data, your control. We prioritize your privacy with world-class security.",
    },
    {
      title: "🌎 Discover & Explore",
      description:
        "Find trending content, join communities, and follow pages that match your interests.",
    },
    {
      title: "💼 Grow Your Business",
      description:
        "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Features That Keep You Hooked!</h2>
          <p className="section-subtitle">
            Meet, Chat, Share – Anytime, Anywhere!
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
