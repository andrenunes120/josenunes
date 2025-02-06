import React from "react";

function TopLinks() {
  return (
    <section className="bg-white border-t border-b border-gray-300 flex flex-wrap justify-center gap-5 py-2 w-full text-[#1b223e] font-bold text-lg">
      <a
        href="#"
        className="px-4 py-2 rounded border border-gray-300 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] transition"
      >
        Eletricidade
      </a>
      <a
        href="/products"
        className="px-4 py-2 rounded border border-gray-300 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] transition"
      >
        Garrafas de Gás
      </a>
      <a
        href="#"
        className="px-4 py-2 rounded border border-gray-300 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] transition"
      >
        Gasóleo de Aquecimento
      </a>
    </section>
  );
}

export default TopLinks;
