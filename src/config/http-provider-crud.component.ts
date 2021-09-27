import { IHResponseData } from "../classes/interfaces/IHResponseData";
const urlCRUD:RequestInfo='https://reqres.in/api/users';
const getUser=async(id:number):Promise<IHResponseData>=>{
    try{
        const resp:Response=await fetch(`${urlCRUD}/${id}`);
        const {data}:IHResponseData=await resp.json();
        return data
    }catch(err){
        throw err;
    }
}
export{getUser}