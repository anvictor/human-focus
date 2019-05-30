import {Component, Input} from '@angular/core';

@Component({
  selector: 'tab',
  styleUrls: ['./tab.css'],
  templateUrl: './tab.html',
})
export class Tab {
  @Input() names: string;
}
