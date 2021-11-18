import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/shared/models/get-characters-res';
import { ApiService } from 'src/app/shared/services/api.service';
import { InfiniteScrollService } from 'src/app/shared/services/infinite-scroll.service';
import { CharacterService } from '../../details-character/services/character.service';
import { FiltersCharacter } from '../models/filters-character';
import { FilterCharacterService } from '../services/filter-character.service';

@Component({
  selector: 'app-filter-character',
  templateUrl: './filter-character.component.html',
  styleUrls: ['./filter-character.component.css']
})
export class FilterCharacterComponent implements OnInit {

  constructor(private apiService : ApiService, private infiniteScroll: InfiniteScrollService, private filterCharacter: FilterCharacterService, private characterService: CharacterService, private router: Router) { }

  filters: FiltersCharacter = this.filterCharacter.filters;

  characters: Result[] = [];

  nextPage: string | null = null; 

  loading : boolean = true;

  async ngOnInit(): Promise<void> {
    await this.apiService.findMatch(this.filters).then(page=>{
      this.nextPage = `page=${page}`;
      this.getNextCharacters();
    })

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
          this.loading = false;
        });
      };
    }
  }

  viewDetails(character: Result){
    this.characterService.character.gender = character.gender;
    this.characterService.character.image = character.image;
    this.characterService.character.location = character.location;
    this.characterService.character.name = character.name;
    this.characterService.character.gender = character.gender;
    this.characterService.character.species = character.species;
    this.characterService.character.status = character.status;
    
    this.router.navigateByUrl("details-character");
  }

}
