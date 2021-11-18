import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterService } from '../services/character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterGuard implements CanActivate {
  constructor(private characterService: CharacterService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.characterService.character.name != ''){
        return true;
      }else{
        this.router.navigateByUrl('home');
        return false;
      };
  }
  
}
