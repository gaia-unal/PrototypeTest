import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Referencias.css'
import tablaConcienciaFonologica from '../../assets/Tabla-conciencia-fonológica.png'
import tablaConocimientoLetras from '../../assets/Tabla-conocimiento-letras.png'
import tablaDiscriminacionVisual from '../../assets/Tabla-discriminación-visual.png'
import tablaOrtografia from '../../assets/Tabla-ortografía.png'


export const Referencias = ({ }) => {
    let navigate = useNavigate();
    return (
        <>
            {/* Button to go back */}
            <div className="positionButton2">
                <button className="btn btn-success button" onClick={() => navigate('/esmeralda/inicio')}>
                    Atrás
                </button>
            </div>

            {/* Enlace a la tesis de Esmeralda */}
            <div className="container">
                <p>Todos los recursos educativos digitales de Esmeralda han sido creados, basados en el análisis conceptual obtenido del
                    modelo de detección temprana y atención inicial de la Dislexia en estudiantes de grado primero de la tesis de Esmeralda,
                    disponible en este enlace: <a href="https://docs.google.com/document/d/1BiLHK6c428ldsah8p1fYs50dVRY0Y2ZU/edit?usp=sharing&ouid=109829456139648107631&rtpof=true&sd=true" target="blank__">Tesis Esmeralda</a>. 
                    Las actividades, habilidades y categorías evaluadas y exploradas en el marco de este trabjo, se muestran a continuación: </p>
                    <div className="contenedor">
                        <strong><p>1. Tabla 1 - Conciencia Fonológica</p></strong>
                        <img src={tablaConcienciaFonologica} alt="Tabla de actividades, habilidades y categorías de la conciencia fonológica" />
                        <p>Fuente: Elaboración propia</p>
                    </div>

                    <div className="contenedor">
                        <strong><p>2. Tabla 2 - Conocimiento de las letras</p></strong>
                        <img src={tablaConocimientoLetras} alt="Tabla de actividades, habilidades y categorías del conocimiento de las letras" />
                        <p>Fuente: Elaboración propia</p>
                    </div>

                    <div className="contenedor">
                        <strong><p>3. Tabla 3 - Discriminación visual</p></strong>
                        <img src={tablaDiscriminacionVisual} alt="Tabla de actividades, habilidades y categorías de la discriminación visual" />
                        <p>Fuente: Elaboración propia</p>
                     </div>

                    <div className="contenedor">
                        <strong><p>4. Tabla 4 - Ortografía</p></strong>
                        <img src={tablaOrtografia} alt="Tabla de actividades, habilidades y categorías de la ortografía" />
                        <p>Fuente: Elaboración propia</p>
                    </div>
                
                <strong><p>Referencias bibliográficas</p></strong>
                <p>Álvarez Palacio, B. (2015). La Dislexia: Detección inicial y programa de intervención en Educación Infantil.</p>
            </div>

        </>
    )
}
