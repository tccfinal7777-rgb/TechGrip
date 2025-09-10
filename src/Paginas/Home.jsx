import React from "react";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans dark:bg-blue-900">
      <section className="relative w-full h-screen">
        <img src="/robot.png" alt="Fundo com mão robótica" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">TechGrip</h1>
          <p className="text-lg md:text-xl italic font-light mt-4 text-white">
            Utilizando a tecnologia para melhorar a vida de milhares de brasileiros</p>
        </div>
      </section>
    </div>
  );
}
