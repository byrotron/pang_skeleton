import { Component } from '@angular/core';

@Component({
  selector: 'sktn-test',
  template: '<p>Hello {{ data.name }}</p>'
})
export class TestComponent {

  data: any;

}