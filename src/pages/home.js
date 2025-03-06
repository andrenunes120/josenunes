import React, { useState, useEffect } from "react";
import "../App.css";

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);   

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("no-scroll");       // Added no-scroll class
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isPopupOpen]);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-left text-white ">
        <img
          src={"/background2.png"}
          alt="background2"
          className="w-auto md:w-full h-full object-cover filter brightness-50 object-right md:object-center"
        />
        <div className="absolute top-1/4 left-16 transform">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            Concessionário José Nunes
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2 max-w-md lg:max-w-2xl xl:max-w-3xl">
            Descubra a eletricidade e gás Repsol
          </h1>
          <button
            onClick={togglePopup}
            className="mt-8 px-6 py-3 bg-white text-orange-600 font-bold rounded"
          >
            Contacte-nos já
          </button>
        </div>
      </section>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-8 rounded shadow-lg">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-orange-600 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Contacte-nos através dos números abaixo</h2>
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
              <p className="text-sm text-gray-400">Apoio ao Cliente (segunda a sexta, das 09h às 20h)</p>
            </div>
          </div>
        </div>
      )}


      {/* Seção de Informações da Empresa */}
      <section className="bg-gray-200 m-5  rounded-lg ">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <img src="/imagem1212.jpg" alt="Imagem da Empresa" className="w-full md:w-1/2 rounded-lg" />
          <div className="md:ml-5 mt-5 md:mt-0 max-w-2xl p-5">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Quem somos</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 m-5 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="md:mr-5 mb-5 md:mb-0 max-w-2xl p-5">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Onde estamos</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.8567663947897!2d-8.52778433746847!3d41.1354854947783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2463063d70db29%3A0xae526d43ee4d00bb!2zSm9zw6kgTnVuZXMgLSBTb2MuIERpc3RyaWJ1acOnw6NvIGRlIEfDoXM!5e0!3m2!1spt-PT!2spt!4v1738769483104!5m2!1spt-PT!2spt"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg"
            title="Google Maps Embed"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;