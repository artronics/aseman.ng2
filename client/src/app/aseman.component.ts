import { Component } from "@angular/core";
import { IdeComponent } from "./components/ide/ide.component";

@Component({
  moduleId: module.id,
  selector: 'aseman-app',
  templateUrl: 'aseman.component.html',
  styleUrls: ['aseman.component.css'],
  directives:[IdeComponent],
})
export class AsemanAppComponent {
  title = 'Aseman Ide';
}
