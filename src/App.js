// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [expressao, setExpressao] = useState('');
  const [historico, setHistorico] = useState([]);

  const handleClickBotao = (valor) => {
    setExpressao((expressaoAnterior) => expressaoAnterior + valor);
  };

  const handleLimpar = () => {
    setExpressao('');
  };

  const handleCalcular = () => {
    try {
      const resultado = eval(expressao);
      setHistorico((historicoAnterior) => [`${expressao} = ${resultado}`, ...historicoAnterior.slice(0, 2)]);
      setExpressao(String(resultado));
    } catch (erro) {
      setExpressao('Erro');
    }
  };

  return (
    <div className="calculadora">
      <h2>Calculadora</h2>
      <div className="historico">
        <h3>Histórico de Cálculo</h3>
        <ul>
          {historico.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="tela">
        <input type="text" value={expressao} readOnly />
      </div>
      <div className="botoes">
        <Botao onClick={handleClickBotao}>7</Botao>
        <Botao onClick={handleClickBotao}>8</Botao>
        <Botao onClick={handleClickBotao}>9</Botao>
        <Botao onClick={handleLimpar}>Apagar</Botao>
        <Botao onClick={handleClickBotao}>4</Botao>
        <Botao onClick={handleClickBotao}>5</Botao>
        <Botao onClick={handleClickBotao}>6</Botao>
        <Botao onClick={() => handleClickBotao('*')}>*</Botao>
        <Botao onClick={handleClickBotao}>1</Botao>
        <Botao onClick={handleClickBotao}>2</Botao>
        <Botao onClick={handleClickBotao}>3</Botao>
        <Botao onClick={() => handleClickBotao('-')}>-</Botao>
        <Botao onClick={() => handleClickBotao('**')}>x²</Botao>
        <Botao onClick={() => handleClickBotao('Math.sqrt(')}>√</Botao>
        <Botao onClick={handleClickBotao}>0</Botao>
        <Botao onClick={() => handleClickBotao('.')}>,</Botao>
        <Botao onClick={() => handleClickBotao('%')}>%</Botao>
        <Botao onClick={() => handleClickBotao('+')}>+</Botao>
        <Botao onClick={handleCalcular}>=</Botao>
      </div>
    </div>
  );
}

function Botao({ children, onClick }) {
  return (
    <button onClick={() => onClick(children)}>{children}</button>
  );
}

export default App;
