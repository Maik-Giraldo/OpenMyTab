import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    }

  }
}
