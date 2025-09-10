import React from "react";
export default function Instrucoes() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <div className="flex flex-col md:hidden flex-1 justify-end items-center gap-6 px-4 pb-16">
        <div className="bg-white w-full max-w-md flex justify-center items-center p-6 border rounded-lg">
          <img src="mao.png" alt="Mão Robótica" className="object-contain w-full h-96"/>
        </div>
        <div className="bg-gray-800 text-white w-full max-w-md p-4 flex flex-col gap-4 border rounded-lg">
          <p className="text-center text-sm">
            Para que tudo funcione corretamente, é essencial que você acompanhe com atenção cada etapa mostrada no vídeo. Todas as instruções foram organizadas em sequência, com explicações detalhadas, para que você consiga replicar o projeto do início ao fim sem complicações...</p>
          <p className="text-center text-sm italic">
            Se você quer ver o projeto funcionando de verdade, siga cada passo do vídeo com atenção. Pode parecer tentador adiantar ou improvisar algumas partes, mas tudo que está ali tem um motivo...</p>
        </div>
      </div>
      <main className="hidden md:grid grid-cols-2 grid-rows-2 flex-grow gap-6 px-8 py-6">
        <div className="bg-gray-800 text-white p-6 overflow-auto whitespace-pre-line flex justify-center items-center">
          <p className="text-center">
            Para que tudo funcione corretamente, é essencial que você acompanhe com atenção cada etapa mostrada no vídeo. Todas as instruções foram organizadas em sequência, com explicações detalhadas, para que você consiga replicar o projeto do início ao fim sem complicações...</p>
        </div>
        <div className="bg-white flex justify-center items-center p-4 border">
          <img src="/mnt/data/0e006e2a-9e8d-4846-a408-f4848e208fbe.png" alt="Mão Robótica" className="object-contain max-w-full max-h-full"/>
        </div>
        <div className="bg-white flex justify-center items-center p-4 border gap-4">
          <img src="robozinho.png" alt="" className="w-120 h-120 object-contain"/>
          <h3 className="text-lg font-bold"></h3>
        </div>
        <div className="bg-gray-800 text-white p-6 overflow-auto italic whitespace-pre-line flex justify-center items-center">
          <p className="text-center">
            Se você quer ver o projeto funcionando de verdade, siga cada passo do vídeo com atenção. Pode parecer tentador adiantar ou improvisar algumas partes, mas tudo que está ali tem um motivo...
          </p>
        </div>
      </main>
    </div>
  );
}
