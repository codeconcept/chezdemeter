import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evenings',
  standalone: true,
  imports: [],
  templateUrl: './evenings.component.html',
  styleUrl: './evenings.component.css',
})
export class EveningsComponent {
  place: string = '';

  @Input()
  set town(townName: string) {
    console.log({ townName });
    this.place = townName;

    if (townName === undefined) {
      this.place = 'Rennes et Nantes';
    }
  }
}
