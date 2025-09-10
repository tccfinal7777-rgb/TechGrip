import React from "react";
export default function Jogo() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white p-8 gap-8 dark:bg-gray-900">
      <div className="w-[90%] sm:w-[45%] h-[90vh] bg-gray-800 text-white p-6 rounded-lg flex flex-col justify-center items-center text-center">
        <h2 className="text-1xl font-mono uppercase tracking-wider mb-6 text-green-400">BionicArm</h2>
        <p className="text-1xl font-mono leading-relaxed text-white">
        No pacífico Reino de Ferro, a paz foi quebrada quando o temido Capitão Garra Negra e sua frota de piratas invadiram e dominaram o território, espalhando caos por cidades e ilhas. Entre os sobreviventes, está Axel, um jovem inventor que perdeu sua mão em um ataque pirata. Determinado a libertar seu povo, ele cria uma mão robótica multifuncional, capaz de lançar bombas, agarrar inimigos e realizar poderosos socos, tornando-se a última esperança do reino.
Axel inicia sua jornada no Porto do Reino, aprendendo a dominar suas bombas e a mão robótica enquanto enfrenta os primeiros piratas. Em seguida, ele atravessa a Ilha das Torres, enfrentando arqueiros e armadilhas, e explora a Floresta de Corda, onde inimigos o atacam em emboscadas e árvores podem ser derrubadas para abrir caminho. Sua aventura o leva até a Fortaleza de Ferro, um labirinto cheio de salas com bombas cronometradas e piratas de elite, preparando-o para o confronto final.
No Navio do Capitão Garra Negra, Axel enfrenta o próprio inimigo, desviando de canhões e derrotando piratas de elite, usando todas as habilidades de sua mão robótica. A vitória significa a restauração do Reino de Ferro e a libertação de seus cidadãos, além da recuperação dos tesouros roubados.
Durante sua jornada, Axel encontra aliados que fornecem upgrades e dicas, coleta tesouros para desbloquear habilidades especiais e enfrenta chefes piratas com ataques únicos. Cada batalha exige estratégia, reflexos rápidos e o uso inteligente da mão robótica para plantar bombas, agarrar inimigos e superar obstáculos.</p>
      </div>
      <div className="w-[90%] sm:w-[45%] h-[90vh] bg-gray-800 text-white p-6 rounded-lg flex flex-col justify-between items-center">
        <div className="flex flex-col items-center mt-4">
          <h2 className="text-1xl font-mono uppercase tracking-wider mb-6 text-green-400">Versão Demo</h2>
          <img src="/bionicarm.png" alt="BionicArm" className="w-180 h-180 mb-6 rounded-lg"/>
        </div>
        <button className="bg-green-600 text-white font-mono uppercase py-4 rounded-lg text-xl hover:bg-green-700 transition w-4/5 mb-4 tracking-wider">START</button>
      </div>
    </div>
  );
}
