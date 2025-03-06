import React from "react";
import { useState, useEffect } from 'react';

function TopLinks() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.pathname;

    // Set the active link based on the current URL
    setActiveLink(currentUrl);
  }, []);

  return (
    <section className="bg-white border-t border-b border-gray-300 flex flex-col md:flex-row justify-center gap-4 py-2 w-full font-bold text-lg">
      <a
        href="/energia"
        className={`px-4 py-2 rounded relative ${ // Added relative positioning
          activeLink === '/energia' ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
        } transition`}
      >
        Eletricidade
        {activeLink === '/energia' && <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-600"></span>} {/* Orange bar */}
      </a>
      <a
        href="/products"
        className={`px-4 py-2 rounded relative ${ // Added relative positioning
          activeLink === '/products' ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
        } transition`}
      >
        Garrafas de Gás
        {activeLink === '/products' && <span className="absolute bottom-0 right-0 left-0 w-1/2 md:w-full h-0.5 bg-orange-600 mx-auto"></span>} {/* Orange bar */}
      </a>
      <a
        href="/gasoleo"
        className={`px-4 py-2 rounded relative ${ // Added relative positioning
          activeLink === '/gasoleo' ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
        } transition`}
      >
        Gasóleo de Aquecimento
        {activeLink === '/gasoleo' && <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-600"></span>} {/* Orange bar */}
      </a>
    </section>
  );
}


export default TopLinks;
