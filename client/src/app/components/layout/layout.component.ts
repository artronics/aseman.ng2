import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";

@Component({
  moduleId: module.id,
  selector: 'asm-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css'],
  encapsulation:ViewEncapsulation.None,
  directives:[MenubarComponent]
})
export class LayoutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
