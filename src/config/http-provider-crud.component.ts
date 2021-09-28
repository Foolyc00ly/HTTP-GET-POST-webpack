import { IHResponseData } from "../classes/interfaces/IHResponseData";
import {IUser} from '../classes/interfaces/IUser';
import { error } from "../spec/module-variable.component";
const urlCRUD:RequestInfo='https://reqres.in/api/users';
const getUser=async(id:number):Promise<IHResponseData>=>{
    try{
        const resp:Response=await fetch(`${urlCRUD}/${id}`);
        const {data:usuario}=await resp.json();
        return usuario;
    }catch(err){
        throw err;
    }
}

const crearUsuario=async(usuario:IUser):Promise<IUser>=>{
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

const actualizarUsuario=async(id:number,usuario:IUser):Promise<IUser>=>{
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