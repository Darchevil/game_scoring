import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
})
export class GameFormComponent {
  numberPlayerFormControl = new FormControl(0, [Validators.max(7)]);
  numberPlayers: Array<string> = [];

  enteredNumber() {
    console.log(this.numberPlayerFormControl.value);
    if (this.numberPlayerFormControl.value != null) {
      this.createArray(this.numberPlayerFormControl.value);
    } else {
    }
  }
  createArray(i: number) {
    console.log(`i:${i}`);
    this.numberPlayers.length = i;
    console.log(this.numberPlayers);
  }
}
