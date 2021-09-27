import{error,body}from '../spec/module-variable.component';
import{eventosUsers}from '../events'
let correlativo:number=0;
const crearUsuariosHTML=()=>{
    const htmlUser=`
        <h1 class="mt-5">Usuarios</h1>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">email</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    `;
    const divUsers:HTMLDivElement=document.createElement('div');
    divUsers.innerHTML=htmlUser;
    body.appendChild(divUsers || error('Elemento no Enviado'));
}
export const init=()=>{
    crearUsuariosHTML();
    eventosUsers(correlativo);
    correlativo=0;
}