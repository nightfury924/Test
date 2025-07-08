import TestimonialCard from "./TestimonialCard";
import Button from "./Button";

const TestimonialsSection = () => {
  const testimonials = [
    // Column 1
    [
      {
        text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
        authorName: "Emily R",
        authorLocation: "USA",
        authorAvatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      },
      {
        text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
        authorName: "Javier L",
        authorLocation: "Spain",
        authorAvatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      },
      {
        text: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment here feels special.",
        authorName: "Patrick",
        authorLocation: "Product Designer at COVEO",
        authorAvatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      },
    ],
    // Column 2
    [
      {
        text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.",
        authorName: "Amit K",
        authorLocation: "India",
        authorAvatar:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=64&h=64&fit=crop&crop=face",
      },
      {
        text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
        authorName: "Lucas T",
        authorLocation: "Brazil",
        authorAvatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      },
    ],
    // Column 3
    [
      {
        text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
        authorName: "Sophie M",
        authorLocation: "UK",
        authorAvatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      },
      {
        text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
        authorName: "Nora S",
        authorLocation: "Canada",
        authorAvatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
      },
      {
        text: "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless. I'm hooked!",
        authorName: "Patrick",
        authorLocation: "Product Designer at COVEO",
        authorAvatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      },
    ],
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Users Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((column, columnIndex) => (
            <div key={columnIndex} className="testimonials-column">
              {column.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  text={testimonial.text}
                  authorName={testimonial.authorName}
                  authorLocation={testimonial.authorLocation}
                  authorAvatar={testimonial.authorAvatar}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="testimonials-more">
          <Button variant="seeMore" size="large">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
