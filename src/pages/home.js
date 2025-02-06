import React from "react";
import "../App.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-center text-white">
        <img
          src={"/background2.png"}
          alt="background2"
          className="w-full h-64 object-cover filter brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
            José Nunes lda
          </h1>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="flex flex-col md:flex-row m-5 p-5 gap-5 border border-gray-300 rounded-lg">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Quem Somos</h2>
          <p>
            Somos uma concessionária oficial da Repsol, fornecendo gás engarrafado com qualidade, segurança e compromisso
            com nossos clientes. Localizada no Porto, Gondomar...
            <b>Apenas distribuimos para Gondomar e arredores</b>
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Onde Estamos</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.8567663947897!2d-8.52778433746847!3d41.1354854947783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2463063d70db29%3A0xae526d43ee4d00bb!2zSm9zw6kgTnVuZXMgLSBTb2MuIERpc3RyaWJ1acOnw6NvIGRlIEfDoXM!5e0!3m2!1spt-PT!2spt!4v1738769483104!5m2!1spt-PT!2spt"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;