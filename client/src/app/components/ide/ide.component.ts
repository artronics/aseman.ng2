import { Component, OnInit } from "@angular/core";
import { LayoutComponent } from "../ui/layout/layout.component";
import { Menubar } from "../ui/menu/Menubar";
import { IdeMenubar } from "./IdeMenubar";
import { ClickBroadcasterService } from "../../services/ui/events/click-broadcaster.service";

@Component({
  moduleId: module.id,
  selector:'asm-ide',
  templateUrl:'ide.component.html',
  styleUrls:['ide.component.css'],
  providers: [ClickBroadcasterService],
  directives:[
    LayoutComponent,
  ]
})

export class IdeComponent implements OnInit{
  menubar:Menubar;

  constructor(private _clickBroadcaster:ClickBroadcasterService) {
  }

  ngOnInit():any {
    let ideMenubar = new IdeMenubar();
    this.menubar=ideMenubar.creat();
  }

  onClick(){
    this._clickBroadcaster.fireSingleLeftClick();
  }
}
