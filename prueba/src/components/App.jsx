import { Test } from './Test';
import { Header } from './Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/test1" element={
          <Test
            // Props indicate the type of test (phonological dyslexia or superficial dyslexia)
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
          />}>
        </Route>

        <Route path="/test2" element={
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
        }>
        </Route>
      </Routes>
    </>
  )
}
