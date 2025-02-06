import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Define estado baseado na rolagem
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white fixed top-0 w-full z-50 flex justify-center items-center p-4 transition-shadow duration-300 ${
        scrolled ? "shadow-lg border-b border-gray-500" : "shadow-md"
      }`}
    >
      <a href="/home">
        <img src="/MainLogo.png" alt="Repsol Logo" className="h-12" />
      </a>
    </nav>
  );
}

export default Navbar;
