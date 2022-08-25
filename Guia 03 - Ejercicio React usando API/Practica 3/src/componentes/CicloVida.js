import React from 'react';

export default class CicloVida extends React.Component{
    constructor(){
        super();
        console.log(0,"componente creado. Aun no existe en el DOM");
        this.state={
            hora:new Date().toLocaleTimeString()
        }
        this.timer=null;
        /*setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString()
            });
        }, 5000);
        */
    }
    
    componentDidMount(){
        console.log(2,"componente renderizado por primera vez");
    }
    iniciar=(e)=>{
        this.timer=setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString()
            });
        }, 1000);
    }
    finalizar=(e)=>{
        clearInterval(this.timer);
    }

    render(){
        console.log(1,"componente actualizado por el cambio de una propiedad");
        return(
            <div>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.finalizar}>Detener</button>
                <h1>{this.state.hora}</h1>
            </div>
        )
    }
}