import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-details-character',
  templateUrl: './details-character.component.html',
  styleUrls: ['./details-character.component.css']
})
export class DetailsCharacterComponent implements OnInit {

  constructor(private characterService : CharacterService) { }

  character : Character = this.characterService.character;

  ngOnInit(): void {
  }

}
