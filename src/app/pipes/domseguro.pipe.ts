import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanatizer:DomSanitizer){ }

  transform(value: unknown, url:string): any {
    return this.domSanatizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
