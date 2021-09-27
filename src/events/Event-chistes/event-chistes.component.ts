import { obtenerChiste } from '../../config';
import{dibujarChiste}from '..';
let btnOtro:HTMLButtonElement|null;
let olList:HTMLOListElement | null;

export const eventos=()=>{
    olList=document.querySelector('ol');
    btnOtro=document.querySelector('button');
    btnOtro?.addEventListener('click',async()=>{
        dibujarChiste(await obtenerChiste(),olList)
    });
}