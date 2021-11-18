import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterCharacterService } from 'src/app/pages/filter-character/services/filter-character.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private filterCharacter: FilterCharacterService, private router: Router) { }

  ngOnInit(): void { 
  }

  showFilter(filter: string, subFilter: string){
    this.filterCharacter.filters.filter = filter;
    this.filterCharacter.filters.subFilter = subFilter;
    this.router.navigateByUrl('filter-character');
  }

}
