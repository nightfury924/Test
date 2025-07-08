import TestimonialCard from "./TestimonialCard";
import Button from "./Button";
import { useState } from "react";

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const testimonials = [
    // Column 1
    [
      {
        text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
        authorName: "Emily R",
        authorLocation: "USA",
        authorAvatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
        rating: 4.7,
      },
      {
        text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
        authorName: "Javier L",
        authorLocation: "Spain",
        authorAvatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
        rating: 5,
      },
      {
        text: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment here feels special.",
        authorName: "Patrick",
        authorLocation: "Product Designer at COVEO",
        authorAvatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        rating: 4.2,
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
        rating: 3.5,
      },
      {
        text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
        authorName: "Lucas T",
        authorLocation: "Brazil",
        authorAvatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
        rating: 4.9,
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
        rating: 4.0,
      },
      {
        text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
        authorName: "Nora S",
        authorLocation: "Canada",
        authorAvatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
        rating: 3.8,
      },
      {
        text: "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless. I'm hooked!",
        authorName: "Patrick",
        authorLocation: "Product Designer at COVEO",
        authorAvatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
        rating: 5,
      },
    ],
  ];

  // Helper to render fade overlay on last card of each column if it's in the last row
  const renderCardWithFade = (card, isFaded, key) => (
    <div key={key} style={{ position: "relative" }}>
      {(!showAll && isFaded) ? (
        <div className="testimonial-card faded">
          <p className="testimonial-text">{card.text}</p>
        </div>
      ) : (
        <TestimonialCard
          text={card.text}
          authorName={card.authorName}
          authorLocation={card.authorLocation}
          authorAvatar={card.authorAvatar}
          rating={card.rating}
        />
      )}
      {isFaded && !showAll && <div className="testimonial-fade-overlay" />}
    </div>
  );

  // Find the max number of cards in any column (last row index)
  const lastRowIndex = Math.max(
    testimonials[0].length,
    testimonials[1].length,
    testimonials[2].length
  ) - 1;

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Users Say</h2>
        </div>
        <div className="testimonials-grid">
          {/* Column 1: fade if last card is in last row */}
          <div className="testimonials-column">
            {testimonials[0].map((testimonial, idx) =>
              idx === lastRowIndex && idx === testimonials[0].length - 1
                ? renderCardWithFade(testimonial, true, idx)
                : (
                  <TestimonialCard
                    key={idx}
                    text={testimonial.text}
                    authorName={testimonial.authorName}
                    authorLocation={testimonial.authorLocation}
                    authorAvatar={testimonial.authorAvatar}
                    rating={testimonial.rating}
                  />
                )
            )}
          </div>
          {/* Column 2: fade if last card is in last row */}
          <div className="testimonials-column">
            {testimonials[1].map((testimonial, idx) =>
              idx === lastRowIndex && idx === testimonials[1].length - 1
                ? renderCardWithFade(testimonial, true, idx)
                : (
                  <TestimonialCard
                    key={idx}
                    text={testimonial.text}
                    authorName={testimonial.authorName}
                    authorLocation={testimonial.authorLocation}
                    authorAvatar={testimonial.authorAvatar}
                    rating={testimonial.rating}
                  />
                )
            )}
          </div>
          {/* Column 3: fade if last card is in last row */}
          <div className="testimonials-column">
            {testimonials[2].map((testimonial, idx) =>
              idx === lastRowIndex && idx === testimonials[2].length - 1
                ? renderCardWithFade(testimonial, true, idx)
                : (
                  <TestimonialCard
                    key={idx}
                    text={testimonial.text}
                    authorName={testimonial.authorName}
                    authorLocation={testimonial.authorLocation}
                    authorAvatar={testimonial.authorAvatar}
                    rating={testimonial.rating}
                  />
                )
            )}
          </div>
        </div>
        <div className="testimonials-more">
          <Button
            variant="seeMore"
            size="large"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "See Less" : "See More"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
