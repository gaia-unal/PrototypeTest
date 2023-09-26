import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Test.css'

function Test() {
    // This is the domain to get the activities' route
    const domain = "http://localhost:3000";

    const srcIframe = [
        domain + "/Activities/EarlyDetection/PhonologicalDyslexia/PhonologicalAwareness/1/indice.html",
        domain + "/Activities/EarlyDetection/PhonologicalDyslexia/PhonologicalAwareness/2/indice.html",
        domain + "/Activities/EarlyDetection/SuperficialDyslexia/VisualDiscrimination/1/indice.html"
    ];

    return (
        <div className='iframe-container'>
            <iframe src={srcIframe[0]} title="Actividad" scrolling='no'></iframe>
        </div>
    )
}

export default Test