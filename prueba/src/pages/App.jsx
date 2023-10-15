import { Test } from './Esmeralda/Test';
import { HeaderEsmeralda } from '../layouts/HeaderEsmeralda';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { HomeEsmeralda } from './Esmeralda/HomeEsmeralda';
import { PhonologicalDetectionEsmeralda } from './Esmeralda/PhonologicalDetectionEsmeralda';
import { PhonologicalHelpEsmeralda } from './Esmeralda/PhonologicalHelpEsmeralda';
import { DyslexiaPhonologicalHome } from './Esmeralda/DyslexiaPhonologicalHome';
import { DyslexiaSuperficialHome } from './Esmeralda/DyslexiaSuperficialHome';
import { SuperficialDetectionEsmeralda } from './Esmeralda/SuperficialDetectionEsmeralda';
import { SuperficialHelpEsmeralda } from './Esmeralda/SuperficialHelpEsmeralda';

export const App = () => {
  return (
    <>
      <Routes>
        {/* Application Main Page */}
        <Route path="/" element={<Home></Home>}></Route>

        {/* Esmeralda */}
        <Route path="/esmeralda/*" element={<HeaderEsmeralda />}>
          <Route path="inicio" element={<HomeEsmeralda></HomeEsmeralda>}></Route>

          <Route path="inicio/fonologica" element={<DyslexiaPhonologicalHome></DyslexiaPhonologicalHome>}></Route>
          <Route path="inicio/fonologica/deteccion" element={<PhonologicalDetectionEsmeralda></PhonologicalDetectionEsmeralda>}></Route>
          <Route path="inicio/fonologica/apoyo" element={<PhonologicalHelpEsmeralda></PhonologicalHelpEsmeralda>}></Route>

          <Route path="inicio/superficial" element={<DyslexiaSuperficialHome></DyslexiaSuperficialHome>}></Route>
          <Route path="inicio/superficial/deteccion" element={<SuperficialDetectionEsmeralda></SuperficialDetectionEsmeralda>}></Route>
          <Route path="inicio/superficial/apoyo" element={<SuperficialHelpEsmeralda></SuperficialHelpEsmeralda>}></Route>

          <Route path="inicio/fonologica/deteccion/test1" element={
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
            />
          } />

          <Route path="inicio/superficial/deteccion/test1" element={
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
          } />
        </Route>

        <Route path="/esmeralda" element={<Navigate to='/esmeralda/inicio' />}></Route>
        <Route path="/*" element={<Navigate to='/' />}></Route>
      </Routes>
    </>
  )
}
