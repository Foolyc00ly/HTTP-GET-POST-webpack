import{obtenerUsuarios}from '../../config';
import{crearFilaUsuario}from '../';
import{IHResponseData}from '../../classes/interfaces/IHResponseData'
let TBody:HTMLTableSectionElement|null;
export const eventos=async(correlativo:number)=>{
    TBody=document.querySelector('tbody');
    (await obtenerUsuarios()).forEach(
        u=>crearFilaUsuario( u,TBody,++correlativo)
    );
}