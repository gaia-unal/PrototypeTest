import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Test.css'

function Test() {
    // This is the domain to get the activities' route
    const domain = "http://localhost:3000";

    const srcIframe = domain + "/Activities/EarlyDetection/PhonologicalDyslexia/PhonologicalAwareness/1/indice.html";

    return (
        <div>
            <iframe src={srcIframe}></iframe>
        </div>
    )
}

export default Test