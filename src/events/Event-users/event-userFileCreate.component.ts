import{IHResponseData}from '../../classes/interfaces/IHResponseData';
export const crearFilaUsuario=(
    usuario:IHResponseData,
    TBody:HTMLTableSectionElement|null,
    correlativo:number
)=>{
    
    const htmlFileUser=`
        <td scope="col">${correlativo}</td>
        <td scope="col">${usuario.email}</td>
        <td scope="col">${usuario.first_name} ${usuario.last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;
    const trUser:HTMLTableRowElement=document.createElement('tr');
    trUser.innerHTML=htmlFileUser;
    (TBody as HTMLTableSectionElement).appendChild(trUser)
}