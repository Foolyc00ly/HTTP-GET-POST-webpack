import{IHResponseData}from '../classes/interfaces/IHResponseData';
//Cloudinary
const urlUsuarios:RequestInfo='https://reqres.in/api/users?page=1';
//
const obtenerUsuarios=async():Promise<IHResponseData[]>=>{
    try{
        const resp:Response=await fetch(urlUsuarios);
        const{data:usuarios}=await resp.json();
        return usuarios;
    }catch(err){
        throw err;
    }
}
export{obtenerUsuarios}