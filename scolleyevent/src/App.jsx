import React, { useState, useEffect } from "react";
import "./App.css"
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Book Content */}
      <div className="book-content">
        <h1> Book Title: Journey Through React</h1>
        {[...Array(50)].map((_, i) => (
          <p key={i}>
            Chapter {i + 1}: 
          </p>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button className="scroll-btn" onClick={scrollToTop}>
          ⬆ Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
