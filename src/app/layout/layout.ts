import { Input, Component} from '@angular/core';

@Component({
  selector: 'layout-comp',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent{
  @Input() names: string;
}
