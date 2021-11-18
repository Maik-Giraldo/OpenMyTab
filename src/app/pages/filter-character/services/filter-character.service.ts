import { Injectable } from '@angular/core';
import { FiltersCharacter } from '../models/filters-character';

@Injectable({
  providedIn: 'root'
})
export class FilterCharacterService {

  constructor() { }

  filters: FiltersCharacter = new FiltersCharacter();
}
