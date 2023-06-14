import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //despliegue server rapido
  //npm run build (nos genera una carpeta "dist")
  //npm install --global http-server (instalamos este paquete)
  //nos posicionamos en la carpeta "dist" creada con el build usando la terminal y ejecutamos
  //http-server -o

  //advertencia: puede pasar que tengamos el siguiente error: la política de ejecución de scripts de PowerShell en tu sistema impide la ejecución del archivo http-server.ps1.
  //SOLUCION: abrir powershell en modo administrador y ejecutar:
  //Get-ExecutionPolicy //lo más probable es que nos aparezca "restricted". Para cambiar esto ejecutamos
  //Set-ExecutionPolicy RemoteSigned
  //y listo
  //para volver a restringir ejecutamos
  //Set-ExecutionPolicy Restricted

  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>,
);
