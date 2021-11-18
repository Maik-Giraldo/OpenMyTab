import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfiniteScrollService {

  constructor() { }

  private scrollDetected$: Subject<boolean> = new Subject<boolean>();
  
  listenScroll(): Observable<boolean>{
    return this.scrollDetected$.asObservable();
  }

  changeStatusScroll(): void{
    this.scrollDetected$.next(true);
  }
}
