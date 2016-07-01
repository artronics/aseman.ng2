import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { MenubarService } from "../../services/menu/menubar.service";
import { MenubarItemFactory } from "./MenubarItemFactory";

@Component({
  moduleId: module.id,
  selector: 'asm-ide',
  template: `
<asm-layout></asm-layout>
  `,
  directives:[LayoutComponent],
})
export class IdeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
