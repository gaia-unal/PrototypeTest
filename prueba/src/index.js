import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Test } from './components/Test';
import { Header } from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Props indicate the type of test (phonological dyslexia or superficial dyslexia) */}
    <Header />

    <Test
      module="/Activities/EarlyDetection/PhonologicalDyslexia"
      
      competence1="/PhonologicalAwareness"
      nameActivityC1_1="Seleccionar una palabra de acuerdo a su representación gráfica"
      nameActivityC1_2="Encontrar letras específicas en medio de las palabras"
      nameActivityC1_3="Seleccionar en orden las sílabas del nombre de una imagen"
      nameActivityC1_4="Digitar la cantidad de sílabas que tiene una palabra"
      nameActivityC1_5="Seleccionar la sílaba inicial de una palabra"

      competence2="/LetterKnowledge"
      nameActivityC2_1="Seleccionar en orden las letras de una palabra dada"
      nameActivityC2_2="Seleccionar el audio que corresponde al sonido de una letra dada"
      nameActivityC2_3="Seleccionar en orden alfabético un conjunto de letras dado"
      nameActivityC2_4="Digitar la palabra que corresponde a la tarjeta dada del alfabeto"
      nameActivityC2_5="Formar palabras a partir de un conjunto de letras dado"
    />

    <Test
      module="/Activities/EarlyDetection/SuperficialDyslexia"

      competence1="/VisualDiscrimination"
      nameActivityC1_1=""
      nameActivityC1_2=""
      nameActivityC1_3=""
      nameActivityC1_4=""
      nameActivityC1_5=""

      competence2="/Orthography"
      nameActivityC2_1=""
      nameActivityC2_2=""
      nameActivityC2_3=""
      nameActivityC2_4=""
      nameActivityC2_5=""
    />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
