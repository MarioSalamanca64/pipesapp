import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'vuela'
})

export class VuelaPipes implements PipeTransform{
    transform(valor: boolean):string{

        return(valor)?'vuela':'no vuela';
    }
}