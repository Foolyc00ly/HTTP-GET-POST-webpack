import{IHResponse}from '../classes/interfaces/IHResponse'
//Cloudinary
const jokeUrl:RequestInfo='https://api.chucknorris.io/jokes/random';
//
const obtenerChiste=async():Promise<IHResponse>=>{
    try{
        const resp:Response=await fetch(jokeUrl);
        if(!resp.ok){throw('No se pudo realizar la petición');}
        const{icon_url,id,value}=await resp.json();
        return {icon_url,id,value}
    }catch(err){
        throw err;
    }

}
export{obtenerChiste}
/* fetch(jokeUrl)
    .then(resp=>resp.json())
    .then(({id,value})=>{
        console.log(id,value);
    }); */