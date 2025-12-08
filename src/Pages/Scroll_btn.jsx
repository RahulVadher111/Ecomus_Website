import React, { useState, useEffect } from "react";
// import "./ScrollTop.css"; 

function Scroll_btn() {
 const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Track scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const winHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / winHeight) * 100;
    setScrollProgress(scrolled);

    setShowButton(scrollTop > 100); 
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="scroll-to-top-wrapper">
      {showButton && (
        <div className="scroll-btn" onClick={scrollToTop}>
          <span className="arrow"><i class="bi bi-arrow-up"></i></span>
          <div className="progress-bar" style={{ height: `${scrollProgress}%` }}></div>
        </div>  
      )}
    </div>
  );
}

export default Scroll_btn;
