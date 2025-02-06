import React, { useState } from "react";

function Products() {
  const [activeCategory, setActiveCategory] = useState("gas-butano");

  const categories = [
    {
      id: "gas-butano",
      name: "Gás Butano",
      products: [
        {
          img: "/k6.png",
          title: "K6",
          description: "Leves e adaptáveis. As garrafas de gás butano K6 foram rigorosamente pensadas para lhe facilitar a vida.",
        },
        {
          img: "/k11.png",
          title: "K11",
          description: "Práticas, cómodas e funcionais. Com 11 kg de gás butano, duas opções para os mesmos usos.",
        },
        {
          img: "/13kg.png",
          title: "Garrafa 13kg",
          description: "Usada essencialmente no ambiente doméstico.",
        },
        {
          img: "/12,5KG.png",
          title: "Garrafa 12,5kg",
          description: "Concebida especialmente para banhos, aquecimento, exterior e interior.",
        },
      ],
    },
    {
      id: "gas-propano",
      name: "Gás Propano",
      products: [
        {
          img: "/11KG.png",
          title: "Garrafa 11kg",
          description: "Uma garrafa de gás com alto poder calorífico.",
        },
        {
          img: "/35kg.png",
          title: "Garrafa 35kg",
          description: "Grande duração para diferentes usos.",
        },
        {
          img: "/45kg.png",
          title: "Garrafa 45kg",
          description: "Grande duração para diferentes usos.",
        },
      ],
    },
    {
      id: "carburacao",
      name: "Garrafas Carburação",
      products: [
        {
          img: "/garrafaLA.png",
          title: "Carburação 12Kg",
          description: "Usada essencialmente por empilhadoras.",
        },
      ],
    },
  ];

  return (
    <div className="">
       {/* Hero Section */}
  <section
    className="relative bg-cover bg-center h-64 text-white flex items-center justify-center"
    style={{ backgroundImage: "url('/background1.jpg')" }}
  >
    {/* Sobreposição Escura */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Conteúdo */}
    <div className="relative text-center">
      <h1 className="text-3xl font-bold">Garrafas de Gás Repsol</h1>
      <p className="text-lg">Aproveite todas as vantagens de comprar gás Repsol.</p>
    </div>
      </section>

      {/* Products Menu */}
      <section className="products mt-8 p-4">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Tipologia e características de garrafas</h2>
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 font-bold border-b-2 ${
                activeCategory === category.id ? "border-orange-600 text-orange-600" : "border-transparent text-gray-700"
              }`}
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
                <img src={product.img} alt={product.title} className="w-full h-40 object-contain mb-4" />
                <h3 className="text-lg font-bold text-blue-800">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
            ))}
        </div>
    </section>
    {/* Onde Comprar */}
    <section className="py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-8">
          Onde comprar as garrafas de gás Repsol
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Visite-nos */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Visite-nos</h3>
            <p className="mb-4">
              Dirija-se às nossas instalações para adquirir suas garrafas de gás com total segurança e rapidez.
            </p>
            <p className="font-bold">Horário:</p>
            <ul className="mb-4">
              <li>Segunda a Sexta: 8h - 18h</li>
              <li>Sábado: 8h - 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
            <iframe
              className="w-full h-48 border rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.8567663947897!2d-8.52778433746847!3d41.1354854947783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2463063d70db29%3A0xae526d43ee4d00bb!2zSm9zw6kgTnVuZXMgLSBTb2MuIERpc3RyaWJ1acOnw6NvIGRlIEfDoXM!5e0!3m2!1spt-PT!2spt!4v1738769483104!5m2!1spt-PT!2spt"
              allowFullScreen=""
              loading="lazy"
              title="Localização"
            ></iframe>
          </div>

          {/* Card Fale Connosco */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Fale Connosco</h3>
            <p className="mb-4">Entre em contacto connosco através dos números abaixo:</p>
            <p className="font-bold">Telemóveis:</p>
            <ul className="mb-4">
              <li>(+351) 933 368 655</li>
              <li>(+351) 913 703 072</li>
            </ul>
            <p className="font-bold">Telefone:</p>
            <ul className="mb-4">
              <li>(+351) 224 830 326</li>
            </ul>
            <p className="font-bold">Email:</p>
            <ul>
              <li>josenuneslda@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
