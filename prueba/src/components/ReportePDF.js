import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import imagenGuiaResultados from "../assets/imagenGuiaResultados.png"
import headerPDF from '../assets/headerPDF.png';
import footPDF from '../assets/footPDF.png'
import orangeHeart from '../assets/orangeHeart.png';
import blueHeart from '../assets/blueHeart.png';
import greenHeart from '../assets/greenHeart.png';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: '5%',
        marginBottom: 20,
        fontWeight: 'bold', // Esto aplica negrita al texto
        fontStyle: 'italic',
        color: '#074F2B',
    },
    subsubtitle: {
        fontSize: 14,
        textAlign: 'left',
        marginLeft: '5%',
        marginBottom: 5,
        fontWeight: 'bold', // Esto aplica negrita al texto
        fontStyle: 'italic',
        color: '#074F2B',
    },
    content: {
        fontSize: 13,
        marginBottom: 10,
        marginLeft: '5%',
        fontWeight: 'bold', // Esto aplica negrita al texto
        color: 'black',
    },
    image: {
        width: 370, // Ancho de la imagen
        height: 'auto', // Alto de la imagen
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image2: {
        marginLeft: '5%',
        width: 40, // Ancho de la imagen
        height: 32, // Alto de la imagen
    },
    image3: {
        marginLeft: '5%',
        width: 60, // Ancho de la imagen
        height: 51, // Alto de la imagen
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: 80,
    },
    header: {
        position: 'absolute',
        marginTop: 7,
        left: 0,
        right: 0,
        marginBottom: 80,
        height: 90,
        width: 'auto',
    },
    information: {
        marginTop: 100,
    },
});

const ReportePDF = ({ resultados, competence1Score, competence2Score, testScore, tipoDislexia, nameStudent, applicationDate, age, nameCompetence1, nameCompetence2, message1, message2 }) => {

    // Número de actividads para cada competencia
    const numberActivitiesCompetence = 7;
    // Número de actividades de la prueba total
    const numberActivities = 14;

    // Calcula el porcentaje de desempeño en Competencia 1
    const porcentajeCompetencia1 = (competence1Score * 100) / numberActivitiesCompetence;

    // Calcula el porcentaje de desempeño en Competencia 1
    const porcentajeCompetencia2 = (competence2Score * 100) / numberActivitiesCompetence;

    // Calcular el porcentaje de desempeño general
    const porcentajeGeneral = (testScore * 100) / numberActivities;

    var imageCompetence1 = '';
    // Lógica para saber qué corazón mandar en la competencia1
    if (porcentajeCompetencia1 <= 49.90) {
        imageCompetence1 = orangeHeart;
    }
    else if (porcentajeCompetencia1 > 49.90 && porcentajeCompetencia1 <= 79.90) {
        imageCompetence1 = blueHeart;
    }
    else if (porcentajeCompetencia1 > 79.90 && porcentajeCompetencia1 <= 100) {
        imageCompetence1 = greenHeart;
    }

    var imageCompetence2 = '';
    // Lógica para saber qué corazón mandar en la competencia2
    if (porcentajeCompetencia2 <= 49.90) {
        imageCompetence2 = orangeHeart;
    }
    else if (porcentajeCompetencia2 > 49.90 && porcentajeCompetencia2 <= 79.90) {
        imageCompetence2 = blueHeart;
    }
    else if (porcentajeCompetencia2 > 79.90 && porcentajeCompetencia2 <= 100) {
        imageCompetence2 = greenHeart;
    }

    var imageGeneral = '';
    // Lógica para saber qué corazón mandar en la competencia2
    if (porcentajeGeneral <= 49.90) {
        imageGeneral = orangeHeart;
    }
    else if (porcentajeGeneral > 49.90 && porcentajeGeneral <= 79.90) {
        imageGeneral = blueHeart;
    }
    else if (porcentajeGeneral > 79.90 && porcentajeGeneral <= 100) {
        imageGeneral = greenHeart;
    }

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* Encabezado del pdf */}
                <Image style={styles.header} src={headerPDF} alt="Encabezado del PDF" />

                <View style={styles.information}>
                    {/* Nombre del informe */}
                    <Text style={styles.title}>Reporte de Resultados {tipoDislexia}</Text>

                    {/* Información general del informe */}
                    <View>
                        <Text style={styles.subtitle}>Datos generales</Text>
                        <Text style={styles.subsubtitle}>
                            Nombre completo: <Text style={styles.content}>{nameStudent}</Text>
                        </Text>
                        <Text style={styles.subsubtitle}>
                            Fecha de aplicación: <Text style={styles.content}>{applicationDate}</Text>
                        </Text>
                        <Text style={styles.subsubtitle}>
                            Edad: <Text style={styles.content}>{age}</Text>
                        </Text>
                    </View>



                    {/* Imagen de guía de los resultados */}
                    <Image src={imagenGuiaResultados} alt="Guía de resultados" style={styles.image} />

                    {/* Datos por competencias */}
                    <Text style={styles.subtitle}>{"\n"}Puntajes por competencias</Text>
                    <View>
                        <Text style={styles.subsubtitle}>{nameCompetence1}:<Text style={styles.content}>{message1}{"\n"}{"\n"}</Text></Text>
                        <View style={{ flexDirection: 'row' }}>
                            {/* Imagen del corazón */}
                            <Image src={imageCompetence1} alt="Corazón" style={styles.image2} />
                            <Text style={styles.subsubtitle}>Se obtuvo un puntaje de {competence1Score} para {numberActivitiesCompetence} actividades.
                                Su desempeño fue del {"\n"}{porcentajeCompetencia1.toFixed(2)}% para la competencia {nameCompetence1}{"\n"}{"\n"}</Text>
                        </View>

                        <Text style={styles.subsubtitle}>{nameCompetence2}:<Text style={styles.content}>{message2}{"\n"}{"\n"}</Text></Text>
                    </View>
                </View>

                {/* Pie del pdf */}
                <Image style={styles.footer} src={footPDF} alt="Pie del PDF" />
            </Page>

            <Page>

                {/* Encabezado del pdf */}
                <Image style={styles.header} src={headerPDF} alt="Encabezado del PDF" />

                <View style={styles.information}>

                    {/* Terminación de la descripción de los resultados de la competencia 2 */}
                    <View style={{ flexDirection: 'row' }}>
                        {/* Imagen del corazón */}
                        <Image src={imageCompetence2} alt="Corazón" style={styles.image2} />
                        <Text style={styles.subsubtitle}>Se obtuvo un puntaje de {competence2Score} para {numberActivitiesCompetence} actividades.
                            Su desempeño fue del {"\n"}{porcentajeCompetencia2.toFixed(2)}% para la competencia {nameCompetence2} {"\n"}{"\n"}</Text>
                    </View>

                    {/* Puntaje general */}
                    <Text style={styles.subtitle}>{"\n"}{"\n"}Puntaje Total</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {/* Imagen del corazón */}
                        <Image src={imageGeneral} alt="Corazón" style={styles.image3} />
                        <Text style={styles.subsubtitle}>Obtuvo un puntaje de {testScore} para {numberActivities} actividades.
                            Su desempeño fue del {"\n"}{porcentajeGeneral.toFixed(2)}% a nivel general.{"\n"}{"\n"}{"\n"}</Text>
                    </View>
                </View>

                {/* Pie del pdf */}
                <Image style={styles.footer} src={footPDF} alt="Pie del PDF" />
            </Page>

            <Page>

                {/* Encabezado del pdf */}
                <Image style={styles.header} src={headerPDF} alt="Encabezado del PDF" />

                <View style={styles.information}>
                    {/* Información del informe, resultados de actividades, etc. */}
                    {resultados.map((resultado, index) => (
                        <View key={index} style={styles.content}>
                            <Text>Actividad {index + 1}</Text>
                            <Text>Puntaje: {resultado.score}</Text>
                            <Text>Tiempo: {resultado.time} segundos</Text>
                        </View>
                    ))}
                </View>
                 {/* Pie del pdf */}
                 <Image style={styles.footer} src={footPDF} alt="Pie del PDF" />
            </Page>
        </Document >
    );
};

export default ReportePDF;
