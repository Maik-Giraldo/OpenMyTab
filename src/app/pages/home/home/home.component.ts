import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/shared/models/get-characters-res';
import { ApiService } from 'src/app/shared/services/api.service';
import { InfiniteScrollService } from 'src/app/shared/services/infinite-scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService : ApiService, private infiniteScroll: InfiniteScrollService) { }

  characters!: Result[];

  nextPage: string | null = null; 

  loading : boolean = true;

  ngOnInit(): void {
    this.getCharacters();

    this.infiniteScroll.listenScroll().subscribe(x =>{
      this.getNextCharacters();
    })
  }

  getCharacters(): void{
    this.apiService.getCharacters().subscribe(response => {
      this.characters = response.results;
      this.nextPage = response.info.next;
      this.loading = false
    });
  }

  getNextCharacters(){
    if(this.nextPage != null){
      const next: string | undefined = this.nextPage?.split("=")[1];
      this.loading = true;
      
      if(next !==  undefined){
        this.apiService.getCharacters(next).subscribe(response =>{
          response.results.forEach(character=>{
            this.characters.push(character);
          });
          this.nextPage = response.info.next;
        });
        this.loading = false;
      };
    }
  }

}
