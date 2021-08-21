import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-popover-btn',
  templateUrl: './popover-btn.component.html',
  styleUrls: ['./popover-btn.component.scss']
})
export class PopoverBtnComponent implements OnInit {

  @Input() imgSrc?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
