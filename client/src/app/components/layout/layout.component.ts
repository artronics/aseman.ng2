import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MenubarComponent } from "../menubar/menubar.component";
import { DialogWidgetComponent } from "../ui/widgets/dialog-widget/dialog-widget.component";

@Component({
  moduleId: module.id,
  selector: 'asm-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css'],
  encapsulation:ViewEncapsulation.None,
  directives:[MenubarComponent,DialogWidgetComponent]
})
export class LayoutComponent implements OnInit {
  public isMenubarActive:boolean=false;
  public displayDialog:boolean;

  constructor() {}

  ngOnInit() {
  }

  onClick($event){
    /* We dont care about current value of isMenubarActive we just change it so angular trigger
    * its changes detection cycle*/
    this.isMenubarActive=!this.isMenubarActive;
  }

  onDialogCanceled(){
    this.displayDialog=false;
  }
  
  showDialog(){
    this.displayDialog=true;
  }

}
