import { Test } from './Esmeralda/Test';
import { HeaderEsmeralda } from '../layouts/HeaderEsmeralda';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { HomeEsmeralda } from './Esmeralda/HomeEsmeralda';
import { DyslexiaPhonologicalHome } from './Esmeralda/DyslexiaPhonologicalHome';
import { DyslexiaSuperficialHome } from './Esmeralda/DyslexiaSuperficialHome';
import { AttentionResource } from './Esmeralda/AttentionResource';
import { Demo } from './Esmeralda/Demo';
import { HomeAmatista } from './Amatista/HomeAmatista';

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

          <Route path="inicio/superficial" element={<DyslexiaSuperficialHome></DyslexiaSuperficialHome>}></Route>

          <Route path='inicio/demo' element={<Demo route='/Activities/Demo'/>}></Route>


          {/* Detection Tests */}

          {/* Phonological Dyslexia */}
          <Route path="inicio/fonologica/test1" element={
            <Test
              // Props indicate the type of test (phonological dyslexia or superficial dyslexia)
              module="/Activities/EarlyDetection/PhonologicalDyslexia"

              competence1="/PhonologicalAwareness"
              nameActivityC1_1="Seleccionar una palabra de acuerdo a su representación gráfica"
              nameActivityC1_2="Encontrar letras específicas en medio de las palabras"
              nameActivityC1_3="Seleccionar en orden las sílabas del nombre de una imagen"
              nameActivityC1_4="Digitar la cantidad de sílabas que tiene una palabra"
              nameActivityC1_5="Seleccionar la sílaba inicial de una palabra"
              nameActivityC1_6="Encontrar letras específicas en medio de las palabras"
              nameActivityC1_7="Seleccionar una palabra de acuerdo a su representación gráfica"

              competence2="/LetterKnowledge"
              nameActivityC2_1="Seleccionar en orden las letras de una palabra dada"
              nameActivityC2_2="Seleccionar el audio que corresponde al sonido de una letra dada"
              nameActivityC2_3="Seleccionar en orden alfabético un conjunto de letras dado"
              nameActivityC2_4="Digitar la palabra que corresponde a la tarjeta dada del alfabeto"
              nameActivityC2_5="Formar palabras a partir de un conjunto de letras dado"
              nameActivityC2_6=""
              nameActivityC2_7=""
            />
          } />

          {/* Superficial Dyslexia */}
          <Route path="inicio/superficial/test1" element={
            <Test
              module="/Activities/EarlyDetection/SuperficialDyslexia"

              competence1="/VisualDiscrimination"
              nameActivityC1_1="Seleccionar la letra que le falta a la palabra: __________"
              nameActivityC1_2="Seleccionar la letra que se puede remover de una palabra"
              nameActivityC1_3="Seleccionar todos los elementos que se encuentren hacia la izquierda, o hacia la derecha"
              nameActivityC1_4="Seleccionar todos los elementos de un color específico"
              nameActivityC1_5="Seleccionar todas las instancias de una letra, símbolo o número (se usan letras, símbolos o números con los que se suele tener mayores confusiones, como b-d, p-q, m-n, m-w, entre otros)."
              nameActivityC1_6=""
              nameActivityC1_7=""

              competence2="/Orthography"
              nameActivityC2_1="Seleccionar la forma correcta de cómo se escribe una palabra representada en una imagen"
              nameActivityC2_2="Seleccionar la forma correcta de cómo se escribe una palabra representada en una imagen"
              nameActivityC2_3="Seleccionar la forma correcta de cómo se escribe una palabra representada en una imagen"
              nameActivityC2_4="Seleccionar la oración que está escrita correctamente"
              nameActivityC2_5="Seleccionar la oración que está escrita correctamente"
              nameActivityC2_6="Seleccionar la forma correcta de cómo se escribe una palabra representada en una imagen"
              nameActivityC2_7="Seleccionar la oración que está escrita correctamente"
            />
          } />


          {/* Attention Resources */}

          {/* Phonological Dyslexia */}
          <Route path="inicio/fonologica/resource1"
            element={
              <AttentionResource
                route='/Activities/EarlyAttention/PhonologicalDyslexia/PhonologicalAwareness'
              />
            }>
          </Route>

          <Route path="inicio/fonologica/resource2"
            element={
              <AttentionResource
                route='/Activities/EarlyAttention/PhonologicalDyslexia/LetterKnowledge'
              />
            }>
          </Route>

          {/* Superficial Dyslexia */}
          <Route path="inicio/superficial/resource1"
            element={
              <AttentionResource
                route='/Activities/EarlyAttention/SuperficialDyslexia/VisualDiscrimination'
              />
            }>
          </Route>


          <Route path="inicio/superficial/resource2"
            element={
              <AttentionResource
                route='/Activities/EarlyAttention/SuperficialDyslexia/Orthography'
              />
            }>
          </Route>
        </Route>


        <Route path='/amatista' element={<HomeAmatista></HomeAmatista>}></Route>

        <Route path="/esmeralda" element={<Navigate to='/esmeralda/inicio' />}></Route>
        <Route path="/*" element={<Navigate to='/' />}></Route>
      </Routes>
    </>
  )
}
