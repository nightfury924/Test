const FeatureCard = ({ title, description, className = "" }) => {
  return (
    <div className={`feature-card ${className}`}>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
