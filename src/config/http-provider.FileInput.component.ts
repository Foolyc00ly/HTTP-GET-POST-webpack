import{IHResponseFile}from '../classes/interfaces/IHResponseFile'
//Cloudinary
const cloudPreset='knd3dseb';
const cloudURL:RequestInfo='https://api.cloudinary.com/v1_1/df9cnm8rh/upload';
//
const subirImagen=async(archivoSubir:File):Promise<RequestInfo>=>{
    const formData=new FormData();//Resultado de formularioHTML
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivoSubir);
    try{
        const resp:Response=await fetch(cloudURL,{
            method:'POST',
            body:formData
        });
        if(resp.ok){
            const cloudResp:IHResponseFile=await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    }catch(e){throw e;}
}
export{subirImagen}