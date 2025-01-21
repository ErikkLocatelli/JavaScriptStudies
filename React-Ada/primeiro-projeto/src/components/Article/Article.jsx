import React from "react";
import "./Article.css";

export class Article extends React.Component { // exportando diretamente na criação da classe 
    
    render() {
        return (
            <article id="article">
                <img src={this.props.imagem} alt="" />

                <div className="article-info">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>
                    <p>{this.props.texto}</p>
                </div>
            </article>
        )
    }
}

