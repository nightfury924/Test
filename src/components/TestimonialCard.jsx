const TestimonialCard = ({
  text,
  authorName,
  authorLocation,
  authorAvatar,
  rating = 5,
  className = "",
}) => {
  const renderStars = (rating) => {
    const stars = [];
    // Custom rounding: round to nearest half only if decimal >= 0.25
    let rounded;
    const decimal = rating - Math.floor(rating);
    if (decimal < 0.25) {
      rounded = Math.floor(rating);
    } else if (decimal < 0.75) {
      rounded = Math.floor(rating) + 0.5;
    } else {
      rounded = Math.ceil(rating);
    }
    for (let i = 1; i <= 5; i++) {
      if (rounded >= i) {
        // Full star SVG
        stars.push(
          <span key={i} style={{display:'inline-block',width:'1em',height:'1em',verticalAlign:'middle'}}>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1">
              <polygon points="12,2 15,9 22,9.2 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.2 9,9"/>
            </svg>
          </span>
        );
      } else if (rounded + 0.5 >= i) {
        // Half star SVG
        stars.push(
          <span key={i + '-half'} style={{display:'inline-block',width:'1em',height:'1em',verticalAlign:'middle'}}>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <defs>
                <linearGradient id={`half-gradient-${i}`} x1="0" x2="1" y1="0" y2="0">
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="white" stopOpacity="1" />
                </linearGradient>
              </defs>
              <polygon points="12,2 15,9 22,9.2 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.2 9,9" fill={`url(#half-gradient-${i})`} stroke="#FFD700" strokeWidth="1" />
            </svg>
          </span>
        );
      } else {
        // Empty star SVG
        stars.push(
          <span key={i + '-empty'} style={{display:'inline-block',width:'1em',height:'1em',verticalAlign:'middle'}}>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1">
              <polygon points="12,2 15,9 22,9.2 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.2 9,9"/>
            </svg>
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className={`testimonial-card ${className}`}>
      <div className="star-rating">{renderStars(rating)}</div>
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
