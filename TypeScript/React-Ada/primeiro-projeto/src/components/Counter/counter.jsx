import React from "react";

export class Counter extends React.Component {
    
    constructor() {
        super();
       // this.contador = 0;
       this.state = { contador: 0, name: " ", senha: " " } 
    }
    
    render() {
        return(
           <div style={{
            marginTop: "1rem", marginLeft: "1rem"
           }}>
               <div>
                    <h1>{this.state.contador}</h1>
               </div>
                         
                <div>
                    <button onClick={()=>{ this.setState({contador: this.state.contador -1 }) }}>Diminuir</button>
                    <button onClick={()=>{ this.setState({contador: this.state.contador +1 }) }}>Aumentar</button>
                </div>

            <form style={{
                marginTop:"20px",
                marginLeft: "20px"
            }}>
                <input type="text" placeholder="name" value={this.state.name} onChange={(event) => 
                    this.setState({name: event.target.value})
                 } />
                <input type="password" placeholder="senha" value={this.state.senha} onChange={(event) => {
                    this.setState({senha: event.target.value})}
                    } />
                <button>Enviar</button>
            </form>

           </div>
        )
    }
}