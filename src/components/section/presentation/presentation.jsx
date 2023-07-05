import React from 'react'
import './index.css';
import ButtonA from '../../elements/buttonA/buttonA';


const Presentation = () => {
    return (
        <div id='Presentation' className='presentation'>
            <div className='presentationStyle'>
                <h3>Bem-vindo ao meu Portfólio</h3>
                <h1>Olá, eu sou Juan</h1>
                <p>
                    Sou um apaixonado por tecnologia e soluções inovadoras. Como 
                    Product Manager, eu tenho o compromisso de resolver problemascomplexos 
                    e trazer resultados excepcionais para os negócios.Meus projetos já geraram 
                    milhões de reais em receita anualestou sempre em busca de novos desafios para superar.
                </p>
                <ButtonA link='https://github.com/rodrigo-falcao' text='Conecte-se comigo!!'/>
            </div>
        </div>
) 
}

export default Presentation