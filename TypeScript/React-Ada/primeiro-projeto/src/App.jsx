import React from 'react';
import "./styles/app.css"
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';
import fotoArticle from "./Assets/GG.png";
import fotoArticle2 from "./Assets/GG2.png";
import fotoArticle3 from "./Assets/GG3.png";
import { Counter } from './components/Counter/counter';

class App extends React.Component {
 
 // Componenete - tag "html" especial, classe que herda a classe component do react e retorna HTMl dentro de método render() 
 
  // método responsável por renderizar o conteúdo em tela 

  render() {
  return (
  <>
  <Navbar />
    <article id='articles'>
    <Article title="Designig Dashboards" provider="NASA" texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minus unde pariatur fugit sint suscipit, vitae, quos alias repellendus voluptatem animi esse facilis. Voluptate totam expedita cupiditate repudiandae, dicta neque!" imagem={fotoArticle}/>
    <Article title="Vibrants portraits of 2000's" provider="URSS" texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minus unde pariatur fugit sint suscipit, vitae, quos alias repellendus voluptatem animi esse facilis. Voluptate totam expedita cupiditate repudiandae, dicta neque!" imagem={fotoArticle2}/>
    <Article title="365 para a Copa do Mundo" provider="FIFA" texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad minus unde pariatur fugit sint suscipit, vitae, quos alias repellendus voluptatem animi esse facilis. Voluptate totam expedita cupiditate repudiandae, dicta neque!" imagem={fotoArticle3}/>
  </article> 
  
  </>
  ); 
}}

export default App;
