import React from "react";

export default function QuemSomos(){
  return(
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans flex flex-col items-center pt-24 dark:bg-gray-900">
      <main className="flex flex-col items-center gap-10 px-4 py-12 w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center dark:text-white">Quem Somos</h1>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-[#5F53FF] text-white rounded-xl p-6 w-80 flex flex-col items-center">
            <p className="italic text-lg mb-2">Matheus Paulino</p>
            <img src="/matheus_grande.png" alt="Matheus Paulino" className="w-full h-72 object-cover rounded-lg mb-4"/>
            <p className="italic">mat_araujo08</p>
            <p className="italic mb-1">(11) 96106-3700</p>
            <p className="italic">Dev.games</p>
          </div>
          <div className="bg-[#5F53FF] text-white rounded-xl p-6 w-80 flex flex-col items-center">
            <p className="italic text-lg mb-2">Thiago Ramos</p>
            <img src="/thiago_grande.png" alt="Thiago Ramos" className="w-full h-72 object-cover rounded-lg mb-4"/>
            <p className="italic">thizin.zm</p>
            <p className="italic">(11) 92180-0253</p>
            <p className="italic">Dev.robotica</p>
          </div>
          <div className="bg-[#5F53FF] text-white rounded-xl p-6 w-80 flex flex-col items-center">
            <p className="italic text-lg mb-2">Matheus Amorim</p>
            <img src="/thiago_grande.png" alt="Matheus Amorim" className="w-full h-72 object-cover rounded-lg mb-4"/>
            <p className="italic">amorim.mrm</p>
            <p className="italic">(11) 96494-5232</p>
            <p className="italic">Dev.site</p>
          </div>
        </div>
      </main>
    </div>
  );
}
