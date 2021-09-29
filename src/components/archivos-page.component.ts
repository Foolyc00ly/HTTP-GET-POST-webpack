import{body,error}from '../spec/module-variable.component';
import{eventosInputFile}from '../events';
let inputFile:HTMLInputElement|null;
let imgFoto:HTMLImageElement|null;
const crearInputFileHTML=()=>{
    const htmlInputFile=`
    <div>
        <h1 class="mt-5">Subir Archivos</h1>
        <hr>
        <label>Selecciona una fotografia:</label>
        <input id="btnInputFile" type="file" accept="image/png ,image/jpeg"/>
        <br>
        <img id="foto" class="img-thumbnail" src"">
    </div>
    `;
    const divInputFilename:HTMLDivElement=document.createElement('div');
    divInputFilename.innerHTML=htmlInputFile;
    body.appendChild(divInputFilename.firstElementChild||error('Elemento no Enviado'))
    inputFile=document.querySelector('#btnInputFile');
    imgFoto=document.querySelector('#foto');
}

export const init=()=>{
    crearInputFileHTML();
    eventosInputFile(inputFile,imgFoto);
}