import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public sleep$(ms:number): Observable<void>{
    return new Observable<void>(obs => {
      delay(ms);
      obs.next();
      obs.complete();
    })
  }
}
