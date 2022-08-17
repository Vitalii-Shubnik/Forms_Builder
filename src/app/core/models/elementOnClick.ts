import { FormItemService } from "../services/form-item.service";

export abstract class onClickFormItem {
  constructor(private formItemServie: FormItemService) { }
  onClick(el: HTMLElement): void {
    this.formItemServie.setActiveElement(el)
  }
}