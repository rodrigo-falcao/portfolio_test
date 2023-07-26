import React from 'react'
import './index.css';
import ButtonA from '../../elements/buttonA/buttonA';
import { useState, useEffect } from 'react';


const Presentation = () => {
    const [text, setText] = useState ('');
    const toRotate = ["Juan Reis!", "Dev Front End", "Product Manager"];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 80;
    const [delta, setDelta] = useState(100)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updateText);

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    useEffect(()=> {
        let timer = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(timer)}
    }, [text, delta, toType])

    return (
        <div id='Presentation' className='presentation'>
            <div className='presentationStyle'>
                <h3>Bem-vindo ao meu Portfólio</h3>
                <h1>Olá, eu sou {text}</h1>
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