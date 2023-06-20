import { Component } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-six-qui-prend',
  templateUrl: './six-qui-prend.component.html',
  styleUrls: ['./six-qui-prend.component.css'],
})
export class SixQuiPrendComponent {
  player: Player = {
    name: 'Yoann',
    score: 0,
  };
}
