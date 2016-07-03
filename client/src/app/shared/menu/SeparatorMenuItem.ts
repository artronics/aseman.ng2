import { BaseMenuItem } from "./BaseMenuItem";

class SeparatorMenuItem extends BaseMenuItem{

  constructor() {
    super();
    this._displayName='';
    this._enable=false;
  }

  /**
   * Overrided setter. There is no way to enable a separator
   * @param value
   */
  set enable(value:boolean) {
  }
}
