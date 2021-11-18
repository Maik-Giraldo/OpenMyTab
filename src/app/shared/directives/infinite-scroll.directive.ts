import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject } from '@angular/core';
import { InfiniteScrollService } from '../services/infinite-scroll.service';

@Directive({
  selector: '[infiniteScroll]'
})
export class InfiniteScrollDirective {

  constructor(@Inject(DOCUMENT) private document: Document, private infiniteScroll: InfiniteScrollService) { }

  @HostListener("window:scroll") onWindowScroll(): void{
    const scrollTop = parseInt(this.document.documentElement.scrollTop.toFixed());
    const windowHeight : number = window.innerHeight;
    const scrollHeight = this.document.documentElement.scrollHeight - windowHeight;

    if(scrollTop == scrollHeight){
      this.infiniteScroll.changeStatusScroll();
    };
  }

}
