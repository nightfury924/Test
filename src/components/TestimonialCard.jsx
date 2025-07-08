const TestimonialCard = ({
  text,
  authorName,
  authorLocation,
  authorAvatar,
  className = "",
}) => {
  return (
    <div className={`testimonial-card ${className}`}>
      <div className="star-rating">
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <div className="author-avatar">
          <img src={authorAvatar} alt={authorName} />
        </div>
        <div className="author-info">
          <h4 className="author-name">{authorName}</h4>
          <p className="author-location">{authorLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
