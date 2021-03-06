import {ComponentPortal, Portal, CdkPortal} from '@angular/cdk/portal';
import {Component, QueryList, ViewChildren} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'portal-demo',
  templateUrl: 'portal-demo.html',
  styleUrls: ['portal-demo.scss'],
})
export class PortalDemoComponent {
  @ViewChildren(CdkPortal) templatePortals: QueryList<Portal<any>>;
  
    selectedPortal: Portal<any>;
  
    get programmingJoke() {
      return this.templatePortals.first;
    }
  
    get mathJoke() {
      return this.templatePortals.last;
    }
  
    get scienceJoke() {
      return new ComponentPortal(ScienceJokeComponent);
    }
  }
  
  
@Component({
  moduleId: module.id,
  selector: 'science-joke',
  template: `<p> 100 kilopascals go into a bar. </p>`
})
export class ScienceJokeComponent { }
