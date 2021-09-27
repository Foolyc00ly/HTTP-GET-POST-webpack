import { IHResponse } from "../../classes/interfaces/IHResponse";

export const dibujarChiste=(chiste:IHResponse,olList:HTMLOListElement | null)=>{
    const olItem:HTMLLIElement=document.createElement('li');
    olItem.innerHTML=`<b>${chiste.id}</b>:${chiste.value}`;
    olItem.classList.add('list-group-item');
    (olList as HTMLOListElement).append(olItem);
}