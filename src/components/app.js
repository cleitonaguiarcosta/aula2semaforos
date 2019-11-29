import React from 'react'

class alertas extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        semaforo: null
        };

    }


    ficarAmarelo = () => {
        this.setState({
        alertas: 'amarelo'
        });
    }


    ficarVerde = () => {
        this.setState({
        alertas: 'verde'
        });
    }
    ficarVermelho = () => {
        this.setState({
        alertas: 'vermelho'
        });
    }

    render(){
        return(
        <div>
            <button onClick={this.ficarAmarelo}>amarelo</button>
            <button onClick={this.ficarvermelho}>vermelho</button>
            <button onClick={this.ficarverde}>verde</button>
            <p>{this.state.alertas}</p>
        </div>
        )
    }
}
export default alertas;
