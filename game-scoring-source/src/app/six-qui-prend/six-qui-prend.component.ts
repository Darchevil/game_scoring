import { Component } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-six-qui-prend',
  templateUrl: './six-qui-prend.component.html',
  styleUrls: ['./six-qui-prend.component.css'],
})
export class SixQuiPrendComponent {
  public players: Player[] = [];
  submitted: boolean = false;

  constructor(private location: Location, private route: ActivatedRoute) {}

  back(): void {
    this.location.back();
  }
}
