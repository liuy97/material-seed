import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'progress-circle-demo',
  templateUrl: 'progress-circle-demo.html',
  styleUrls: ['progress-circle-demo.scss'],
})
export class ProgressCircleDemoComponent {
  progressValue: number = 60;
  color: string = 'primary';
  modeToggle: boolean = false;

  step(val: number) {
    this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
  }

}
