import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true ): any {
    var val = "";

    if(activar){
      for ( let i=0; i<value.length; i++ ) {
        val += "*";
      }
    }else{
      val = value;
    }

    return val;
  }

}
