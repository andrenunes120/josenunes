import React from "react";

function Footer() {
  return (
    <footer className="bg-[#FF6600] py-4">
      <div className="container mx-auto text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://www.instagram.com/josenuneslda/" className="hover:opacity-75 transition-opacity">
            <img src="/instagram.png" alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:opacity-75 transition-opacity">
            <img src="/facebook.png" alt="Facebook" className="h-8 w-8" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-white text-sm">
          © 2024 José Nunes, Lda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;