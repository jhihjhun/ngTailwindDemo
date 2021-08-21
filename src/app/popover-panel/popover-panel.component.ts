import { TemplateRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-panel',
  templateUrl: './popover-panel.component.html',
  styleUrls: ['./popover-panel.component.scss']
})
export class PopoverPanelComponent implements OnInit {

  @Input() isShowPanel = false;
  @Input() childTemplate?: TemplateRef<any> | null;

  constructor() { }

  ngOnInit(): void {
  }
}
