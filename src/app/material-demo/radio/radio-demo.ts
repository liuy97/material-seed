import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'radio-demo',
  templateUrl: 'radio-demo.html',
  styleUrls: ['radio-demo.scss'],
})
export class RadioDemoComponent {
  isAlignEnd: boolean = false;
  isDisabled: boolean = false;
  isRequired: boolean = false;
  favoriteSeason: string = 'Autumn';
  seasonOptions = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
