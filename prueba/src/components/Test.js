import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Test.css'

function Test() {
    const srcIframe = "http://localhost:3000/Activities/TypingActivity/indice.html";

    return (
        <div>
            <iframe src={srcIframe}></iframe>
        </div>
    )
}

export default Test