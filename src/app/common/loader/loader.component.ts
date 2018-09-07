import { Component, OnInit, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  constructor() { }

  @Input() mode: any = 'indeterminate';
  @Input() position: any;
  @Input() align: any;

  ngOnInit() {
  }

}
