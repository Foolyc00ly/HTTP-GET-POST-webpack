import { IHResponseData } from "../classes/interfaces/IHResponseData";
import {IResponseUser} from '../classes/interfaces/IResponseUser';
import { error } from "../spec/module-variable.component";
//Cloudinary
const urlCRUD:RequestInfo='https://reqres.in/api/users';
//
const getUser=async(id:number):Promise<IHResponseData>=>{
    try{
        const resp:Response=await fetch(`${urlCRUD}/${id}`);
        const {data:usuario}=await resp.json();
        return usuario;
    }catch(err){
        throw err;
    }
}

const crearUsuario=async(usuario:IResponseUser):Promise<IResponseUser>=>{
    try{
        const resp:Response=await fetch(urlCRUD,{
            method:'POST',
            body:JSON.stringify(usuario),
            headers:{
                'Content-Type':'application/json'
            }
        });
        return await resp.json();
    }catch(err){
        throw err;
    }
}

const actualizarUsuario=async(id:number,usuario:IResponseUser):Promise<IResponseUser>=>{
    try{
        const resp:Response=await fetch(`${urlCRUD}/${id}`,{
            method:'PUT',
            body:JSON.stringify(usuario),
            headers:{
                'Content-Type':'application/json'
            }
        });
        return await resp.json();
    }catch(err){
        throw err;
    }
}
const borrarUsuario=async(id:number):Promise<string>=>{
    const resp:Response=await fetch(`${urlCRUD}/${id}`,{
        method:'DELETE'
    });
    return(resp.ok)?'Borrado':error(`No se pudo eliminar`)
}
export{
    getUser,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}