import React from "react";
import Header from "../componentes/Header";

export default function Produtos() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <div className="flex items-center justify-center mt-16 mb-4 px-4">
        <div className="border-t-2 border-gray-600 flex-grow mr-4"/>
        <h2 className="text-2xl font-bold italic text-gray-800">Produtos</h2>
        <div className="border-t-2 border-gray-600 flex-grow ml-4"/>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6 max-w-[1024px] mx-auto">
        <div className="rounded shadow p-6 text-center min-w-[280px] max-w-[320px] flex-1 bg-gray-100">
          <img src="/produto1.png" alt="Produto 1" className="w-full h-40 object-cover rounded mb-4"/>
          <p className="text-sm mb-2">Ensp 32</p>
          <p className="font-bold text-gray-800">R$ 49,90</p>
        </div>
        <div className="rounded shadow p-6 text-center min-w-[280px] max-w-[320px] flex-1 bg-gray-100">
          <img src="/produto2.png" alt="Produto 2" className="w-full h-40 object-cover rounded mb-4"/>
          <p className="text-sm mb-2">Placa De Ensaio</p>
          <p className="font-bold text-gray-800">R$ 18,90</p>
        </div>
        <div className="rounded shadow p-6 text-center min-w-[280px] max-w-[320px] flex-1 bg-gray-100">
          <img src="/produto3.png" alt="Produto 3" className="w-full h-40 object-cover rounded mb-4"/>
          <p className="text-sm mb-2">Fios Jumpers</p>
          <p className="font-bold text-gray-800">R$ 7,10</p>
        </div>
        <div className="rounded shadow p-6 text-center min-w-[280px] max-w-[320px] flex-1 bg-gray-100">
          <img src="/produto4.png" alt="Produto 4" className="w-full h-40 object-cover rounded mb-4"/>
          <p className="text-sm mb-2">Parafusos</p>
          <p className="font-bold text-gray-800">R$ 29,90</p>
        </div>
        <div className="rounded shadow p-6 text-center min-w-[280px] max-w-[320px] flex-1 bg-gray-100">
          <img src="/produto5.png" alt="Produto 5" className="w-full h-40 object-cover rounded mb-4"/>
          <p className="text-sm mb-2">Filamento 3D</p>
          <p className="font-bold text-gray-800">R$ 72,50</p>
        </div>
      </div>
    </div>
  );
}
