import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../componentes/Header";
import Home from "../Paginas/Home";
import QuemSomos from "../Paginas/QuemSomos";
import Produtos from "../Paginas/Produtos";
import Jogo from "../Paginas/Jogo";
import Referencias from "../Paginas/Referencias";
import Manual from "../Paginas/Manual";

export default function AppRouter() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quem-somos" element={<QuemSomos/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/jogo" element={<Jogo/>}/>
        <Route path="/referencias" element={<Referencias/>}/>
        <Route path="/manual" element={<Manual/>}/>
      </Routes>
    </div>
  );
}
