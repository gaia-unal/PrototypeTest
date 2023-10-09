import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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
    content: {
        fontSize: 14,
        marginBottom: 10,
    },
});

const ReportePDF = ({ resultados, competence1Score, competence2Score, testScore }) => {

    // Número de actividads para cada competencia
    const numberActivities = 7;

    // Calcula el porcentaje de desempeño en Competencia 1
    const porcentajeCompetencia1 = (competence1Score * 100) / numberActivities;

    // Calcula el porcentaje de desempeño en Competencia 1
    const porcentajeCompetencia2 = (competence2Score * 100) / numberActivities;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>Reporte de Resultados</Text>
                {/* Información del informe, resultados de actividades, etc. */}
                {resultados.map((resultado, index) => (
                    <View key={index} style={styles.content}>
                        <Text>Actividad {index + 1}</Text>
                        <Text>Puntaje: {resultado.score}</Text>
                        <Text>Tiempo: {resultado.time} segundos</Text>
                    </View>
                ))}
                {/* Puntajes finales de las competencias */}
                <View style={styles.competenceScores}>
                    <Text>Puntaje de Competencia 1: {competence1Score}, lo que equivale al {porcentajeCompetencia1.toFixed(2)}% de desempeño en esta competencia</Text>
                    <Text>Puntaje de Competencia 2: {competence2Score}, lo que equivale al {porcentajeCompetencia2.toFixed(2)}% de desempeño en esta competencia</Text>
                    <Text>Puntaje Total de la prueba: {testScore}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default ReportePDF;
