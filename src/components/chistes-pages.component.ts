import{error,body}from '../spec/module-variable.component';
import{eventosChistes} from '../events';
const crearChistesHTML=()=>{
    const htmlChiste=`
        <div>
            <h1 class="mt-5">Chistes</h1>
            <hr>
            <button  class="btn btn-primary">Otro Chiste</button>
            <ol class="mt-2 list-group">
                
            </ol>
        </div>
    `;
    const divChistes:HTMLDivElement=document.createElement('div');
    divChistes.innerHTML=htmlChiste;
    body.append(divChistes.firstElementChild|| error('Elemento no Enviado'));
}

export const init=()=>{
    crearChistesHTML();
    eventosChistes();
}