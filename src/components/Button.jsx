const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className = "",
  ...props
}) => {
  const getButtonClasses = () => {
    let classes = "";

    // Base button classes
    switch (variant) {
      case "primary":
        classes = "hero-cta";
        break;
      case "charity":
        classes = "charity-cta";
        break;
      case "download":
        classes = "download-btn";
        break;
      case "seeMore":
        classes = "see-more-btn";
        break;
      default:
        classes = "hero-cta";
    }

    return `${classes} ${className}`;
  };

  return (
    <button className={getButtonClasses()} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
