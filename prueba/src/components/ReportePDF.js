import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import imagenGuiaResultados from "../assets/imagenGuiaResultados.png"
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
    },
    content: {
        fontSize: 14,
        marginBottom: 10,
        marginLeft: '5%'
    },
    image: {
        width: 375, // Ancho de la imagen
        height: 'auto', // Alto de la imagen
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
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

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* Nombre del informe */}
                <Text style={styles.title}>Reporte de Resultados {tipoDislexia}</Text>

                {/* Información general del informe */}
                <Text style={styles.subtitle}>{"\n"}Datos generales</Text>
                <Text style={styles.subtitle}>
                    {"\n"}
                    Nombre completo: {nameStudent}
                    {"\n"}
                    Fecha de presentación: {applicationDate}
                    {"\n"}
                    Edad: {age}
                </Text>

                {/* Imagen de guía de los resultados */}
                <Image src={imagenGuiaResultados} alt="Guía de resultados" style={styles.image} />

                {/* Datos por competencias */}
                <Text style={styles.subtitle}>{"\n"}{"\n"}Puntajes por competencias</Text>
                <View style={styles.content}>
                    <Text>{nameCompetence1}: {message1}{"\n"}{"\n"}</Text>
                    <Text>Se obtuvo un puntaje de {competence1Score} para {numberActivitiesCompetence} actividades.
                        Su desempeño fue del {porcentajeCompetencia1.toFixed(2)}% para esta competencia{"\n"}{"\n"}{"\n"}</Text>


                    <Text>{nameCompetence2}: {message2}{"\n"}{"\n"}</Text>
                    <Text>Se obtuvo un puntaje de {competence2Score} para {numberActivitiesCompetence} actividades.
                        Su desempeño fue del {porcentajeCompetencia2.toFixed(2)}% para esta competencia{"\n"}{"\n"}{"\n"}</Text>

                </View>

                {/* Puntaje general */}
                <Text style={styles.subtitle}>{"\n"}{"\n"}Puntaje Total</Text>
                <View style={styles.content}>
                    <Text>Obtuvo un puntaje de {testScore} para {numberActivities} actividades.
                    Su desempeño fue del {porcentajeGeneral.toFixed(2)}%.</Text>
                </View>

                {/* Información del informe, resultados de actividades, etc. */}
                {resultados.map((resultado, index) => (
                    <View key={index} style={styles.content}>
                        <Text>Actividad {index + 1}</Text>
                        <Text>Puntaje: {resultado.score}</Text>
                        <Text>Tiempo: {resultado.time} segundos</Text>
                    </View>
                ))}


            </Page>
        </Document>
    );
};

export default ReportePDF;
