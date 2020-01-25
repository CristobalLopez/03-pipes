import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean = true): string {
    
    if(activar){
      let retorno: string ="";
      for (let i=0; i<value.length; i++) {
        retorno+="*";
        }

        return retorno;
    }else{
      return value;
    }        
  }

}
