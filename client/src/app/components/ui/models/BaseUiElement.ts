import { Output, EventEmitter } from "@angular/core";

abstract class BaseUiElement {
  @Output() contextMenu:EventEmitter<any> = new EventEmitter();
}
export default BaseUiElement;
