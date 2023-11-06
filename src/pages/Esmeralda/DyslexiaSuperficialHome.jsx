import { DetectionTestsList } from "./DetectionTestsList"
import coverDetection from '../../assets/coverDetection.png'
import coverVisualDiscrimination from '../../assets/coverVisualDiscrimination.png'
import coverOrthography from '../../assets/coverOrthography.png'
import { AttentionResourcesList } from "./AttentionResourcesList"
import { BackButton } from "../../components/BackButton"

export const DyslexiaSuperficialHome = () => {

  const detectionTests = [
    {
      id: 0,
      title: 'Test de detección temprana de la Dislexia Superficial o Visual',
      description: 'Consta de un conjunto de actividades interactivas que pretenden evaluar las competencias para este tipo de dislexia, así como se describe en las Tablas 3-4 y 3-5. El test se conforma de 7 actividades para cada competencia, es decir, el test tiene un total de 14 actividades',
      image: coverDetection,
      route: 'test1'
    }
  ]

  const attentionResources = [
    {
      id: 0,
      title: 'Recurso de apoyo a la Competencia Discriminación Visual',
      description: 'Consta de un conjunto de 7 actividades como las descritas en la Tabla 3-5; a diferencia del test de detección, en este caso hay retroalimentación constante de si las respuestas están correctas o incorrectas. También se incluye un conjunto de recomendaciones al docente de qué habilidades y categorías  se deben potenciar en el estudiante en caso de tener que reforzar esta competencia',
      image: coverVisualDiscrimination,
      route: 'resource1'
    },
    {
      id: 1,
      title: 'Recurso de apoyo a la Competencia Ortográfica',
      description: 'Consta de un conjunto de 7 actividades como las descritas en la Tabla 3-6; a diferencia del test de detección, en este caso hay retroalimentación constante de si las respuestas están correctas o incorrectas. También se incluye un conjunto de recomendaciones al docente de qué habilidades y categorías se deben potenciar en el estudiante en caso de tener que reforzar esta competencia',
      image: coverOrthography,
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
