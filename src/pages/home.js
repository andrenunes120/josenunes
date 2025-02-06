import React from "react";
import "../App.css";

function Home() {
  return (
    <div>
      <section className="about">
        <h2>Quem Somos</h2>
        <p>
          Somos uma concessionária oficial da Repsol, fornecendo gás engarrafado com qualidade, segurança e compromisso
          com nossos clientes. Localizada no Porto, Gondomar...
        </p>
      </section>
      <section className="map">
        <h2>Onde Estamos</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.8567663947897!2d-8.52778433746847!3d41.1354854947783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2463063d70db29%3A0xae526d43ee4d00bb!2zSm9zw6kgTnVuZXMgLSBTb2MuIERpc3RyaWJ1acOnw6NvIGRlIEfDoXM!5e0!3m2!1spt-PT!2spt!4v1738769483104!5m2!1spt-PT!2spt"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default Home;