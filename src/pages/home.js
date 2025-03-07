import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import categories from "../components/categories";

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const mainContentRef = useRef(null);

  const togglePopup = (e) => {
    e.stopPropagation();
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const mainContent = mainContentRef.current;

    if (isPopupOpen) {
      document.body.classList.add("no-scroll");
      if (mainContent) {
        Array.from(mainContent.querySelectorAll('a, button, input, select, textarea')).forEach(element => {
          element.setAttribute('tabIndex', '-1');
        });
      }
    } else {
      document.body.classList.remove("no-scroll");
      if (mainContent) {
        Array.from(mainContent.querySelectorAll('a, button, input, select, textarea')).forEach(element => {
          element.removeAttribute('tabIndex');
        });
      }
    }
    return () => {
      document.body.classList.remove("no-scroll");
      if (mainContent) {
        Array.from(mainContent.querySelectorAll('a, button, input, select, textarea')).forEach(element => {
          element.removeAttribute('tabIndex');
        });
      }
    };
  }, [isPopupOpen]);

  const [activeCategory, setActiveCategory] = useState("gas-butano");


  return (
    <div ref={mainContentRef}>
      {/* Hero Section */}
      <section className="relative text-left text-white">
        <img
          src={"/background2.png"}
          alt="background2"
          className="w-auto md:w-full h-full object-cover filter brightness-50 object-right md:object-center"
        />
        <div className="absolute top-1/4 left-16 transform">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white" style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}>
            Concessionário José Nunes
          </h2>
          <h1 className="font-bold leading-tight mt-2 max-w-md lg:max-w-2xl xl:max-w-3xl" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
            Descubra a eletricidade e gás Repsol
          </h1>
          <button
            onClick={togglePopup}
            className="mt-8 px-6 py-3 bg-white text-orange-600 font-bold rounded hover:bg-gray-100 transition-colors"
          >
            Contacte-nos já
          </button>
        </div>
      </section>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 popup-container">
          <div className="relative bg-white p-8 rounded shadow-lg">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-3 text-orange-600 text-2xl font-bold hover:text-orange-700 transition-colors"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-800">
              Contacte-nos através dos números abaixo
            </h2>
            <div className="text-center text-orange-600">
              <p className="text-lg font-bold">Telemóveis</p>
              <ul className="mb-4 text-black">
                <li>(+351) 933 368 655</li>
                <li>(+351) 913 703 072</li>
              </ul>
              <p className="text-lg font-bold mt-4">Telefone</p>
              <ul className="mb-4 text-black">
                <li>(+351) 224 830 326</li>
              </ul>
              <p className="text-sm text-gray-400">
                Apoio ao Cliente (segunda a sexta, das 09h às 20h)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Products Menu */}
      <section className="products mt-8 p-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          Tipologia e características de garrafas
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 font-bold border-b-2 ${
                activeCategory === category.id
                  ? "border-orange-600 text-orange-600"
                  : "border-transparent text-gray-700 hover:text-orange-600"
              } transition-colors`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories
            .find((category) => category.id === activeCategory)
            .products.map((product) => (
              <div
                key={product.title}
                className="bg-white border border-gray-300 rounded-lg shadow-md p-4 text-center transition transform hover:scale-105"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-blue-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Onde Comprar */}
      <section className="py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-8">
          Onde comprar as garrafas de gás Repsol
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Visite-nos */}
          <div className="bg-white border-2 border-gray-200 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Visite-nos</h3>
            <p className="mb-4 text-gray-700">
              Dirija-se às nossas instalações para adquirir suas garrafas de gás
              com total segurança e rapidez.
            </p>
            <p className="font-bold text-gray-700">Horário:</p>
            <ul className="mb-4 text-gray-700">
              <li>Segunda a Sexta: 9h - 19h</li>
              <li>Sábado: 9h - 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
            <iframe
              className="w-full h-48 border rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.8567663947897!2d-8.52778433746847!3d41.1354854947783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2463063d70db29%3A0xae526d43ee4d00bb!2zSm9zw6kgTnVuZXMgLSBTb2MuIERpc3RyaWJ1acOnw6NvIGRlIEGDoXM!5e0!3m2!1spt-PT!2spt!4v1738769483104!5m2!1spt-PT!2spt"
              allowFullScreen=""
              loading="lazy"
              title="Localização"
            ></iframe>
          </div>

          {/* Card Fale Connosco */}
          <div className="bg-white border-2 border-gray-200 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Fale Connosco
            </h3>
            <p className="mb-4 text-gray-700">
              Entre em contacto connosco através dos números abaixo:
            </p>
            <p className="font-bold text-gray-700">Telemóveis:</p>
            <ul className="mb-4 text-gray-700">
              <li>(+351) 933 368 655</li>
              <li>(+351) 913 703 072</li>
            </ul>
            <p className="font-bold text-gray-700">Telefone:</p>
            <ul className="mb-4 text-gray-700">
              <li>(+351) 224 830 326</li>
            </ul>
            <p className="font-bold text-gray-700">Email:</p>
            <ul className="text-gray-700">
              <li>josenuneslda@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;