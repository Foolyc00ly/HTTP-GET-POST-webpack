//Referencias HTML
const body:HTMLElement=document.body;
//Funcion Never
const error=(message:string):never=>{throw new Error(message)};
//Exportacion
export{error,body}