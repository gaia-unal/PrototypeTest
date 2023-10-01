import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Test } from './components/Test';
import { Header } from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Props indicate the type of test (phonological dyslexia or superficial dyslexia) */}
    <Header />
    
    <Test
      module="/Activities/EarlyDetection/PhonologicalDyslexia"
      competence1="/PhonologicalAwareness" />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
