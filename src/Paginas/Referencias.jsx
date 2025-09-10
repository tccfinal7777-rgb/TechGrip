import React from "react";
export default function Referencias() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center px-4">
      <h1 className="text-black dark:text-white text-4xl font-bold mt-32 mb-12 text-center">
        REFERÊNCIAS
      </h1>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <div className="flex flex-col items-center gap-4 border-b pb-4">
          <img src="/pastinha.png" alt="Ícone" className="w-12 h-12"/>
          <a href="https://www.monografias.ufop.br/bitstream/35400000/1683/8/MONOGRAFIA_M%C3%A3oB%C3%B4nicaC.pdf" className="text-black dark:text-white text-center text-xl hover:underline break-words">
            https://www.monografias.ufop.br/bitstream/35400000/1683/8/MONOGRAFIA_M%C3%A3oB%C3%B4nicaC.pdf</a>
        </div>
        <div className="flex flex-col items-center gap-4 border-b pb-4">
          <img src="/pastinha.png" alt="Ícone" className="w-12 h-12"/>
          <a href="https://repositorio.unesp.br/entities/publication/572af08a-4543-4f99-bed3-c403c6ea28c6" className="text-black dark:text-white text-center text-xl hover:underline break-words">
            https://repositorio.unesp.br/entities/publication/572af08a-4543-4f99-bed3-c403c6ea28c6</a>
        </div>
        <div className="flex flex-col items-center gap-4 border-b pb-4">
          <img src="/pastinha.png" alt="Ícone" className="w-12 h-12"/>
          <a href="https://ojs.brazilianjournals.com.br/ojs/index.php/BJHR/article/view/860" className="text-black dark:text-white text-center text-xl hover:underline break-words">
            https://ojs.brazilianjournals.com.br/ojs/index.php/BJHR/article/view/860 </a>
        </div>
        <div className="flex flex-col items-center gap-4 border-b pb-4">
          <img src="/pastinha.png" alt="Ícone" className="w-12 h-12"/>
          <a href="https://downloads.editoracientifica.com.br/articles/221111046.pdf" className="text-black dark:text-white text-center text-xl hover:underline break-words">
            https://downloads.editoracientifica.com.br/articles/221111046.pdf</a>
        </div>
      </div>
    </div>
  );
}
