import React, { useState, useEffect } from "react";

function Scroll_btn() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = (scrollTop / height) * 100;
      setScrollProgress(percent);

      setShowButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-to-top-wrapper">
      {showButton && (
        <div className="scroll-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          
          {/* BORDER PROGRESS */}
          <div className="border-progress" style={{ "--p": scrollProgress }}></div>

          {/* ARROW */}
          <span className="arrow-icon"><i class="bi bi-chevron-up"></i></span>
        </div>
      )}
    </div>
  );
}

export default Scroll_btn;
