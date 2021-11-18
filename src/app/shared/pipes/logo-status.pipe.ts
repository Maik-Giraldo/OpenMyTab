import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logoStatus'
})
export class LogoStatusPipe implements PipeTransform {

  transform(value: string): string {
    const dead : string = 'https://img.icons8.com/emoji/48/000000/skull-emoji.png';
    const alive : string = 'https://img.icons8.com/emoji/48/000000/green-heart.png';
    const unknown : string = 'https://img.icons8.com/color/50/000000/decision.png';

    switch(value){
      case 'Dead':
        return dead;
        break;
      
        case 'Alive':
          return alive;
          break;

        case 'unknown':
          return unknown;
          break;

        default:
          return unknown;
          break;
    }
  }

}
