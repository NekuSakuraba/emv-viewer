import {Component, Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value : Object) : any {
    let keys = [];
    console.log(value);
    for( let key in value ) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
