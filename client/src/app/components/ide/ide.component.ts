import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";

@Component({
  moduleId: module.id,
  selector: 'asm-ide',
  template: `
<asm-layout></asm-layout>
  `,
  styleUrls: ['ide.component.css'],
  directives:[LayoutComponent]
})
export class IdeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
