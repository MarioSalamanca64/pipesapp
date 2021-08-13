import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    //seria el nombre del pipe y siempre sera name
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    //siempre tiene que ser trasnform
    transform( valor: string, enMayusculas: boolean = true): string {
        //o tanbien 
       /* if(enMayusculas){
            return valor.toUpperCase();
        }else{
            return valor.toLowerCase();
        } */
        return (enMayusculas)
        ?valor.toUpperCase()
        :valor.toLowerCase();
    }
}