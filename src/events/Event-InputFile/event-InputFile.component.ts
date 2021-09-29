import{subirImagen}from '../../config/http-provider.FileInput.component'

export const eventos=(
    inputFile:HTMLInputElement|null,
    imgFoto:HTMLImageElement|null
)=>{
    inputFile?.addEventListener('change',(e)=>{
        const file = ((e.target as HTMLInputElement).files as FileList)[0];
        subirImagen(file)
            .then(url=>{((imgFoto as HTMLImageElement).src as RequestInfo)=url});
    })
}