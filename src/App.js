import logo from './logo.svg';
import { useEffect } from 'react';
import Quagga from 'quagga';
import './App.css';

function App() {
    useEffect(() => {
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#barcode-scanner'),
        },
        decoder: {
          readers: ['ean_reader'], // ou use 'code_128_reader' ou outros conforme necessário
        },
      }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
  
        return () => {
          Quagga.stop();
        };
      });
  
      Quagga.onDetected((data) => {
        console.log('Código de barras detectado:', data.codeResult.code);
      });
    }, []);
  return (
    <div className="App">
      <div id="barcode-scanner" style={{ width: '100%', height: '100vh' }}></div>    
    </div>
  );
}

export default App;
