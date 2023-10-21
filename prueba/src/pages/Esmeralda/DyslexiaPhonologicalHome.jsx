import { DetectionTestsList } from "./DetectionTestsList"
import coverDetection from '../../assets/coverDetection.png'
import coverPhonological from '../../assets/coverPhonological.png'
import coverLetterKnw from '../../assets/coverLetterKnw.png'
import { AttentionResourcesList } from "./AttentionResourcesList";
import { BackButton } from "../../components/BackButton";

export const DyslexiaPhonologicalHome = () => {

  const detectionTests = [
    {
      title: 'Test de detección temprana de la Dislexia Fonológica',
      description: 'Consta de un conjunto de actividades interactivas que pretenden evaluar las competencias para este tipo de dislexia, así como se describe en las Tablas 3-2 y 3-3. El test se conforma de 7 actividades para cada competencia, es decir, el test tiene un total de 14 actividades',
      image: coverDetection,
      route: 'test1'
    }
  ]

  const attentionResources = [
    {
      title: 'Recurso de apoyo a la Competencia Fonológica',
      description: 'Consta de un conjunto de 7 actividades como las descritas en la Tabla 3-3; a diferencia del test de detección, en este caso hay retroalimentación constante de si las respuestas están correctas o incorrectas. También se incluye un conjunto de recomendaciones al docente de qué habilidades y categorías se deben potenciar en el estudiante en caso de tener que reforzar esta competencia',
      image: coverPhonological,
      route: 'resource1'
    },
    {
      title: 'Recurso de apoyo a la Competencia Conocimiento de las Letras',
      description: 'Consta de un conjunto de 2 recursos; a diferencia del test de detección, en este caso hay retroalimentación constante de si las respuestas están correctas o incorrectas. También se incluye un conjunto de recomendaciones al docente de qué habilidades y categorías  se deben potenciar en el estudiante en caso de tener que reforzar esta competencia',
      image: coverLetterKnw,
      route: 'resource2'
    }
  ]

  return (
    <>
      <BackButton />
      
      <DetectionTestsList
        tests={detectionTests}
      />

      <AttentionResourcesList
        tests={attentionResources}
      />
    </>
  )
}
