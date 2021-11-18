import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltersCharacter } from 'src/app/pages/filter-character/models/filters-character';
import { environment } from 'src/environments/environment';
import { getCharactersRes } from '../models/get-characters-res';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly api_url : string = environment.api_rick_morty;

  getCharacters(page: string | null = null):Observable<getCharactersRes>{
    if(page == null){
      return this.http.get<getCharactersRes>(this.api_url);
    }else{
      return this.http.get<getCharactersRes>(`${this.api_url}/?page=${page}`);
    };
  };

  async findMatch(filters: FiltersCharacter): Promise<number>{
    return new Promise<number>(async resolve=>{
      switch(filters.filter){
        case 'Species' : 
          let count : number = 1;
          let found : boolean = false;
  
          while(true){
            const getCharacters: Promise<getCharactersRes> = new Promise<getCharactersRes>((resolve, reject)=>{
              this.getCharacters(count.toString()).subscribe(response=>{
                response.results.forEach(character=>{
                  if(character.species == filters.subFilter){
                    found = true;
                  };
                });
                resolve(response)
              },error=>{
                reject();
              });
            });
  
            await getCharacters;
            
            if(found){
              break;
            };

            count++;
          };
          
          resolve(count);

          break;
  
        case 'Status':
          let count2 : number = 1;
          let found2 : boolean = false;
  
          while(true){
            const getCharacters: Promise<getCharactersRes> = new Promise<getCharactersRes>((resolve, reject)=>{
              this.getCharacters(count2.toString()).subscribe(response=>{
                response.results.forEach(character=>{
                  if(character.status == filters.subFilter){
                    found2 = true;
                  };
                });
                resolve(response)
              },error=>{
                reject();
              });
            });
  
            await getCharacters;
            
            if(found2){
              break;
            };

            count2++;
          };
          
          resolve(count2);
  
          break;
  
        default :
          resolve(1);
          break; 
      }
    })
  } 
}
